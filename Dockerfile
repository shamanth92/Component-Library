FROM node:20-alpine

WORKDIR /LIBRARY

COPY package.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "start"]