'use client';

const Profile = () => {
  const onClickLogout = (e) => {
    e.preventDefault();
  };
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="px-16 pt-8 pb-12 mb-4 bg-white ">
        <h1 className="text-3xl mb-4 text-center">Welcome to Home Page</h1>
        <p className="text-center">
          Welcome to your personalized home page <br />
          You can view and manage your account information
        </p>
        <button
          onClick={(e) => onClickLogout(e)}
          className="bg-red-500 duration-300 hover:bg-red-700 text-white py-2 px-4 mt-4 rounded-full w-full"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
