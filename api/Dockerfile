FROM node:12.21.0

LABEL version="1.0"
LABEL description="Docker image for the backend API of my WHOIS wrapper"
LABEL maintainer = ["noremackientz@gmail.com"]

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]
RUN ls
RUN npm install --production
COPY . .

EXPOSE 3001

CMD ["node", "index.js"]