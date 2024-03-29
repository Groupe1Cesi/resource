FROM node:20-alpine3.19

WORKDIR /usr/src/app

COPY ./ ./

RUN npm install
RUN npm run build

EXPOSE 3000/tcp

ENTRYPOINT npm run start