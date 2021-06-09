FROM node:14

WORKDIR /workspace/gitpod/NodeJsDocker

COPY  package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["node", "server.js"]

