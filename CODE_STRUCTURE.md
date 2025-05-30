# Code Structure Documentation

## Project Overview
This is a full-stack application with a clear separation between frontend and backend components. The project appears to be a workflow management system with a modern architecture.

## Directory Structure

### Root Level
- `src/` - Main source code directory
- `docs/` - Documentation files
- `scripts/` - Utility scripts
- `docker/` - Docker-related configurations
- `docker_example/` - Example Docker configurations
- `deploy/` - Deployment configurations
- `test-results/` - Test output directory
- `.github/` - GitHub-specific configurations
- `.vscode/` - VS Code editor configurations
- `.devcontainer/` - Development container configurations

### Source Code (`src/`)
The source code is organized into two main directories:

#### Backend (`src/backend/`)
- `base/` - Core backend functionality
- `langflow/` - Langflow-specific implementations
- `tests/` - Backend test suite
- Contains Dockerfile for backend containerization

#### Frontend (`src/frontend/`)
- Modern web application using TypeScript
- Key files:
  - `tsconfig.json` - TypeScript configuration
  - `vite.config.mts` - Vite bundler configuration
  - `tailwind.config.mjs` - Tailwind CSS configuration
  - `package.json` - Node.js dependencies and scripts
- Contains multiple Dockerfile variants:
  - `Dockerfile` - Production build
  - `dev.Dockerfile` - Development environment
  - `cdk.Dockerfile` - AWS CDK deployment

### Configuration Files
- `pyproject.toml` - Python project configuration
- `render.yaml` - Render deployment configuration
- `Makefile` - Build and development commands
- `.pre-commit-config.yaml` - Pre-commit hooks
- `.eslintrc.json` - ESLint configuration
- `.gitignore` - Git ignore rules

### Documentation
- `README.md` - Project overview and quickstart guide
- `CONTRIBUTING.md` - Contribution guidelines
- `DEVELOPMENT.md` - Development setup and guidelines
- `CODE_OF_CONDUCT.md` - Community guidelines
- `LICENSE` - MIT License

## Development Setup
The project uses:
- Python 3.10+ for backend
- TypeScript/Node.js for frontend
- Docker for containerization
- Vite as the frontend build tool
- Tailwind CSS for styling
- ESLint for code linting
- Pre-commit hooks for code quality

## Build and Deployment
- Multiple Docker configurations for different environments
- Render deployment support
- AWS CDK deployment support
- Development container support

## Testing
- Frontend tests using Playwright
- Backend tests in `src/backend/tests/`
- Test results stored in `test-results/`

## Development Tools
- VS Code configuration included
- Development container support
- Pre-commit hooks for code quality
- ESLint and Prettier for code formatting 