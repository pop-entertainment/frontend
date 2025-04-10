FROM node:18.19.1-alpine AS build
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build

FROM nginx:1.25.3-alpine
COPY nginx/default.conf /etc/nginx/conf.d/
COPY --from=build /app/dist/store/browser /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
