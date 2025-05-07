## Description

This repository contains the source-code of the test and demonstrates how to run it in three different ways:

1. Using **nvm** (Node Version Manager)
2. Using **docker run**
3. Using **Docker Compose** (file `docker-compose.yml`)

---

## Prerequisites

- Git
- Node.js (or **nvm** installed)
- Docker/Docker Compose (If use it)

---

## 1. Running with nvm

For local development, use **nvm** to manage Node.js versions:

#### Install or update nvm

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
```

### Load nvm in your terminal

```bash
source ~/.nvm/nvm.sh
```

#### Install the Node.js version specified in .nvmrc:

```bash
nvm install
```

#### Use the Node.js version specified in .nvmrc:

```bash
nvm use
```

#### Install dependencies:

```bash
npm install
```

#### Build the appilcation:

```bash
npm run build
```

#### Start the application:

```bash
npm run preview
```

The application will be available at http://localhost:4173.

---

## 2. Running with docker run

Quick and without extra files:

#### Build the Docker image

```bash
docker build -t buzzvel-frontend-challenge-felipe-monteiro .
```

#### Run the container in detached mode

```bash
docker run -d \
  --name buzzvel-frontend-challenge-felipe-monteiro-container \
  -p 4173:4173 \
  buzzvel-frontend-challenge-felipe-monteiro
```

Real-time logs:

```bash
docker logs -f buzzvel-frontend-challenge-felipe-monteiro
```

#### Stop:

```bash
docker stop buzzvel-frontend-challenge-felipe-monteiro
```

#### Remove:

```bash
docker rm buzzvel-frontend-challenge-felipe-monteiro
```

---

## 3. Running with Docker Compose

Orchestrate multiple services via `docker compose`.

### 3.2 Basic commands

#### Start all services

```bash
docker compose up -d
```

#### Stop and remove containers and network

```bash
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
