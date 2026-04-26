"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";

const LogInPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleFormDataSubmit = (data) => {
    console.log(data);
  };
  // console.log(errors);
  console.log(watch("email"));

  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center mt-8 ">
      <div className="bg-white rounded-lg p-10 border border-gray-200 shadow-md">
        <h2 className="text-2xl text-black font-bold text-center">
          Login your account
        </h2>
        <div className="mt-6">
          <hr className="border border-gray-200" />
        </div>
        <form className="" onSubmit={handleSubmit(handleFormDataSubmit)}>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mt-6 ">
            <label className="label">Email</label>
            <input
              type="email"
              className="input mb-4"
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
              type="password"
              className="input"
              placeholder="Enter Your Password"
              {...register("password", {
                required: "Password field is required",
              })}
            />
            {errors.password && (
              <p className="text-[10px] text-purple-600">
                {errors.password.message}
              </p>
            )}
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </form>
        <p className="text-[14px] text-center mt-5">
          Don’t Have An Account?
          <Link href={`/register`} className="text-purple-700 font-bold px-1">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LogInPage;
