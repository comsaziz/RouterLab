function Register() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-6 rounded-lg w-2/5 shadow-md">
        <h1 className="text-2xl font-bold text-blue-500 mb-2">Register for the Camp</h1>
        <p className="text-gray-700 mb-5">Please fill in this form to create an account.</p>
        <hr className="border-gray-300 mb-5" />

        <form className="flex flex-col gap-4" id="signup_form">
          <label htmlFor="username" className="font-semibold text-gray-700">Name</label>
          <input
            type="text"
            id="username"
            placeholder="Your Name"
            className="p-2 border border-gray-300 rounded"
          />

          <label htmlFor="email" className="font-semibold text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Your Email"
            className="p-2 border border-gray-300 rounded"
          />

          <label htmlFor="password" className="font-semibold text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Please enter your password"
            className="p-2 border border-gray-300 rounded"
          />
          
          <button
            id="bt_submit"
            type="submit"
            className="bg-blue-500 text-white p-2 rounded transition hover:bg-blue-600"
          >
            Register
          </button>
        </form>
        
        <p id="error_message" className="text-red-500 text-center mt-2"></p>
      </div>
    </div>
  );
}

export default Register;
