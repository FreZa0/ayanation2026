# Ayanation Project

Full-stack application with GraphQL API (Apollo Server + MongoDB) and React frontend (Vite + shadcn/ui).

## Project Structure

```
ayanation/
├── server/                 # Backend (Node.js + Apollo GraphQL)
│   ├── graphql/           # GraphQL schema definitions
│   │   └── User/          # User module (modular architecture)
│   │       ├── enums.js   # Enum types (SortOrder, etc.)
│   │       ├── types.js   # Object types and input types
│   │       ├── queries.js # Query operations
│   │       └── mutations.js # Mutation operations
│   ├── resolvers/         # GraphQL resolvers
│   │   └── User/          # User resolvers
│   │       ├── queries.js
│   │       └── mutations.js
│   ├── models/            # Mongoose models
│   ├── utils/             # Utility functions
│   │   └── helpers.js     # Prisma-like query builders
│   ├── seed/              # Database seeding scripts
│   ├── index.js           # Server entry point
│   └── package.json
├── client/                # Frontend (React + Vite)
│   ├── src/
│   │   ├── components/    # UI components (shadcn/ui)
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   └── lib/           # Utility libraries
│   ├── index.html
│   └── package.json
└── deploy/                # Deployment configurations
```

## Backend (Server)

### Technologies
- **Apollo Server 5** - GraphQL server
- **Mongoose 9** - MongoDB ODM
- **bcryptjs** - Password hashing
- **dotenv** - Environment variables

### Architecture

**Modular GraphQL Structure:**
- Schema is split by domain modules (User, Post, etc.)
- Each module has its own types, queries, mutations, and resolvers
- Prisma-like API pattern for CRUD operations

**Prisma-like GraphQL API:**

| Query | Description |
|-------|-------------|
| `findUniqueUser(where)` | Find single record by unique field |
| `findFirstUser(where, orderBy, skip)` | Find first matching record |
| `findManyUser(where, orderBy, skip, take)` | Find multiple with filtering/pagination |
| `findCountUser(where)` | Count matching records |
| `aggregateUser(where)` | Aggregate operations (count, min, max) |
| `groupByUser(where, orderBy, by)` | Group by fields |

| Mutation | Description |
|----------|-------------|
| `createOneUser(data)` | Create new record |
| `updateOneUser(where, data)` | Update existing record |
| `upsertOneUser(where, create, update)` | Create or update |
| `deleteOneUser(where)` | Delete single record |
| `updateManyUser(where, data)` | Update multiple records |
| `deleteManyUser(where)` | Delete multiple records |

**Where Input Filters:**
- `equals`, `in`, `notIn`, `contains`, `startsWith`, `endsWith`, `not`
- Logical operators: `AND`, `OR`, `NOT`

### Commands

```bash
cd server

# Development (with nodemon)
npm run dev

# Production
npm start

# Seed database with test users
npm run seed
```

### Environment Variables

Create `.env` file in `server/`:

```env
MONGODB_URI=mongodb://localhost:27017/ayanation
PORT=4000
```

### Adding New Model

1. Create model in `server/models/ModelName.js`
2. Create GraphQL types in `server/graphql/ModelName/types.js`
3. Create queries in `server/graphql/ModelName/queries.js`
4. Create mutations in `server/graphql/ModelName/mutations.js`
5. Create resolvers in `server/resolvers/ModelName/`
6. Update `server/graphql/schema.js` to import new types
7. Update `server/resolvers/index.js` to import new resolvers

## Frontend (Client)

### Technologies
- **React 19** - UI library
- **Vite 8** - Build tool
- **React Router 7** - Routing
- **shadcn/ui** - UI components
- **Tailwind CSS 4** - Styling
- **Apollo Client 4** - GraphQL client
- **Recharts** - Charts

### Commands

```bash
cd client

# Development
npm run dev

# Build
npm run build

# Lint
npm run lint

# Preview build
npm run preview
```

### Path Aliases

```js
import Component from '@/components/Component'
```

## Development Conventions

- **ES Modules** - Both server and client use ES modules (`"type": "module"`)
- **Password Security** - Passwords are hashed with bcrypt (10 rounds)
- **Mongoose 9 Hooks** - Use async/await without `next` parameter in pre-hooks
- **Component Structure** - shadcn/ui components in `client/src/components/ui/`

## Key Files

| File | Purpose |
|------|---------|
| `server/index.js` | Apollo Server startup, MongoDB connection |
| `server/graphql/schema.js` | GraphQL schema assembly |
| `server/resolvers/index.js` | Resolver composition |
| `server/utils/helpers.js` | Prisma-like query builders for MongoDB |
| `server/models/User.js` | User schema with password hashing |
| `client/src/App.jsx` | React router setup |
| `client/vite.config.js` | Vite configuration with path aliases |
