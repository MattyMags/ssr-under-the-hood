# ssr-under-the-hood
Building SSR from scratch to see under the hood.

To run this demo-app, open two terminal instances and run: 
- npm run webpack
- npm run dev

Navigate to `localhost:3030`

Upon checking the network tab, you will see `localhost` being called. That contains the HTML string with no interactivity.
The `app` script is what contains the listeners and interactivty. If you were to comment out the `hydrate` function inside of `components/index.js` the app will not work.
