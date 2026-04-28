"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";

const RegisterPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    //watch,
    formState: { errors },
  } = useForm();

  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleRegisterFormDataSubmit = async (data) => {
    const { name, photo, email, password } = data;

    const { data: res, error } = await authClient.signUp.email(
      {
        name: name,
        email: email,
        password: password,
        image: photo,
      },
      {
        onSuccess: () => {
          router.push("/");
        },
      },
    );

    console.log(res, error);
    if (error) {
      alert(error.message);
    }
    if (res) {
      alert("Signup successfully");
    }
  };
  //console.log(errors);
  //console.log(watch("email"));

  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center mt-8 ">
      <div className=" bg-white rounded-lg p-10 border border-gray-200 shadow-md">
        <h2 className="text-2xl text-black font-bold text-center">
          Register your account
        </h2>
        <div className="mt-6">
          <hr className="border border-gray-200" />
        </div>
        <form
          className=""
          onSubmit={handleSubmit(handleRegisterFormDataSubmit)}
        >
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mt-6 relative">
            <label className="label">Name</label>
            <input
              type="text"
              className="input"
              placeholder="Enter Your Name"
              {...register("name", { required: "Name field is required" })}
            />
            {errors.name && (
              <p className="text-[10px] text-purple-600">
                {errors.name.message}
              </p>
            )}

            <label className="label">Photo Url</label>
            <input
              type="text"
              className="input"
              placeholder="Enter Your Photo Url"
              {...register("photo", {
                required: "Photo Url field is required",
              })}
            />
            {errors.photo && (
              <p className="text-[10px] text-purple-600">
                {errors.photo.message}
              </p>
            )}

            <label className="label">Email</label>
            <input
              type="email"
              className="input "
              placeholder="Enter Your Email"
              {...register("email", { required: "Email field is required" })}
            />
            {errors.email && (
              <p className="text-[10px] text-purple-600">
                {errors.email.message}
              </p>
            )}

            <label className="label">Password</label>
            <input
              type={isShowPassword ? "text" : "password"}
              className="input"
              placeholder="Enter Your Password"
              {...register("password", {
                required: "Password field is required",
              })}
            />
            <span
              className="absolute right-7 top-66 cursor-pointer"
              onClick={() => setIsShowPassword(!isShowPassword)}
            >
              {isShowPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
            {errors.password && (
              <p className="text-[10px] text-purple-600">
                {errors.password.message}
              </p>
            )}
            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
