FROM node:12-alpine

RUN addgroup -S mol && adduser -S -g mol mol

ENV HOME=/home/mol
ENV HOME_APP=$HOME/app
ENV NODE_ENV=production 

WORKDIR $HOME_APP

COPY package.json .

# RUN apk add --no-cache --virtual .app-deps python make g++ git && \
# RUN apk add --no-cache --virtual git && \
RUN chown -R mol:mol $HOME/* /usr/local/ && \
    npm install --production && \
    npm cache clean --force && \
    chown -R mol:mol $HOME/*

COPY . .

USER mol

CMD ["npm", "start"]