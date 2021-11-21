FROM node:12.21.0

LABEL version="1.0"
LABEL description="This is the frontend react server for my WHOIS wrapper application"
LABEL maintainer = ["noremackientz@gmail.com"]

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install --production

COPY . .

EXPOSE 3000

CMD ["npm", "start"]