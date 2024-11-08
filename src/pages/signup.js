import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image"; // Import Image from next/image

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the form data is complete
    if (!formData.username || !formData.email || !formData.password) {
      console.error("All fields are required");
      return;
    }

    console.log("Sign up data:", formData);

    try {
      const response = await fetch("https://fakestoreapi.com/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const json = await response.json();

      if (response.ok) {
        console.log("Sign up successful:", json);
        // Redirect to login page after successful sign up
        router.push("/login");
      } else {
        console.error("Sign up failed:", json);
        // Handle errors (e.g., show an error message)
      }
    } catch (error) {
      console.error("Error during sign up:", error);
    }
  };

  const handleGoogleSignUp = () => {
    console.log("Sign Up with Google");
    // Implement Google sign-up logic here
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content Section */}
      <div className="signup-container flex flex-1">
        <div className="image-section w-1/2">
          <img
            src="/img1.png"
            alt="Description"
            className="object-cover py-20"
          />
        </div>
        <div className="form-section w-1/2 flex flex-col justify-center p-8">
          <h1 className="mb-3 text-4xl">
            <b>Create an account</b>
          </h1>
          <h6 className="py-3">Enter your details below</h6>
          <form onSubmit={handleSubmit} className="flex flex-col">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2 mb-4 rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2 mb-4 rounded"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2 mb-4 rounded"
            />
            <button
              type="submit"
              className="bg-red-600 text-white py-3 px-6 rounded w-full"
            >
              Create Account
            </button>
            <button
              type="button"
              onClick={handleGoogleSignUp}
              className="py-2 px-4 rounded border border-gray-400 text-gray-700 mt-2"
            >
              Sign up with Google
            </button>
            <p className="flex justify-between items-center mt-4 pl-8">
              <span>
                Already have an account?{" "}
                <a
                  onClick={() => router.push("/login")}
                  className="text-blue-500 cursor-pointer"
                >
                  Login
                </a>
              </span>
            </p>
          </form>
        </div>
      </div>

      {/* Footer Component */}
      <footer className="flex justify-center items-center mt-8-auto w-full py-4 mt-auto cursor-pointer">
        <Image
          src="/Footer.svg"
          alt="Footer"
          width={1000}
          height={200}
          className="w-full"
        />
      </footer>
    </div>
  );
};

export default SignUp;
