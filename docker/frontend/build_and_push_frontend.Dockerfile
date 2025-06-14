# syntax=docker/dockerfile:1
# Keep this syntax directive! It's used to enable Docker BuildKit

################################
# BUILDER-BASE
################################

# 1. force platform to the current architecture to increase build speed time on multi-platform builds
FROM --platform=$BUILDPLATFORM node:lts-bookworm-slim AS builder-base

# Set working directory
WORKDIR /frontend

# Copy package files first to leverage Docker cache for dependencies
COPY src/frontend/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the frontend code
COPY src/frontend/ ./

# Build the frontend with increased memory limit
ENV NODE_OPTIONS="--max-old-space-size=4096"
RUN npm run build

################################
# RUNTIME
################################
FROM nginxinc/nginx-unprivileged:stable-bookworm-perl AS runtime

LABEL org.opencontainers.image.title=langflow-frontend
LABEL org.opencontainers.image.authors=['CentaurOps']
LABEL org.opencontainers.image.licenses=MIT
LABEL org.opencontainers.image.url=https://github.com/langflow-ai/langflow
LABEL org.opencontainers.image.source=https://github.com/langflow-ai/langflow

COPY --from=builder-base --chown=nginx /frontend/build /usr/share/nginx/html
COPY --chown=nginx ./docker/frontend/start-nginx.sh /start-nginx.sh
COPY --chown=nginx ./docker/frontend/default.conf.template /etc/nginx/conf.d/default.conf.template
RUN chmod +x /start-nginx.sh
ENTRYPOINT ["/start-nginx.sh"]