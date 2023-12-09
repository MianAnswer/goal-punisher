FROM node:18-alpine

ENV ENV=live

WORKDIR /app/

COPY package-lock.json .
COPY package.json .

RUN npm ci

COPY . .

EXPOSE 8000

RUN npm run build

CMD ["npm", "start"]
