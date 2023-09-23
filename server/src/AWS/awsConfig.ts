import { S3Client } from '@aws-sdk/client-s3';
import configKeys from '../config'

const s3 = new S3Client({
  credentials: {
    accessKeyId: configKeys.AWS_ACCESS_KEY_ID ,
    secretAccessKey: configKeys.AWS_SECRET_KEY ,
  },
  region: configKeys.AWS_REGION,
});

export default s3;