'use strict';

const AWS = require('aws-sdk')

const s3 = new AWS.S3()

const uploadToS3 = (bucketName, key, data) =>{
  const base64data = new Buffer(data, 'binary')
  const params = {
    Bucket: bucketName,
    Key: key,
    Body: base64data
  }

  s3.upload(params, (err) => {
    if (err) console.error(err)
    console.log(`File uploaded as ${bucketName}/${key}`)
  })
}

module.exports.s3Uploader = (event, context, callback) => {  
  // Get Source bucket name and key from event
  const bucketName = event.Records[0].s3.bucket.name
  const key = event.Records[0].s3.object.key

  // Get target bucket name from environment variable
  const targetBucket = process.env.TargetBucket

  console.log('Source is: ' + bucketName+'/'+key)

  const params = {
    Bucket: bucketName,
    Key: key
  }

  // Get S3 file from source and transfer to target.
  s3.getObject(params, (err, data) => {
    if (err) console.error(err)
    uploadToS3(targetBucket, key, data.Body.toString())
  })

  callback(null, 'Completed File Transfer')
};