
# 📁 Organisateur de Téléchargements

Ce script Node.js permet de **trier automatiquement** les fichiers présents dans votre dossier `Téléchargements` en fonction de leur **type (extension)**, en les déplaçant dans des sous-dossiers organisés : Images, Documents, Vidéos, Musique, Archives, Applications, Autres, et Dossiers.

## 🛠 Fonctionnalités

- Classe les fichiers selon leurs extensions (images, documents, vidéos, etc.)
- Crée les dossiers de destination si ceux-ci n'existent pas
- Ignore les fichiers déjà rangés
- Gère les erreurs de manière simple

## 📂 Dossiers créés

Voici les catégories utilisées par défaut :

- `Images` : `.jpg`, `.jpeg`, `.png`, `.gif`, `.bmp`, `.svg`
- `Documents` : `.pdf`, `.docx`, `.txt`, `.xlsx`, `.pptx`
- `Vidéos` : `.mp4`, `.avi`, `.mkv`, `.mov`
- `Musique` : `.mp3`, `.wav`, `.flac`
- `Archives` : `.zip`, `.rar`, `.tar`, `.gz`
- `Applications` : `.dmg`, `.iso`
- `Autres` : fichiers ne correspondant à aucune des extensions listées
- `Dossiers` : pour les sous-dossiers qui ne correspondent à aucune catégorie

## 🚀 Utilisation

1. **Pré-requis** : Avoir [Node.js](https://nodejs.org/) installé.
2. **Installation** : Aucun package externe requis (seulement `fs` et `path`, intégrés à Node.js).
3. **Exécution** :

```bash
node organiser.js
