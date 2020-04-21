## React-NodeJS-Mongodb Starter

This starter template contains two directions:
- frontend
- backend

The frontend is composed of a CRA backbone with support for Redux and Router. Asynchronous calls are done with thunks. The components use Hooks instead of Classes.

To run the frontend:
```
cd frontend
npm run start
```

The project's proxy points to `localhost:8080`. This is the url of the backend.

The backend is a NodeJS app that can be ran with docker. 

To run the backend:
```
docker-compose build
docker-compose run
```

It will start a Nodejs web server pointing to a MongoDB database.


#### TODO

- [ ] Script to deploy frontend with Firebase Hosting/Now
- [ ] Script to deploy backend to Google App Engine
- [ ] Use validation with Joi.

