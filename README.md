## Учебный проект

Учебный проект веб-сайта, разработанный с использованием современного стека технологий. Включает главную страницу с секциями услуг, портфолио, отзывов клиентов и функциональной контактной формой.

## Технологический стек

- **Frontend**: 
  - React 18 (TypeScript)
  - SS Modules
  - Swiper.js (для слайдеров)
  - Wouter (роутинг)
  - React Testing Library (для тестирования)
- **Build**: 
  - Vite (для сборки проекта)
- **Дополнительно**:
  - Кастомные хуки

## Структура проекта
```
├───public
│   └───images
│           img_hero.png
│
└───src
    │   App.tsx
    │   index.css
    │   main.tsx
    │   setupTests.ts
    │
    ├───components
    │   │   CompanyLogos.tsx
    │   │   ContactSection.tsx
    │   │   Footer.tsx
    │   │   Header.test.tsx
    │   │   Header.tsx
    │   │   Hero.tsx
    │   │   Layout.tsx
    │   │   Modal.tsx
    │   │   Portfolio.tsx
    │   │   Preloader.tsx
    │   │   Services.tsx
    │   │   Testimonials.tsx
    │   │
    │   └───ui
    │           Card.test.tsx
    │           Card.tsx
    │
    ├───context
    │       ModalContext.tsx
    │
    ├───data
    │       services.json
    │
    ├───hooks
    │       useFetch.ts
    │       useFormInput.ts
    │       useToggle.test.ts
    │       useToggle.ts
    │
    ├───pages
    │       CardsPage.tsx
    │       NotFoundPage.tsx
    │       ServiceDetailPage.tsx
    │
    ├───styles
    │   │   style.css
    │   │
    │   ├───base
    │   │       normalize.css
    │   │
    │   └───blocks
    │           cards-page.module.css
    │           company-logos.module.css
    │           contact-section.module.css
    │           footer.module.css
    │           header.module.css
    │           hero.module.css
    │           modal.module.css
    │           not-found.module.css
    │           page.module.css
    │           portfolio.module.css
    │           preloader.module.css
    │           services.module.css
    │           testimonials.module.css
    │
    ├───types
    │       index.ts
    │
    └───utils
            icons.ts
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

        Кастомный хуки useToggle, useFormInput, useFetch

    Функционал:

        Модальное окно с валидацией формы

        Динамическая загрузка услуг из JSON

        Роутинг между страницами
