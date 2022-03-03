FROM node:alpine

WORKDIR /app
COPY package.json .
RUN npm install && NODE_ENV=production 
RUN npm run build
COPY . .

CMD ["npm","run","start"]