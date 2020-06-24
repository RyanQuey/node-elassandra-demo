This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Run in Dev Env

First to start Elassandra on two nodes: 
```
docker-compose --project-name test -f ./ci/docker-compose.yml up -d --scale node=1
```

In the project directory, you can run:

### `npm start`

And then, in a different terminal: 
### `nodemon app.js --config ./nodemon.json`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Deploy
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Deployment

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your react code is ready to be deployed!

### `npm run deploy` # TODO

This will eventually deploy the built react code with the express app and Elassandra docker containers
