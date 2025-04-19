# Task Management Application

A full-stack task management application built with Next.js, TypeScript, Prisma, PostgreSQL, and real-time updates via WebSocket.

## Features

- User authentication with NextAuth.js
- CRUD operations for tasks
- Real-time updates using Socket.IO
- Modern UI with Tailwind CSS and shadcn/ui
- Docker support for easy deployment
- CI/CD pipeline with GitHub Actions

## Tech Stack

- Frontend: Next.js 13+ (App Router), TypeScript, Tailwind CSS, shadcn/ui
- Backend: Next.js API Routes, Prisma ORM
- Database: PostgreSQL
- Authentication: NextAuth.js
- Real-time: Socket.IO
- Deployment: Docker
- CI/CD: GitHub Actions

## Getting Started

### Prerequisites

- Node.js 18+
- Docker and Docker Compose
- Git

### Development Setup

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd task-management-app
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Create a .env file:
\`\`\`
DATABASE_URL="postgresql://taskapp:taskapp123@localhost:5432/taskmanager"
NEXTAUTH_SECRET="your-super-secret-auth-key"
NEXTAUTH_URL="http://localhost:3000"
\`\`\`

4. Start the development environment:
\`\`\`bash
docker-compose up -d db    # Start PostgreSQL
npm run dev               # Start Next.js development server
\`\`\`

### Production Deployment

1. Build and run with Docker Compose:
\`\`\`bash
docker-compose up -d
\`\`\`

The application will be available at http://localhost:3000

## Project Structure

- `/src/app` - Next.js 13+ App Router pages and API routes
- `/src/components` - React components
- `/src/lib` - Utility functions and configurations
- `/prisma` - Database schema and migrations
- `/.github/workflows` - CI/CD configuration

## API Routes

- `GET /api/tasks` - Get all tasks for the current user
- `POST /api/tasks` - Create a new task
- `GET /api/tasks/[id]` - Get a specific task
- `PATCH /api/tasks/[id]` - Update a task
- `DELETE /api/tasks/[id]` - Delete a task

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request
