# Используем официальный образ PHP 8.1 CLI с поддержкой композитора
FROM php:8.1-cli

# Устанавливаем необходимые зависимости и расширения PHP
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    libzip-dev \
    && docker-php-ext-install zip pdo pdo_mysql

# Устанавливаем Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Устанавливаем рабочую директорию
WORKDIR /var/www

# Копируем файлы приложения в контейнер
COPY . .

# Устанавливаем зависимости приложения
RUN composer install --no-dev --optimize-autoloader

# Устанавливаем права доступа к директориям
RUN chown -R www-data:www-data /var/www/storage /var/www/bootstrap/cache

# Указываем порт, который будет использоваться
EXPOSE 8000

# Команда для запуска PHP встроенного сервера
CMD php artisan serve --host=0.0.0.0 --port=8000
