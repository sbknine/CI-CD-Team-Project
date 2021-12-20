FROM node:16
WORKDIR /app
COPY . /app
RUN npm install
WORKDIR /app/frontend
RUN npm install
WORKDIR /app
COPY docker.env /app/.env
ADD start.sh /app
RUN chmod +x /app/start.sh
CMD [ "./start.sh" ]