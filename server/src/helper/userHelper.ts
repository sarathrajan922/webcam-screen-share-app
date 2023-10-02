import { PutObjectCommand } from "@aws-sdk/client-s3";
import s3 from "../AWS/awsConfig";
import ConfigKeys from "../config";
import crypto from "crypto";
import VideoStorageModel from "../database/model/videoStorageModel";
import UserModel from "../database/model/userModel";
import { VideoUploadInterface } from "../types/videoUploadInterface";

const userHelper = () => {
  const screenVideoUpload = async (data: VideoUploadInterface) => {
    const randomImageName = (bytes = 32) =>
      crypto.randomBytes(bytes).toString("hex");
    const key = randomImageName();
    const file = data.videoBlob;
    const params = {
      Bucket: ConfigKeys.AWS_BUCKET_NAME,
      Key: key,
      Body: file.buffer,
      ContentType: file.mimetype,
      ACL: "public-read",
    };

    const command = new PutObjectCommand(params);
    await s3.send(command);

    const cloudfrontDomain = ConfigKeys.CLOUD_FRONT_DOMAIN_NAME;

    const cloudfrontUrl:string = `https://${cloudfrontDomain}/${key}`;
    const userData = await UserModel.find({ email: data.email });
    const userId = userData[0]._id;
    let videoStorage = await VideoStorageModel.findOne({ userId });


    if (!videoStorage) {
      videoStorage = new VideoStorageModel({
        userId,
        videos: [cloudfrontUrl],
      });
    } else {
      videoStorage.videos.push(cloudfrontUrl);
    }
    await videoStorage.save();
    console.log("Video storage updated successfully.");
    return videoStorage;
  };

  return {
    screenVideoUpload,
  };
};

export default userHelper;
