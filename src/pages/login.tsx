// import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import background from '../assets/bg3.jpg';
import logo from '../assets/logo2.png';
import { useMutation } from 'react-query';
import {
  InputField as Input,
  InputPassword as InputP,
} from '../component/common/inputField';
import { form_component as Form } from '../component/common/form_component';
import { create } from '../services/loginApis';
import { Modal } from 'antd';

const Login = () => {
  const history = useNavigate();
  const SignInMutation = useMutation(create, {
    onSuccess: (res: any) => {
      debugger;
      Modal.success({ content: `signIn successfully` ,footer: null});
      setTimeout(() => {
        Modal.destroyAll()
}, 1000)
      localStorage.setItem('token', `${res.access_token}`);
      history('/');
    },
    onError(error) {
debugger
      console.log(error);
      Modal.error({ content: (error as any).response.data.error_description ,footer: null});
      setTimeout(() => {
        Modal.destroyAll()
}, 2000)
    },
  });

  const onFinish = (values: any) => {
    debugger;
    if (values) {
      SignInMutation.mutate({ ...values, grant_type: 'password' });
    }
  };
  return (
    <div
      className="h-screen flex items-center justify-center  bg-cover bg-center bg-no-repeat bg-none"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="flex-1">
        <div className="text-center">
          <div className="flex justify-center">
            <img
              src={logo}
              alt="broke"
              className="w-[147px] 2xl:w-[280px] xl:w-[279px] lg:w-[230px] md:w-[226px] sm:w-[190px]"
            />
          </div>
          <h2 className="tracking-[-0.02em] font-bold md:text-2xl 2xl:text-3xl  xl:text-3xl sm:text-xl ">
            Welcome back!
          </h2>
          <p className="text-xs md:text-sm 2xl:text-xl text-gray-600">
            Welcome back! Please, Enter your details
          </p>
          <div className="flex justify-center">
            <Form onFinish={onFinish}>
              <Input
                name="username"
                placeholder="Enter User Name"
                lable="User Name"
              />

              <InputP
                name="password"
                placeholder="Enter Password"
                lable="Password"
              />

              <button
                type="submit"
                className="cursor-pointer  w-[5rem] 2xl:w-[29rem] xl:w-[23rem] lg:w-[19rem] md:w-[17rem] sm:w-[13rem] hover:bg-[#8950d3] bg-[#7c3cce] text-white h-10 rounded-lg outline-none "
              >
                Login
              </button>
            </Form>
          </div>
        </div>
      </div>

      <div className=" flex-1 text-white text-center">
        <h1 className="text-xs pl-5 py-3 lg:px-14 sm:px-4   sm:text-sm lg:text-xl xl:text-2xl xl:px-20 2xl:text-3xl tracking-[-0.01em] leading-[120%] font-extrabold   subpixel-antialiased ">
          Your digital business is in good hands with us!
        </h1>
        <p className=" text-[10px] pl-7 sm:px-6 sm:text-xs md:px-7 md:text-sm lg:text-sm xl:text-sm lg:px-8 xl:px-14 2xl:text-base  tracking-[0.01em] leading-[155%] font-medium inline-block text-slate-200    subpixel-antialiased      ">
          Make your work easier with an integrated ecosystem that lets all
          departments work properly together.
        </p>
      </div>
    </div>
  );
};

export default Login;
