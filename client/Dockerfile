FROM node:12-alpine as build
RUN mkdir /app
WORKDIR /app
COPY ./package.json .
RUN npm install --production
COPY . .
RUN npm run build

FROM nginx:1.17-alpine
ENV HOST_PORT=80
ENV HOST_DOMAIN=localhost
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx.conf.default /etc/nginx/conf.d
RUN envsubst '\$HOST_PORT \$HOST_DOMAIN' < /etc/nginx/conf.d/nginx.conf.default > /etc/nginx/conf.d/nginx.conf
CMD ["nginx", "-g", "daemon off;"]
