# stage=${STAGE}
# region=${REGION}
# bucket=${BUCKET}

source setenv.sh 

sls config credentials \
  --provider aws \
  --key ${SLS_KEY} \
  --secret ${SLS_SECRET} \
  --profile ${PROFILE}

echo 'Deploying'
sls deploy