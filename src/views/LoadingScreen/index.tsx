/*Intro: This component shows loading screen while fetching the location details from the browser*/
const LoadingScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">

      <div className="mb-4 border-t-4 border-blue-500 rounded-full animate-spin h-8 w-8"></div>

      <p className="text-lg font-semibold text-gray-800">
        Fetching location and weather information. Please wait.
      </p>
    </div>
  );
};

export default LoadingScreen;
