import React, { useEffect, useState } from "react";
import { useRecordWebcam } from "react-record-webcam";
import { getUserData } from "../../features/axios/api/user/getUserData";
import moment from "moment";
// import RecordRTC  from 'recordrtc';

const Body: React.FC = () => {
  const OPTIONS = {
    filename: "test-filename",
    fileType: "mp4",
    width: 1920,
    height: 1080,
  };
  const [userData, setUserData] = useState<any>("");
  const [status, setStatus] = useState<boolean>(false);

  //   const [recording,setRecording] = useState<any>(null);
  //   const [screenStream,setScreenStream] =useState<any>(null);
  //   const [MediaRecorder,setMediaRecorder] =useState<any>(null);
  //   const [videoBlob,setVideoBlob] =useState<any>(null);

  //  const startRecording = async()=>{
  //     const stream = await navigator.mediaDevices.getDisplayMedia(
  //         {
  //             video:{
  //                 mediaSource:"screen"
  //             }
  //         }
  //     )
  //  }

  useEffect(() => {
    getUserData().then((response) => {
      setUserData(response);
    });
  }, []);

  const recordWebcam = useRecordWebcam(OPTIONS);

  return (
    <main className="overflow-hidden">
      <div className="container mx-auto py-8 px-4">
        <h2 className="text-xl text-gray-500 uppercase font-light mb-4">
          video recorder
        </h2>
        <p>camera status: {recordWebcam.status}</p>
        {!status && (
          <video
            ref={recordWebcam.webcamRef}
            autoPlay
            className="bg-black w-full max-h-[500px] h-auto mb-6"
          ></video>
        )}

        {status && (
          <video
            ref={recordWebcam.previewRef}
            autoPlay
            className="bg-black w-full max-h-[500px] h-auto mb-6"
          ></video>
        )}

        <h2 className="text-lg text-gray-500 uppercase font-light mt-4 mb-2">
          {userData?.name}
        </h2>
        <h2 className="text-lg text-gray-500 uppercase font-light mb-4">
          {moment().format('LTS')}
        </h2>

        <div className="flex justify-center items-center  -mx-4  mb-8">
          {recordWebcam.status === "CLOSED" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-8 h-8 me-2 cursor-pointer"
              onClick={recordWebcam.open}
            >
              <path
                fill-rule="evenodd"
                d="M1 8a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 018.07 3h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0016.07 6H17a2 2 0 012 2v7a2 2 0 01-2 2H3a2 2 0 01-2-2V8zm13.5 3a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM10 14a3 3 0 100-6 3 3 0 000 6z"
                clip-rule="evenodd"
              />
            </svg>
          ) : (
            ""
          )}

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            onClick={recordWebcam.close}
            className={
              recordWebcam.status === "OPEN"
                ? "w-8 h-8 ms-2 cursor-pointer"
                : "hidden"
            }
          >
            <path d="M1 13.75V7.182L9.818 16H3.25A2.25 2.25 0 011 13.75zM13 6.25v6.568L4.182 4h6.568A2.25 2.25 0 0113 6.25zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75zM2.28 4.22a.75.75 0 00-1.06 1.06l10.5 10.5a.75.75 0 101.06-1.06L2.28 4.22z" />
          </svg>

          {/* <button
            type="button"
            onClick={recordWebcam.start}
            className={
              recordWebcam.status === "OPEN"
                ? "text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-xs px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                : "hidden"
            }
          >
            Record
          </button> */}

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            onClick={recordWebcam.start}
            className={
              recordWebcam.status === "OPEN"
                ? "w-8 h-8 ms-2 cursor-pointer"
                : "hidden"
            }
          >
            <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z" />
          </svg>

          {recordWebcam.status === "RECORDING" ? (
            // <button
            //   onClick={() => {
            //     recordWebcam.stop();
            //     setStatus(true);
            //   }}
            //   type="button"
            //   className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-xs px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            // >
            //   stop
            // </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-8 h-8 cursor-pointer ms-2"
              onClick={() => {
                recordWebcam.stop();
                setStatus(true);
              }}
            >
              <path
                fill-rule="evenodd"
                d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm5-2.25A.75.75 0 017.75 7h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75h-4.5a.75.75 0 01-.75-.75v-4.5z"
                clip-rule="evenodd"
              />
            </svg>
          ) : (
            ""
          )}

          {recordWebcam.status === "PREVIEW" ? (
            // <button
            //   onClick={() => {
            //     recordWebcam.retake();
            //     setStatus(false);
            //   }}
            //   type="button"
            //   className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-xs px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            // >
            //   Retake
            // </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-8 h-8 cursor-pointer ms-2"
              onClick={() => {
                recordWebcam.retake();
                setStatus(false);
              }}
            >
              <path
                fill-rule="evenodd"
                d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z"
                clip-rule="evenodd"
              />
            </svg>
          ) : (
            ""
          )}

          {recordWebcam.status === "PREVIEW" ? (
            // <button
            //   onClick={recordWebcam.download}
            //   type="button"
            //   className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-xs px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            // >
            //   Download
            // </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-8 h-8 cursor-pointer ms-2"
              onClick={recordWebcam.download}
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v4.59L7.3 9.24a.75.75 0 00-1.1 1.02l3.25 3.5a.75.75 0 001.1 0l3.25-3.5a.75.75 0 10-1.1-1.02l-1.95 2.1V6.75z"
                clip-rule="evenodd"
              />
            </svg>
          ) : (
            ""
          )}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-8 h-8 cursor-pointer ms-2 rotate-180"
          >
            <path d="M10 2a.75.75 0 01.75.75v5.59l1.95-2.1a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0L6.2 7.26a.75.75 0 111.1-1.02l1.95 2.1V2.75A.75.75 0 0110 2z" />
            <path d="M5.273 4.5a1.25 1.25 0 00-1.205.918l-1.523 5.52c-.006.02-.01.041-.015.062H6a1 1 0 01.894.553l.448.894a1 1 0 00.894.553h3.438a1 1 0 00.86-.49l.606-1.02A1 1 0 0114 11h3.47a1.318 1.318 0 00-.015-.062l-1.523-5.52a1.25 1.25 0 00-1.205-.918h-.977a.75.75 0 010-1.5h.977a2.75 2.75 0 012.651 2.019l1.523 5.52c.066.239.099.485.099.732V15a2 2 0 01-2 2H3a2 2 0 01-2-2v-3.73c0-.246.033-.492.099-.73l1.523-5.521A2.75 2.75 0 015.273 3h.977a.75.75 0 010 1.5h-.977z" />
          </svg>
        </div>
      </div>
    </main>
  );
};

export default Body;
