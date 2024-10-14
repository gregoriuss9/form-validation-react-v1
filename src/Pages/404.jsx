const NotFoundPage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-5xl text-black-600 font-bold">404</h1>
      <h2 className="text-3xl text-red-600 font-bold">Page Not Found</h2>
      <p className="text-xl text-gray-600">
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  );
};

export default NotFoundPage;
