# Usa a imagem oficial do PHP 8.2 com FPM (FastCGI Process Manager)
FROM php:8.2-fpm-alpine

# Define o diretório de trabalho dentro do contêiner
WORKDIR /var/www/html

# Instala dependências do sistema e extensões do PHP necessárias para o Laravel
RUN apk add --no-cache \
    build-base \
    linux-headers \
    libzip-dev \
    zip \
    oniguruma-dev \
    curl \
    git \
    && docker-php-ext-install \
    pdo \
    pdo_mysql \
    mbstring \
    exif \
    pcntl \
    bcmath \
    sockets \
    zip

# Instala o Composer (Gerenciador de dependências do PHP)
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Altera o dono do diretório para o usuário que o PHP-FPM usa
# Isso evita problemas de permissão
RUN chown -R www-data:www-data /var/www/html

# Expõe a porta 9000 para comunicação com o Nginx
EXPOSE 9000