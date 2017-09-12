#################################
# node-commit-validator #
#################################

FROM madoos/node-dind:latest

MAINTAINER Maurice Dominguez <maurice.dominguez@gigigo.com>

WORKDIR /home/commit-validator/

ADD . .

RUN npm install

CMD [ "npm", "start" ]