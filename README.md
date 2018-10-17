# Beers

Petite application permettant de lister et d'afficher des détails sur certaines bières avec l'API Punk. 🍺

[Démonstration](https://react-beers.herokuapp.com/beers/)

![aperçu](https://image.ibb.co/gpC3V8/Capture_d_e_cran_2018_06_05_a_12_27_30.png)

## 🛣  Routes

### `/`

Devrait rediriger vers `/beers`

### `/beers`

Devrait afficher une liste de bières, paginée par 20. La pagination peut utiliser les boutons "Précédent" ou "Suivant" ou le défilement infini.
Chaque article doit afficher le nom de la bière, le slogan et la date à laquelle il a été brassé, first_brewed. Un élément doit pointer vers `/ beers /: id`.

### `/beers/:id`

Cet itinéraire devrait montrer des informations de base sur la bière. Ses `name`,` tagline`, `description`,` hops`, `food_pairing` &` brewers_tips`.

## 📏  Les règles
- Vous devez utilisez [PunkAPI] (https://punkapi.com).
- Vous pouvez regrouper votre application à l'aide de Webpack, Browserify ou similaire.
- Vous pouvez utiliser create-react-app.
- Ce projet doit utiliser [React] (https://facebook.github.io/react/).
- Vous êtes libre d'utiliser l'architecture de l'application de votre choix.
- Vous pouvez utiliser ES6 avec Babel (le test doit s'exécuter sur tout navigateur compatible ES5).
- Vous pouvez utiliser Flow ou TypeScript.
- Vous pouvez utiliser le processeur CSS que vous préférez (PostCSS, LibSaSS, Less) à condition qu'il ne nécessite pas de dépendance non-JS (par exemple, ruby).
- Vous pouvez utiliser des styles inline.
- La commande `npm start` devrait exécuter un serveur de développement.
- La commande `npm build` devrait créer un bundle de production dans un répertoire` dist` non expérimenté.
- Lors du chargement de données externes, un itinéraire doit afficher un chargeur.
- C'est mieux si les données déjà extraites ne sont pas extraites deux fois.
