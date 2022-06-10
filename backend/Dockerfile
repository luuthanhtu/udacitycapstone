FROM amazonlinux
WORKDIR /deploy
RUN yum -y install make gcc*
RUN curl --silent --location https://rpm.nodesource.com/setup_12.x | bash -
RUN yum -y install nodejs
RUN npm install -g serverless@2.21.1
COPY . .
RUN npm update --save
RUN npm audit fix
RUN ["chmod", "+x", "deploy.sh"]
CMD ./deploy.sh ; sleep 2m