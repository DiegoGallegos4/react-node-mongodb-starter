FROM node:10

WORKDIR /app

COPY package*.json ./

RUN npm install && npm install -g nodemon

COPY . .

EXPOSE 8080

CMD ["npm", "run", "start-dev"]
