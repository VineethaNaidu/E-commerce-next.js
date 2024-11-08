import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the form data is complete
    if (!formData.username || !formData.password) {
      setError("All fields are required.");
      return;
    }

    console.log("Login data:", formData);

    try {
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const json = await response.json();

      if (response.ok) {
        console.log("Login successful:", json);

        // Store the token if necessary and redirect
        // localStorage.setItem("authToken", json.token);

        router.push("/"); // Redirect to home page after successful login
      } else {
        setError("Login failed. Please check your credentials.");
        console.error("Login failed:", json);
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="login-container flex flex-col min-h-screen">
      {/* Main Content Section */}
      <div className="flex flex-1">
        <div className="image-section w-1/2">
          <img
            src="/img1.png"
            alt="Description"
            className="object-cover py-20"
          />
        </div>
        <div className="form-section w-1/2 flex flex-col justify-center p-8">
          <h1 className="mb-3 text-4xl">
            <b>Login to EXCLUSIVE</b>
          </h1>
          <h6 className="py-3">Enter your details here</h6>

          {/* Display error message if login fails */}
          {error && <p className="text-red-500">{error}</p>}

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
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2 mb-4 rounded"
            />
            <div>
              <button
                type="submit"
                className="bg-red-600 text-white py-3 px-6 rounded w-45"
              >
                Login
              </button>

              <a
                onClick={() => router.push("/signup")}
                className="text-red-500 justify-right pl-20 cursor-pointer"
              >
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </div>

      {/* Footer Component */}
      <footer className="flex justify-center items-center mt-8-auto w-full bg-gray-100 py-4 cursor-pointer ">
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

export default Login;
