# build environment
FROM node:11.4.0 as builder

ENV REACT_APP_API_URL 'http://localhost:3001'

RUN mkdir /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json /usr/src/app/package.json
RUN npm install --silent
RUN npm install react-scripts@2.0.0 -g --silent
COPY . /usr/src/app
RUN npm run build

# production environment
FROM nginx:1.13.9-alpine
RUN apk update && \
    apk upgrade && \
    apk add bash
RUN rm -rf /etc/nginx/conf.d
COPY conf /etc/nginx
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
COPY bin/generate_config.sh /etc/nginx
RUN chmod +x /etc/nginx/generate_config.sh
EXPOSE 80