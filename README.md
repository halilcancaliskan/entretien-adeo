# Horoscope API
Cette application est une API simple développée en Node.js qui retourne le signe astrologique correspondant à une date de naissance donnée. L'application utilise Express pour gérer les requêtes et la bibliothèque horoscope pour déterminer le signe astrologique.

## Prérequis
Avant de lancer l’application, assurez-vous d’avoir installé :

- Node.js (version 18 ou supérieure)
- Docker (si vous souhaitez exécuter l’application dans un conteneur Docker)

## Installation
Clonez le dépôt :
```git clone https://github.com/votre-utilisateur/horoscope-api.git``` puis
```cd horoscope-api```

Installez les dépendances :
```npm install```

## Lancer l'application en local
Pour démarrer le serveur en local, exécutez :
```npm start```
Le serveur démarrera par défaut sur le port 3000. Vous pouvez y accéder à http://localhost:3000.

Endpoint principal
GET /horoscope?birthdate=YYYY-MM-DD

Exemple de requête :
```curl "http://localhost:3000/horoscope?birthdate=1990-01-15"```

Exemple de réponse :
{
  "sign": "Capricorn"
}

## Lancer l'application avec Docker
Si vous préférez exécuter l’application dans un conteneur Docker :
Construisez l’image Docker :
```docker build -t horoscope-api .```

Lancez le conteneur :
```docker run -p 3000:3000 horoscope-api```
Le service sera accessible à http://localhost:3000 comme pour l’exécution locale.

## Exécuter les tests
Les tests sont écrits avec Supertest.

Pour exécuter les tests, lancez la commande suivante :
```npm test```
Les tests vérifient le fonctionnement de l'API et les réponses pour différentes dates de naissance.

## CI/CD

## Structure du Projet
src/ : Code source de l'application
src/horoscope.js : Module pour déterminer le signe astrologique
src/test/horoscope.test.js : Tests pour l'API et le module horoscope
Dockerfile : Configuration pour le conteneur Docker

## Support
Pour toute question, n'hésitez pas à ouvrir une issue sur le dépôt GitHub.
