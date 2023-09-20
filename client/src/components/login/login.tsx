import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { UserFormData } from "../../types/userInterface";
import { registerUser } from "../../features/axios/api/user/userAuthentication";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Login: React.FC = () => {
  const validationSchema = Yup.object({
    email: Yup.string().email("invalid email").required("email is required"),
    name: Yup.string()
      .required("name is required")
      .matches(/^[A-Za-z]+$/, "Name must contain only alphabetic characters"),
  });

  const notify = (type: string, message: any) => {
    console.log(message)
    if (type === "err") {
      toast.error(`${message}!`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
        toast(message)
    }
  };

  const initialValue = {
    email: "",
    name: "",
  };

  const handleSubmit = (values: UserFormData) => {
    console.log(values);
    registerUser(values)
      .then((response) => {
        notify('success','user logged successfully')
        localStorage.setItem("userToken", response.userToken);
        
      })
      .catch((err) => {
        notify('err',err.message)
      });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <img
          className="w-full h-full object-fill"
          src="https://res.cloudinary.com/dk4darniv/image/upload/v1695203076/animated%20svg/group-video-animate_katwvl.svg"
          alt=""
        />
      </div>

      <div className=" flex flex-col justify-center">
        <Formik
          initialValues={initialValue}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="max-w-[400px] w-full mx-auto p-8 px-8 rounded-lg">
            <h2 className="text-4xl dark:text-while font-bold text-center">
              Sign In
            </h2>
            <div className="flex flex-col text-gray-300 py-2">
              <label htmlFor="" className="text-gray-800">
                Name
              </label>
              <Field
                type="text"
                id="name"
                name="name"
                required
                className="rounded-lg text-black bg-gray-200 mt-2 p-2 focus:border-blue-400 focus:bg-gary-700 focus:outline-none"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="flex flex-col text-gray-300 py-2">
              <label htmlFor="" className="text-gray-800">
                Email
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                required
                className="rounded-lg bg-gray-200 text-black mt-2 p-2 focus:border-blue-400 focus:bg-gary-700 focus:outline-none"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500"
              />
            </div>
            <button
              type="submit"
              className="w-full my-5 py-2 bg-slate-800 shadow-lg text-white rounded-lg"
            >
              Sign in/Sign up
            </button>
          </Form>
        </Formik>
        <ToastContainer/>
      </div>
    </div>
  );
};

export default Login;
