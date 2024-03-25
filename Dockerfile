FROM node:18-alpine
WORKDIR /react-docker-example/

COPY public/ /react-docker-example/public
COPY src/ /react-docker-example/src
COPY package.json /react-docker-example/

# RUN npm install
# CMD ["npm", "start"]
# EXPOSE 3000
# npm install -g serve
# serve -s build

RUN npm install
RUN npm run build
RUN npm install -g serve
RUN serve -s build

Run rm public/ /react-docker-example/public
Run rm src/ /react-docker-example/src
Run rm package.json /react-docker-example/

EXPOSE 3000
# CMD ["npm", "start"]