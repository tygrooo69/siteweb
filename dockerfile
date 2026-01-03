
FROM node:20-alpine

WORKDIR /app

# Installation des dépendances
COPY package*.json ./
RUN npm install

# Copie du code source
COPY . .

# Définition de la clé API au moment du build (nécessaire pour Vite)
ARG API_KEY
ENV API_KEY=$API_KEY

# Compilation du projet
RUN npm run build

# L'application sera servie sur le port 3000
EXPOSE 3000

# Utilisation du script preview de Vite pour servir les fichiers statiques
CMD ["npm", "run", "preview"]
