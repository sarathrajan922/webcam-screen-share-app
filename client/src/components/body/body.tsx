import React from "react";
import { useRecordWebcam } from "react-record-webcam";

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
        <video
          ref={recordWebcam.webcamRef || recordWebcam.previewRef}
          autoPlay
          className="bg-black w-full max-h-[500px] h-auto mb-6"
        ></video>

        <div className="flex justify-center items-center -mx-4 mb-8">
          {recordWebcam.status === "CLOSED" ? (
            <button
              onClick={recordWebcam.open}
              type="button"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-xs px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              open
            </button>
          ) : (
            ""
          )}

          <button
            onClick={recordWebcam.close}
            type="button"
            className={
              recordWebcam.status === "OPEN"
                ? "text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-xs px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                : "hidden"
            }
          >
            close
          </button>
          <button
            onClick={recordWebcam.start}
            type="button"
            className={
              recordWebcam.status === "OPEN"
                ? "text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-xs px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                : "hidden"
            }
          >
            Record
          </button>
          {recordWebcam.status === "RECORDING" ? (
            <button
              onClick={recordWebcam.stop}
              type="button"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-xs px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              stop
            </button>
          ) : (
            ""
          )}

          {recordWebcam.status === "PREVIEW" ? (
            <button
              onClick={recordWebcam.retake}
              type="button"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-xs px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Retake
            </button>
          ) : (
            ""
          )}

          {recordWebcam.status === "PREVIEW" ? (
            <button
              onClick={recordWebcam.download}
              type="button"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-xs px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Download
            </button>
          ) : (
            ""
          )}
          <button
            type="button"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-xs px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Screen Record
          </button>
        </div>
      </div>
    </main>
  );
};

export default Body;
