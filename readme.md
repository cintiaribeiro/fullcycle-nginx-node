# Node + MySQL App (com Docker)

Este projeto é uma aplicação Node.js integrada com MySQL, totalmente containerizada usando **Docker** e **Docker Compose**. Ao subir os containers, todas as dependências são instaladas automaticamente.

## 🚀 Tecnologias

- Node.js
- Express
- MySQL
- Docker
- Docker Compose

---

## 📁 Estrutura de Pastas
```
├── docker-compose.yml
├── Dockerfile
├── node/ # Código fonte da aplicação Node.js
│ ├── package.json
│ ├── package-lock.json
│ ├── app.js # ou index.js
│ └── ...
└── README.md
```

---

## 🐳 Como executar com Docker

### 1. Pré-requisitos

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

### 2. Subir o ambiente

Na raiz do projeto, execute:

```bash
docker-compose up --build
```
O comando:
- Constrói as imagens
- Instala as dependências (`npm install`)
- Sobe os containers (`app` e `mysql`)
- Expõe a aplicação em `http://localhost:8080`

### 3. Acessar
Acesse o navegador
http://localhost:8080

---

🛠️ Scripts úteis

Parar os containers:
```bash
docker-compose down
```
Rodar em modo detached (segundo plano):
```bash
docker-compose up -d
```

## ⚠️ Aviso
Este projeto foi desenvolvido como parte do desafio técnico Full Cycle e destina-se exclusivamente à avaliação da certificação.




