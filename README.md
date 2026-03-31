# Ayanation

Full-stack приложение с GraphQL API (Apollo Server + MongoDB) и React-фронтендом (Vite + shadcn/ui).

## Структура проекта

```
ayanation/
├── server/                 # Backend (Node.js + Apollo GraphQL)
│   ├── graphql/           # GraphQL схемы
│   │   └── User/          # Модуль пользователей
│   │       ├── enums.js   # Enum типы
│   │       ├── types.js   # Объекты и input типы
│   │       ├── queries.js # Query операции
│   │       └── mutations.js # Mutation операции
│   ├── resolvers/         # GraphQL резолверы
│   │   └── User/          # Резолверы для User
│   ├── models/            # Mongoose модели
│   ├── utils/             # Утилиты
│   │   └── helpers.js     # Prisma-like билдеры запросов
│   ├── seed/              # Скрипты заполнения БД
│   ├── index.js           # Точка входа сервера
│   └── package.json
├── client/                # Frontend (React + Vite)
│   ├── src/
│   │   ├── components/    # UI компоненты (shadcn/ui)
│   │   ├── pages/         # Страницы
│   │   ├── hooks/         # Кастомные хуки
│   │   └── lib/           # Библиотеки
│   ├── index.html
│   └── package.json
└── deploy/                # Конфигурации развёртывания
```

## Backend

### Технологии
- **Apollo Server 5** — GraphQL-сервер
- **Mongoose 9** — ODM для MongoDB
- **bcryptjs** — Хеширование паролей
- **dotenv** — Переменные окружения

### API (Prisma-like стиль)

#### Query

| Операция | Описание |
|----------|----------|
| `findUniqueUser(where)` | Найти одну запись по уникальному полю |
| `findFirstUser(where, orderBy, skip)` | Найти первую подходящую запись |
| `findManyUser(where, orderBy, skip, take)` | Найти несколько с фильтрацией и пагинацией |
| `findCountUser(where)` | Посчитать количество записей |
| `aggregateUser(where)` | Агрегация (count, min, max) |
| `groupByUser(where, orderBy, by)` | Группировка по полям |

#### Mutation

| Операция | Описание |
|----------|----------|
| `createOneUser(data)` | Создать запись |
| `updateOneUser(where, data)` | Обновить запись |
| `upsertOneUser(where, create, update)` | Создать или обновить |
| `deleteOneUser(where)` | Удалить запись |
| `updateManyUser(where, data)` | Обновить несколько записей |
| `deleteManyUser(where)` | Удалить несколько записей |

#### Фильтры (Where Input)

```graphql
{
  equals: String      # Точное совпадение
  in: [String!]       # Вхождение в список
  notIn: [String!]    # Не в списке
  contains: String    # Содержит подстроку
  startsWith: String  # Начинается с
  endsWith: String    # Заканчивается на
  not: String         # Не равно
}
```

Логические операторы: `AND`, `OR`, `NOT`

### Команды

```bash
cd server

# Разработка (с nodemon)
npm run dev

# Продакшен
npm start

# Заполнить БД тестовыми данными
npm run seed
```

### Переменные окружения

Создайте файл `.env` в папке `server/`:

```env
MONGODB_URI=mongodb://localhost:27017/ayanation
PORT=4000
```

### Добавление новой модели

1. Создайте модель в `server/models/ModelName.js`
2. Создайте типы в `server/graphql/ModelName/types.js`
3. Создайте queries в `server/graphql/ModelName/queries.js`
4. Создайте mutations в `server/graphql/ModelName/mutations.js`
5. Создайте резолверы в `server/resolvers/ModelName/`
6. Обновите `server/graphql/schema.js`
7. Обновите `server/resolvers/index.js`

## Frontend

### Технологии
- **React 19** — UI-библиотека
- **Vite 8** — Сборщик
- **React Router 7** — Роутинг
- **shadcn/ui** — UI-компоненты
- **Tailwind CSS 4** — Стили
- **Apollo Client 4** — GraphQL-клиент
- **Recharts** — Графики

### Команды

```bash
cd client

# Разработка
npm run dev

# Сборка
npm run build

# Линтинг
npm run lint

# Предпросмотр сборки
npm run preview
```

### Алиасы путей

```js
import Component from '@/components/Component'
```

## Соглашения

- **ES Modules** — И сервер, и клиент используют ES-модули
- **Безопасность паролей** — Пароли хешируются bcrypt (10 раундов)
- **Mongoose 9 Hooks** — В `pre`-хуках используется `async/await` без `next`
- **Компоненты** — shadcn/ui компоненты в `client/src/components/ui/`

## Примеры запросов GraphQL

### Получить пользователей

```graphql
query {
  findManyUser(
    where: { login: { contains: "admin" } }
    orderBy: [{ createdAt: desc }]
    take: 10
  ) {
    id
    login
    createdAt
  }
}
```

### Создать пользователя

```graphql
mutation {
  createOneUser(data: { login: "newuser", password: "secret123" }) {
    id
    login
  }
}
```

### Обновить нескольких

```graphql
mutation {
  updateManyUser(
    where: { login: { startsWith: "test" } }
    data: { password: "newpass" }
  )
}
```

### Агрегация

```graphql
query {
  aggregateUser {
    count { _all }
    min { login }
    max { login }
  }
}
```
