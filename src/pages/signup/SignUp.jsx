import { useState } from "react";
import { toast } from "react-toastify";

const Signup = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Convert file to previewable image
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    toast.warn("noooo");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white px-8 py-4 rounded-lg shadow-lg w-1/2">
        {/* Avatar Upload */}
        <form action="">
        <div className="flex flex-col items-center mb-4">
          <label htmlFor="avatarUpload" className="cursor-pointer">
            <img
              src={image || "default-user.png"}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover"
            />
          </label>
          <input
            id="avatarUpload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
        </div>

        <h2 className="text-2xl font-bold text-center mb-4">
          Sign up to your account
        </h2>

        {/* Name & Email Fields */}
        <div className="flex flex-col md:flex-row gap-4 mb-5">
          <div className="flex-1">
            <label className="block mb-1 font-bold text-gray-700">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="John Doe"
            />
          </div>

          <div className="flex-1">
            <label className="block mb-1 font-bold text-gray-700">
              Email address
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="john.doe@company.com"
            />
          </div>
        </div>

        {/* Password Fields */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label className="block mb-1 font-bold text-gray-700">
              Password:
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="********"
            />
          </div>

          <div className="flex-1">
            <label className="block mb-1 font-bold text-gray-700">
              Confirm Password:
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="********"
            />
          </div>
        </div>

        {/* Terms & Conditions */}
        <div className="flex items-center my-2">
          <input type="checkbox" className="mr-2" />
          <label>
            I agree with the{" "}
            <a href="#" className="text-blue-600">
              terms and conditions
            </a>
            .
          </label>
        </div>


        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Submit
        </button>
        </form>

        {/* Submit Button */}
      

        {/* Login Link */}
        <p className="text-center mt-3">
          Already have an account?{" "}
          <a href="/" className="font-bold text-blue-600">
            Login Here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
