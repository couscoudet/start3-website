# Étape de build
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Étape de production avec une image légère
FROM node:18-alpine
RUN npm install -g serve
WORKDIR /app
COPY --from=build /app/dist /app

# Créer un fichier de configuration pour serve
RUN echo '{"rewrites": [{"source": "/**", "destination": "/index.html"}]}' > serve.json

EXPOSE 3000
# Utiliser la configuration avec le flag -s (SPA mode)
CMD ["serve", "-s", ".", "-l", "3000"]