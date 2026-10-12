FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci && npm cache clean --force

COPY . .
RUN npm run build

CMD ["npm" ,"run","dev"]
