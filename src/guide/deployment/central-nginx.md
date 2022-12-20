# Nginx
To forward requests to the docker-containers, it is required to configure nginx as a reverse proxy.
Therefore, two separate configurations for [harbor](#harbor) and the [app](#app) must be created.

## Harbor
For harbor, we create a new file (e.g. `harbor`) in the directory `/etc/nginx/sites-enabled` with the following content:

::: warning Info
Don't forget to replace the placeholders with the actual values:

- `[HARBOR_DOMAIN]`: Domain name (e.g. harbor.example.com)
- `[HARBOR_ADDRESS]`: Ip Address:Port of the harbor instance rev. proxy (e.g. 192.168.1.1:443)
- `[HARBOR_SSL_CRT]`: Path to certificate file (.crt)
- `[HARBOR_SSL_KEY]`: Path to certificate key file (.key)
:::

```text
server {
    server_name [HARBOR_DOMAIN];

    gzip            on;
    gzip_types      text/plain application/xml text/css application/javascript;
    gzip_min_length 1000;

    client_max_body_size 0;
    chunked_transfer_encoding on;
    
    listen 443 ssl;
    ssl_certificate [HARBOR_SSL_CRT];
    ssl_certificate_key [HARBOR_SSL_KEY];
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

    location / {
        proxy_redirect                      off;
        proxy_set_header Host               $host;
        proxy_set_header X-Real-IP          $remote_addr;
        proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto  $scheme;
        proxy_pass                          [HARBOR_ADDRESS];

        proxy_buffering off;
        proxy_request_buffering off;
    }

}
server {
    if ($host = [HARBOR_DOMAIN]) {
        return 301 https://$host$request_uri;
    }


    server_name [HARBOR_DOMAIN];
    listen 80;
    return 404;

}

```

## App
For the app we need to create a new file (e.g. `app`) in the directory `/etc/nginx/sites-enabled` with the following content:

::: warning Info
Don't forget to replace the placeholders with the actual values:
- `[APP_DOMAIN]` Domain name (e.g. app.example.com)
- `[APP_SSL_CRT]`: Certificate file (.crt)
- `[APP_SSL_KEY]`: Certificate key file (.key)
:::

```text
map $sent_http_content_type $expires {
    "text/html"                 epoch;
    "text/html; charset=utf-8"  epoch;
    default                     off;
}

upstream phtUiUpstream {
    ip_hash;

    server 127.0.0.1:3000;
}

upstream phtRealtimeUpstream {
        ip_hash;

        server 127.0.0.1:3001;
}

upstream phtApiUpstream {
        ip_hash;

        server 127.0.0.1:3002;
}

server {
    server_name [APP_DOMAIN];
    listen 443 ssl;
    
    ssl_certificate [APP_SSL_CRT];
    ssl_certificate_key [APP_SSL_KEY];
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

    gzip            on;
    gzip_types      text/plain application/xml text/css application/javascript;
    gzip_min_length 1000;
    
    client_max_body_size 0;
    chunked_transfer_encoding on;

    location / {
        expires $expires;

        proxy_redirect                      off;
        proxy_set_header Host               $host;
        proxy_set_header X-Real-IP          $remote_addr;
        proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto  $scheme;
        proxy_read_timeout          1m;
        proxy_connect_timeout       1m;
        proxy_pass                          http://phtUiUpstream;
    }


    location /api/ {
        rewrite ^/api(/.*)$ $1 break;

        proxy_redirect                      off;
        proxy_set_header Host               $host;
        proxy_set_header X-Real-IP          $remote_addr;
        proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto  $scheme;
        proxy_read_timeout          2m;
        proxy_connect_timeout       2m;
        proxy_pass                          http://phtApiUpstream;
    }
    
    location /socket.io/ {
        proxy_set_header Host               $host;
        proxy_set_header X-Real-IP          $remote_addr;
        proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto  $scheme;

        proxy_pass                          http://phtRealtimeUpstream;

        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}

server {
    if ($host = [APP_DOMAIN]) {
        return 301 https://$host$request_uri;
    }


    listen 80;
    server_name [APP_DOMAIN];
    return 404;
}
```

## Installer
