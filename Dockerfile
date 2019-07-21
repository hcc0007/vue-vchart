#nginx
#FROM nginx
#COPY dist/ /usr/share/nginx/html/
#COPY nginx/default.conf /etc/nginx/conf.d/default.conf

#express
FROM daocloud.io/node:carbon
WORKDIR /usr/src/app
COPY . .
RUN npm install --only=production --registry=https://registry.npm.taobao.org


EXPOSE 8080
CMD ["npm", "start"]
