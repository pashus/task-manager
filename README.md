# TASK-MANAGER

Простой менеджер задач, с возможностью их редактирования

## Запуск проекта

1. Склонировать репозиторий

```bash
git clone git@github.com:pashus/task-manager.git
```

или

```bash
git clone https://github.com/pashus/task-manager.git
```

2. Установить зависимости

```bash
npm install
```

3. Запуск в режиме разработчика

```bash
npm run dev
```

4. Сборка в production

```bash
npm run build
```

**Технологии**

- Vite
- React
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- Redux Toolkit

В проекте использовалась библиотека компонентов shadcn/ui, благодаря которой можно при помощи Tailwind v4 сразу настраивать стилизацию компонентов.

Сразу дано 5 карточек, при нажатии на "Edit" можно перейти на страницу редактирования карточки.  
Доступно 5 категорий, 3 статуса и 3 уровня приоритета. Все они имеют свой цвет.

В редакторе карточки обязательные поля: заголовок, категория, статус и приоритет.

**Описание FSD**

Проект разбит на 4 слоя:

1. app
2. entities
3. pages
4. shared

В app лежат store и App.tsx

В entities у меня у срез task в котором лежат слайс из RTK и компоненты по типу кнопок фильтрации, TaskItem и TaskForm

В pages 3 страницы: list, new, details

В shared переиспользуемые компоненты: ui из библиотеки shadcn, константы и типы

Выполнил: Мартынов Павел Максимович
