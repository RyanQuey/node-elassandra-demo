A demo project, demonstrating how to incorporate Elassandra (using Docker), NodeJS (specifically, Express), and React with Searchkit. To complement my [two part blog post](https://medium.com/@rlquey2/elassandra-with-nodejs-demo-part-1-setting-up-elassandra-f94234aa4fc1).

![image](https://github.com/RyanQuey/node-elassandra-demo/blob/bbaae411738ad7f4c2d2035f0af4e00932662880/screenshots/now-working.png)

![image](https://github.com/RyanQuey/node-elassandra-demo/blob/bbaae411738ad7f4c2d2035f0af4e00932662880/screenshots/japan-only.png)

![image](https://github.com/RyanQuey/node-elassandra-demo/blob/bbaae411738ad7f4c2d2035f0af4e00932662880/screenshots/k-dashboard.png)

![image](https://github.com/RyanQuey/node-elassandra-demo/blob/bbaae411738ad7f4c2d2035f0af4e00932662880/screenshots/final.png)

## Run in Dev Env

First to start Elassandra on two nodes: 
```
docker-compose --project-name test -f ./ci/docker-compose.yml up -d --scale node=1
```

Then to start the live reloading React server, in the project directory, run:

### `npm start`

You will also need to separately start the NodeJS server in a different terminal: 
### `nodemon app.js --config ./nodemon.json`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Deploy

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your react code is ready to be deployed!

### `npm run deploy` # TODO

This will eventually deploy the built react code with the express app and Elassandra docker containers

# Released under MIT License

Copyright (c) 2020 Ryan Quey.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
