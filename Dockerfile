FROM node:7.1.0

RUN apt-get update
RUN apt-get install -y sqlite3 libsqlite3-dev

ADD .eslintrc.json /root/

ADD app /root/app
WORKDIR /root/app

ADD package.json /root/package.json
RUN npm install

ENTRYPOINT ["node"]
CMD ["bin/www"]
