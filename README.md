# CapStone Project

New Features:

  - Auto Sync File in Upload bucket to another bucket 
  - Display Video if user upload MP4 file

  Upload File:
    ![alt text](images/UploadImage.png)

  Source Bucket:
    ![alt text](images/SourceBucket.png)

  Destination Bucket:
    ![alt text](images/DestinationBucket.png)

  Display Video:
    ![alt text](images/DosplayVideo.png)

# Containter

  We can contaimetering the backend procress with docker:

    - Create .env file: 
        SLS_KEY=xxxxxxxxxxxxxxxxxxxx
        SLS_SECRET=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        PROFILE=severless
        SERVERLESS_ACCESS_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

    - docker build -t serverlessapp .

# CICD Process

![alt text](images/CICD-PROCESS.png)

- Commit code to Codecommit/Github
- Create CodeBuild Project
- Set up environment in CodeBuild: 
    ![alt text](images/SetUpEnvi.png)
- Result: 
![alt text](images/CICD_RESULT.png)
