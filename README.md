# GitHub Actions with Next.js and Cypress

This project demonstrates the implementation of a modern web application using Next.js, with automated testing using Cypress and continuous integration using GitHub Actions.

## 🚀 Features

- **Modern Next.js Application**: Built with Next.js 15.0, React 19, and TypeScript
- **Todo Application**:
  - Create, Read, Update, and Delete (CRUD) operations
  - Local storage persistence
  - Real-time updates
- **Automated Testing**:
  - End-to-end testing with Cypress
  - Automated test runs on every push
- **CI/CD Pipeline**:
  - GitHub Actions workflow for automated testing
  - Automated build and test process
  - Screenshot artifacts storage

## 🛠️ Tech Stack

- **Frontend**: Next.js, React, TypeScript
- **Styling**: TailwindCSS with animations
- **Testing**: Cypress
- **CI/CD**: GitHub Actions
- **Package Manager**: pnpm

## 🏗️ Project Structure

```
├── .github/workflows  # GitHub Actions workflow configurations
├── cypress/          # Cypress test files
├── src/             # Source code
│   ├── app/         # Next.js app directory
│   │   ├── dashboard/
│   │   └── todos/   # Todo application
└── public/          # Static assets
```

## 🚦 Getting Started

1. **Clone the repository**
```bash
git clone <repository-url>
cd github-actions
```

2. **Install dependencies**
```bash
pnpm install
```

3. **Run development server**
```bash
pnpm dev
```

4. **Run tests**
```bash
pnpm test:e2e
```

## 🧪 Testing

This project uses Cypress for end-to-end testing. Tests can be run in two modes:

- Interactive mode: `pnpm cypress:open`
- Headless mode: `pnpm cypress:run`

## 👷 CI/CD Pipeline

The project includes a GitHub Actions workflow that:

1. Sets up Node.js and pnpm
2. Installs dependencies
3. Builds the Next.js application
4. Runs Cypress tests
5. Stores test artifacts

The pipeline runs automatically on every push to the repository.

## 📝 License

MIT
