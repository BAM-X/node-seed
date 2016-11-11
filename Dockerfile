FROM node:7.1.0

RUN apt-get update
RUN apt-get install -y sqlite3 libsqlite3-dev

ADD package.json /root/package.json

ADD app /root/app
ENV NODEPATH=/root/app
WORKDIR /root/app

RUN npm install

ENTRYPOINT ["node"]
CMD ["bin/www"]
