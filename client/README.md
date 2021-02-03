## NPM Scripts

At root directory you can run:

### `npm start`

To start project in development mode
Open [http://localhost:3001](http://localhost:3001) for web client

### `npm run build`

To build application in production mode, output to 'build' folder .<br />

## Deployment

### `docker-compose up --build`

### ENV

`.env` for `npm start`.<br />
`.env.production` for `npm run build`.

Descriptions
```
REACT_APP_MOCK=false # Use mockup with http interceptor instead of calling to APIs
REACT_APP_APP_NAME=Example # Application name, showing at toolbar/tab
REACT_APP_APP_DOMAIN=http://localhost:3001 # Application domain
REACT_APP_PRIVATE_DOMAIN_API=http://localhost:3000 # API domain
REACT_APP_STORAGE_TYPE=local # local or session storage
```
