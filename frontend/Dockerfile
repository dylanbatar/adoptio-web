FROM node:18-alpine
WORKDIR /app
ENV CI=true
COPY package.json ./
RUN npm install
COPY . .
