FROM mhart/alpine-node
RUN mkdir -p /usr/src/deletemelater
COPY package.json /usr/src/deletemelater
WORKDIR /usr/src/deletemelater
RUN npm install
COPY *.js /usr/src/deletemelater/
EXPOSE 8080
CMD [ "npm", "start" ]

