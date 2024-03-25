FROM node:18-alpine
WORKDIR /react-docker-example/

COPY public/ /react-docker-example/public
COPY src/ /react-docker-example/src
COPY package.json /react-docker-example/

# RUN npm install
# CMD ["npm", "start"]
# EXPOSE 3000

RUN npm run build
RUN npm install -g serve
EXPOSE 3000
CMD ["npm", "start"]