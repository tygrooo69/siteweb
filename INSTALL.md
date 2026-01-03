# Guide d'installation BatiQuest sur Coolify (Node.js)

Ce guide explique comment déployer l'application vitrine BatiQuest en utilisant Node.js pour servir les fichiers.

## Configuration dans Coolify

1. **Source** : Connectez votre dépôt Git.
2. **Build Pack** : Sélectionnez `Dockerfile`. 
3. **Fichier Docker** : Coolify détectera automatiquement le fichier nommé `Dockerfile` à la racine.
4. **Port de destination** : Indiquez `3000` (le port par défaut configuré dans notre script).

## Variables d'Environnement
Dans l'onglet **Environment Variables**, ajoutez :
- `API_KEY` : Votre clé API Gemini (disponible sur Google AI Studio).

**Note Importante** : Assurez-vous de marquer cette variable comme **"Build Variable"** (ou Build Argument) dans l'interface de Coolify, car elle est indispensable lors de l'étape de compilation `npm run build`.

## Pourquoi cette approche ?
En utilisant le serveur intégré de Vite (`npm run preview`), nous simplifions l'image Docker en supprimant la couche Nginx. C'est idéal pour une application vitrine car cela réduit le nombre de fichiers de configuration à maintenir tout en offrant d'excellentes performances.
