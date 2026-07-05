# ── Stage 1: Build ─────────────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# ── Stage 2: Production image ──────────────────────────────────────
FROM nginx:alpine

# Remove default config
RUN rm -f /etc/nginx/conf.d/default.conf

# Configure environment
ENV NGINX_ROOT_PATH=/etc/nginx
ENV APP_ROOT_PATH=/usr/share/nginx/html
ENV NGINX_LOG_PATH=/var/log/nginx
ENV NGINX_CONF_PATH=$NGINX_ROOT_PATH/conf.d

# Copy nginx configuration
COPY nginx/nginx.conf $NGINX_ROOT_PATH/nginx.conf
COPY nginx/default.conf $NGINX_CONF_PATH/default.conf

# Copy build artifacts from builder
COPY --from=builder /app/out $APP_ROOT_PATH

# Security hardening
RUN mkdir -p /tmp/nginx_cache /var/cache/nginx /var/run $NGINX_LOG_PATH \
    && chown -R nginx:nginx $APP_ROOT_PATH /tmp/nginx_cache /var/cache/nginx /var/run $NGINX_LOG_PATH \
    && chmod -R 755 $APP_ROOT_PATH /tmp/nginx_cache /var/cache/nginx /var/run $NGINX_LOG_PATH

USER nginx

EXPOSE 80