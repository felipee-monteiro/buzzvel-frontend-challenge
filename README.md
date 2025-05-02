## Description

This repository contains the source-code of the test and demonstrates how to run it in three different ways:

1. Using **nvm** (Node Version Manager)
2. Using **docker run**
3. Using **Docker Compose** (file `compose.yml`)

---

## Prerequisites

- Git
- Node.js (or **nvm** installed)
- Docker
- Docker Compose (CLI integrated with Docker 2.x or as a separate plugin)

---

## 1. Running with nvm

For local development, use **nvm** to manage Node.js versions:

```bash
# Install or update nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
# or
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash

# Load nvm in your terminal
source ~/.nvm/nvm.sh

# Install and use the Node.js version specified in .nvmrc
nvm install
nvm use

# Install dependencies and start the application
npm install
npm run dev
```

The application will be available at `http://localhost:5173`.

---

## 2. Running with docker run

Quick and without extra files:

```bash
# Build the Docker image
docker build -t buzzvel-frontend-challenge-felipe-monteiro .

# Run the container in detached mode
docker run -d \
  --name buzzvel-frontend-challenge-felipe-monteiro \
  -p 4173:4173 \
  buzzvel-frontend-challenge-felipe-monteiro
```

- `-d`: detached mode
- `--name`: friendly container name
- `-p 4173:4173`: maps port 4173 in the container to port 4173 on the host

Real-time logs:

```bash
docker logs -f buzzvel-frontend-challenge-felipe-monteiro
```

Stop and remove:

```bash
docker stop buzzvel-frontend-challenge-felipe-monteiro
docker rm buzzvel-frontend-challenge-felipe-monteiro
```

---

## 3. Running with Docker Compose (compose.yml)

Orchestrate multiple services via `docker compose`.

### 3.2 Basic commands

```bash
# Start all services
docker compose up -d

# Stop and remove containers and network
docker compose down
```

---

## Project Structure

```
├── .vscode/
├── dist/
├── node_modules/
├── public/
├── src/
├── .dockerignore
├── .editorconfig
├── .gitattributes
├── .gitignore
├── .nvmrc
├── .prettierrc
├── compose.yml
├── Dockerfile
├── eslint.config.js
├── index.html
├── jsconfig.json
├── package-lock.json
├── package.json
└── README.md
```
