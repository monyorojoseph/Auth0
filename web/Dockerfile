FROM node:18.0-alpine

WORKDIR /usr/src/web

COPY ./package.json .
RUN npm install

EXPOSE 3000

COPY . .

ENTRYPOINT [ "npm", "start" ]