FROM node:8
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN apt-get update --fix-missing && \
   apt-get install -y xvfb wget openjdk-7-jre libgconf-2-4 libexif12 chromium && \
   apt-get clean
RUN mkdir /protractor && \
   npm install -g protractor
RUN webdriver-manager update
ADD protractor.sh /protractor.sh
WORKDIR /protractor
ENTRYPOINT ["/protractor.sh"]