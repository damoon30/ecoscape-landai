# EcoScape LandAI 网站部署指南

## 域名信息
- **域名**: ecoscapeli.com
- **注册商**: 阿里云
- **用途**: LandAI风景园林AI设计助手官网

---

## 第一步：阿里云DNS解析配置

### 1.1 登录阿里云控制台
访问: https://dns.console.aliyun.com/

### 1.2 添加解析记录
在你的域名下添加以下A记录：

| 主机记录 | 记录类型 | 解析线路 | 记录值 | TTL |
|---------|---------|---------|-------|-----|
| @ | A | 默认 | 你的服务器IP | 600 |
| www | A | 默认 | 你的服务器IP | 600 |

**示例**（假设你的服务器IP是 1.2.3.4）：
```
@    A    默认    1.2.3.4    600
www  A    默认    1.2.3.4    600
```

### 1.3 等待DNS生效
- 通常需要 5-30 分钟
- 可以用 `ping ecoscapeli.com` 测试是否解析成功

---

## 第二步：服务器配置（Ubuntu/Debian）

### 2.1 连接到你的服务器
```bash
ssh root@你的服务器IP
```

### 2.2 安装Nginx
```bash
# 更新软件包
apt update

# 安装Nginx
apt install nginx -y

# 启动Nginx
systemctl start nginx
systemctl enable nginx

# 查看Nginx状态
systemctl status nginx
```

### 2.3 创建网站目录
```bash
# 创建目录
mkdir -p /var/www/ecoscapeli.com

# 设置权限
chown -R www-data:www-data /var/www/ecoscapeli.com
chmod -R 755 /var/www/ecoscapeli.com
```

### 2.4 上传网站文件

**方式1：使用SCP（本地终端执行）**
```bash
scp -r /path/to/landai-app/dist/* root@你的服务器IP:/var/www/ecoscapeli.com/
```

**方式2：使用SFTP工具**
- FileZilla / WinSCP 连接服务器
- 上传 dist 目录内所有文件到 `/var/www/ecoscapeli.com/`

**方式3：使用Git（如果代码在Git仓库）**
```bash
cd /var/www/ecoscapeli.com
git clone 你的Git仓库地址 .
```

### 2.5 配置Nginx
```bash
# 创建配置文件
cat > /etc/nginx/sites-available/ecoscapeli.com << 'EOF'
server {
    listen 80;
    listen [::]:80;
    server_name ecoscapeli.com www.ecoscapeli.com;
    
    root /var/www/ecoscapeli.com;
    index index.html;
    
    # 日志
    access_log /var/log/nginx/ecoscapeli-access.log;
    error_log /var/log/nginx/ecoscapeli-error.log;
    
    # Gzip压缩
    gzip on;
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_types text/plain text/css text/xml application/json application/javascript application/rss+xml application/atom+xml image/svg+xml;
    
    # 缓存静态资源
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Next.js静态导出支持
    location / {
        try_files $uri $uri.html $uri/ =404;
    }
    
    # 404页面
    error_page 404 /404.html;
}
EOF

# 启用配置
ln -sf /etc/nginx/sites-available/ecoscapeli.com /etc/nginx/sites-enabled/

# 删除默认配置（可选）
rm -f /etc/nginx/sites-enabled/default

# 检查配置
nginx -t

# 重载Nginx
systemctl reload nginx
```

---

## 第三步：配置HTTPS（SSL证书）

### 3.1 安装Certbot
```bash
# 安装Certbot和Nginx插件
apt install certbot python3-certbot-nginx -y
```

### 3.2 申请SSL证书
```bash
# 自动申请并配置
certbot --nginx -d ecoscapeli.com -d www.ecoscapeli.com --agree-tos --non-interactive --email your-email@example.com

# 手动申请（推荐，可以设置邮箱）
certbot --nginx -d ecoscapeli.com -d www.ecoscapeli.com
```

### 3.3 自动续期测试
```bash
# 测试自动续期
certbot renew --dry-run
```

Certbot会自动设置定时任务续期证书。

---

## 第四步：防火墙配置

### 4.1 开放必要端口
```bash
# 如果使用UFW
ufw allow 'Nginx Full'
ufw allow OpenSSH
ufw enable

# 或者使用iptables
iptables -I INPUT -p tcp --dport 80 -j ACCEPT
iptables -I INPUT -p tcp --dport 443 -j ACCEPT
iptables -I INPUT -p tcp --dport 22 -j ACCEPT
```

### 4.2 阿里云安全组配置
登录阿里云控制台 → ECS → 安全组 → 配置规则：

| 类型 | 端口范围 | 授权对象 | 优先级 |
|-----|---------|---------|-------|
| HTTP(80) | 80/80 | 0.0.0.0/0 | 1 |
| HTTPS(443) | 443/443 | 0.0.0.0/0 | 1 |
| SSH(22) | 22/22 | 你的IP/32 | 1 |

---

## 第五步：验证部署

### 5.1 检查网站是否可访问
```bash
# 本地测试
curl -I http://ecoscapeli.com

# 应该返回 HTTP/1.1 200 OK
```

### 5.2 浏览器访问
- http://ecoscapeli.com
- https://ecoscapeli.com (配置SSL后)

### 5.3 常见问题排查

**问题1：403 Forbidden**
```bash
# 检查文件权限
chown -R www-data:www-data /var/www/ecoscapeli.com
chmod -R 755 /var/www/ecoscapeli.com
```

**问题2：404 Not Found**
```bash
# 检查index.html是否存在
ls -la /var/www/ecoscapeli.com/

# 检查Nginx配置
nginx -t
```

**问题3：SSL证书错误**
```bash
# 重新申请证书
certbot --nginx -d ecoscapeli.com --force-renewal
```

---

## 网站更新方法

当网站有更新时，重新上传dist目录即可：

```bash
# 本地执行
scp -r /path/to/landai-app/dist/* root@你的服务器IP:/var/www/ecoscapeli.com/
```

---

## 相关文件位置

| 文件/目录 | 路径 |
|---------|------|
| 网站根目录 | /var/www/ecoscapeli.com |
| Nginx配置 | /etc/nginx/sites-available/ecoscapeli.com |
| Nginx日志 | /var/log/nginx/ecoscapeli-*.log |
| SSL证书 | /etc/letsencrypt/live/ecoscapeli.com/ |

---

## 一键部署脚本（保存为 deploy.sh）

```bash
#!/bin/bash

# 配置变量
DOMAIN="ecoscapeli.com"
SERVER_IP="你的服务器IP"
WEB_ROOT="/var/www/ecoscapeli.com"

# 本地构建
echo "正在构建网站..."
cd /root/.openclaw/workspace/landai-app
npm run build

# 上传到服务器
echo "正在上传到服务器..."
scp -r dist/* root@$SERVER_IP:$WEB_ROOT/

# SSH到服务器执行清理
echo "正在清理缓存..."
ssh root@$SERVER_IP "nginx -t && systemctl reload nginx"

echo "部署完成！访问: https://$DOMAIN"
```

赋予执行权限：
```bash
chmod +x deploy.sh
./deploy.sh
```
