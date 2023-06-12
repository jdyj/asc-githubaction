FROM node:20
COPY ./ /
EXPOSE 5000
RUN npm install
CMD ["npm", "start"]

