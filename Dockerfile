FROM node:latest
ADD . /src
WORKDIR /src
RUN npm i
CMD ["npm","test"]