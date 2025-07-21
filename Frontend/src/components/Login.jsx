import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/user/login`,
        userInfo
      );
      if (res.data) {
        toast.success("Logged in Successfully ✨");
        document.getElementById("my_modal_3").close();
        localStorage.setItem("Users", JSON.stringify(res.data.user));
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    } catch (err) {
      if (err.response) {
        toast.error("Error: " + err.response.data.message);
      }
    }
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-white dark:bg-slate-900 text-black dark:text-white shadow-xl rounded-2xl px-8 w-full max-w-md mx-auto">
          <form
            onSubmit={handleSubmit(onSubmit)}
            method="dialog"
            className="space-y-6"
          >
            {/* Close Button */}
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => document.getElementById("my_modal_3").close()}
                className="text-xl text-gray-400 hover:text-red-500 transition duration-200"
              >
                ✕
              </button>
            </div>

            <h3 className="text-2xl font-bold text-center mb-2">
              Welcome Back 👋
            </h3>
            <p className="text-center text-sm text-gray-500 dark:text-gray-400">
              Login to continue learning!
            </p>

            {/* Email Field */}
            <div>
              <label className="block mb-1 font-medium text-sm">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className={`w-full px-4 py-2 rounded-md bg-white dark:bg-slate-800 border transition focus:outline-none focus:ring-2 focus:ring-pink-500 ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">Email is required.</p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label className="block mb-1 font-medium text-sm">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className={`w-full px-4 py-2 rounded-md bg-white dark:bg-slate-800 border transition focus:outline-none focus:ring-2 focus:ring-pink-500 ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }`}
                {...register("password", { required: true })}
              />
              {errors.password && (
                <p className="text-sm text-red-500 mt-1">
                  Password is required.
                </p>
              )}
            </div>

            {/* Submit + Link */}
            <div className="flex flex-col items-center gap-4">
              <button
                type="submit"
                className="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-md transition duration-300 font-semibold shadow"
              >
                Login
              </button>
              <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="text-blue-500 hover:text-blue-700 underline"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
