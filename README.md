
## Учебный проект
=======
Учебный проект

Учебный проект веб-сайта, разработанный с использованием современного стека технологий. Включает главную страницу с секциями услуг, портфолио, отзывов клиентов и функциональной контактной формой.

## Технологический стек

- **Frontend**: 
  - React 18 (TypeScript)
  - Tailwind CSS + CSS Modules
  - Swiper.js (для слайдеров)
  - Wouter (роутинг)
- **Build**: 
  - Vite
- **Дополнительно**:
  - React Query
  - Кастомные хуки (useMobile, useToast)

## Структура проекта
```
+---public
|   \---images
|           img_hero.png
|
\---src
    |   App.tsx
    |   index.css
    |   main.tsx
    |
    +---components
    |       CompanyLogos.tsx
    |       Footer.tsx
    |       Header.tsx
    |       Hero.tsx
    |       Modal.tsx
    |       Portfolio.tsx
    |       Preloader.tsx
    |       Services.tsx
    |       Testimonials.tsx
    |
    +---data
    |       services.json
    |
    +---hooks
    |       use-mobile.tsx
    |       use-toast.ts
    |
    +---lib
    |       queryClient.ts
    |       utils.ts
    |
    +---pages
    |   |   CardsPage.tsx
    |   |   not-found.tsx
    |   |   NotFoundPage.tsx
    |   |
    |   \---sections
    |           AboutCompanySection.tsx
    |           ContactSection.tsx
    |           HeroSection.tsx
    |           PortfolioSection.tsx
    |           ServicesSection.tsx
    |           TestimonialsSection.tsx
    |
    \---styles
        |   style.css
        |
        +---base
        |       normalize.css
        |
        \---blocks
                cards-page.css
                company-logos.css
                footer.css
                header.css
                hero.css
                modal.css
                not-found.css
                page.css
                portfolio.css
                preloader.css
                services.css
                testimonials.css
```
## Запуск проекта

1. **Установка зависимостей**:
   npm install

    Запуск в development режиме:
   npm run dev

Особенности реализации

    Анимации и интерактивность:

        Плавные переходы между секциями

        Анимированный прелоадер

        Интерактивные слайдеры (Portfolio, Testimonials)

    Адаптивность:

        Полностью адаптивный дизайн

        Кастомный хук useMobile для условного рендеринга

        Медиа-запросы через Tailwind

    Функционал:

        Модальное окно с валидацией формы

        Динамическая загрузка услуг из JSON

        Роутинг между страницами
