FROM alpine:3.15
ENV NODE_VERSION 18.9.0
RUN apk add --update npm
WORKDIR /app
COPY ./build .
COPY package*.json ./
EXPOSE ${PORT}
RUN npm install
CMD node ./index.js