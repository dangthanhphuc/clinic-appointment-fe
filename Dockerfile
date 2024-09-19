FROM node:20.17.0-alpine AS builder
WORKDIR /app

# Copy the files used to build dependencies and build
COPY ./package.json package.json 
COPY ./yarn.lock yarn.lock
RUN yarn install --frozen-lockfile

# Copy the rest of the app's code
COPY . .

RUN yarn build:production

# Production-ready image
FROM nginx:alpine
COPY --from=builder /app/dist/clinic-appointment-fe /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]