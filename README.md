# Beers

The test consists in developing a small Single-Page-Application for listing & displaying details about some beers with ReactJS. 🍻

[Demo](https://react-beers.herokuapp.com/beers/)

![alt image beers](https://image.ibb.co/gpC3V8/Capture_d_e_cran_2018_06_05_a_12_27_30.png)

## 👜  Technologies

This is in the branches.

- [x] React
- [ ] Vue
- [ ] Angular
- [ ] jQuery

## 🛣  Routes

#### `/`

Should redirect to `/beers`

#### `/beers`

Should show a list of beers, paginated by 20. Pagination may use "previous" or "next" buttons or infinite scrolling.
Each item should show the beer `name`, the `tagline` and the date it was first brewed `first_brewed`. An item should point to `/beers/:id`.

#### `/beers/:id`

This route should show basic informations on the beer. Its `name`, `tagline`, `description`, `hops`, `food_pairing` & `brewers_tips`.

## 📏  Rules
- You can bundle your app using Webpack, Browserify or similar.
- You can use create-react-app.
- This project should use [React](https://facebook.github.io/react/)
- You are free to use the app architecture you want.
- You can use ES6 with Babel (the test should run on any ES5-compliant browser).
- You can use Flow or TypeScript.
- You can use the CSS processor you prefer (PostCSS, LibSaSS, Less) on the condition that it doesn't require a non-JS dependency (e.g. ruby).
- The `npm start` command should run a development server.
- The `npm build` command should create a production bundle in an unversionned `dist` directory.
- While loading external data, a route should show a loader.
- It's better if data that's already been fetch isn't fetched twice.
