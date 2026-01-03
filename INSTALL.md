# Guide de déploiement BatiQuest

Ce projet est optimisé pour un déploiement rapide sur **Coolify** ou tout environnement supportant **Docker**.

## Configuration Coolify

1. **Source** : Connectez votre dépôt Git.
2. **Build Pack** : Choisissez `Dockerfile`.
3. **Variables d'Environnement** :
   - Ajoutez `API_KEY` (votre clé Google Gemini).
   - **Important** : Cochez la case pour en faire une "Build Variable" afin que Vite puisse l'inclure lors du `npm run build`.
4. **Réseau** :
   - Port de destination : `3000`.

## Scripts de l'application
- `npm run dev` : Développement local.
- `npm run build` : Compilation de production.
- `npm run preview` : Serveur de production (utilisé dans le Dockerfile).

## Structure
L'application utilise React 19, Tailwind CSS pour le style, et l'API Gemini pour l'assistance technique intelligente.