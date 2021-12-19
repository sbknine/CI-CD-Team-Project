FROM node:16
WORKDIR /app
COPY . /app
RUN npm install
WORKDIR /app/frontend
RUN npm install
WORKDIR /app
EXPOSE 8080
ADD start.sh /app
ENV MONGO_URI = mongodb://172.17.0.1:27017
RUN chmod +x /app/start.sh
CMD [ "./start.sh" ]