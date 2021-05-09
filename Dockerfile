FROM nginx:latest
COPY ./ngQuote/dist /usr/share/nginx/html/
RUN rm /etc/nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx

