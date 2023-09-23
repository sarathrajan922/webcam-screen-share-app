import { PutObjectCommand } from "@aws-sdk/client-s3";
import s3 from "../AWS/awsConfig";
import ConfigKeys from "../config";
import crypto from "crypto";

const userHelper = () => {
  const screenVideoUpload = async(videoFile: Express.Multer.File) => {
    const randomImageName = (bytes = 32) =>
      crypto.randomBytes(bytes).toString("hex");
    const key = randomImageName();
    const file = videoFile;
    console.log(file)
    const params = {
        Bucket: ConfigKeys.AWS_BUCKET_NAME,
        Key: key,
        Body: file.buffer,
        ContentType: file.mimetype,
        ACL: 'public-read', 
      }

      const command = new PutObjectCommand(params);
      await s3.send(command);

    //   const url = `https://${ConfigKeys.AWS_BUCKET_NAME}.s3.amazonaws.com/${key}`;

    //   console.log("s2 url",url)
    const cloudfrontDomain = ConfigKeys.CLOUD_FRONT_DOMAIN_NAME;

    const cloudfrontUrl = `https://${cloudfrontDomain}/${key}`

    console.log(cloudfrontUrl)
      

    return true;
  };

  return {
    screenVideoUpload,
  };
};

export default userHelper;
