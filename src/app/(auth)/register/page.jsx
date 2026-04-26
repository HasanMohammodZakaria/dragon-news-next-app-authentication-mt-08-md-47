"use client";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    //watch,
    formState: { errors },
  } = useForm();

  const handleRegisterFormDataSubmit = (data) => {
    const { name, photo, email, password } = data;

    //console.log(data);
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
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mt-6 ">
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
            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
