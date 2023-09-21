import React from "react";
import {
  RecordWebcam,
  useRecordWebcam
  
} from "react-record-webcam";

const Body: React.FC = () => {
  const OPTIONS = {
    filename: "test-filename",
    fileType: "mp4",
    width: 1920,
    height: 1080,
  };

  const recordWebcam = useRecordWebcam(OPTIONS);

  return (
    <main className="overflow-hidden">
      <div className="container mx-auto py-8 px-4">
        <h2 className="text-xl text-gray-500 uppercase font-light mb-4">
          video recorder
        </h2>
            <p>camera status: {recordWebcam.status}</p>
        <video ref={recordWebcam.webcamRef} autoPlay className="bg-black w-full h-auto mb-6"></video>

        <div className="flex justify-center items-center -mx-4 mb-8">
          <button onClick={recordWebcam.open} className="mx-4 flex-1 p-4 text-lg font-bold bg-gray-500 uppercase">
            open camera
          </button>
          <button onClick={recordWebcam.close} className="mx-4 flex-1 p-4 text-lg font-bold bg-gray-500 uppercase">
            close camera
          </button>
        </div>
      </div>
    </main>
  );
};

export default Body;
