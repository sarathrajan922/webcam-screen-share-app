import { Schema,model } from "mongoose";

const videoStorageSchema = new Schema({
   userId: {
    type: String,
    required: [true,'please provide a userId'],
    unique: true
   },
   videos:{
    type: [String],
    required: [true,'please provide a video link']
   }
});

const VideoStorageModel = model('videos',videoStorageSchema,'videos');
export default VideoStorageModel;