FROM node:18-alpine
WORKDIR /react-docker-example/

COPY public/ /react-docker-example/public
COPY src/ /react-docker-example/src
COPY package.json /react-docker-example/

RUN npm install
RUN npm run build
# RUN npm install -g serve
# RUN serve -s build
CMD ["npm", "start"]
EXPOSE 3000