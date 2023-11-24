const Footers = () => {
  return (
    <div className="mt-20">
      <footer className="bg-neutral-200 text-center text-white dark:bg-neutral-600 dark:text-neutral-200">
        {/* Upcoming pets category */}
        {/* <div className="container p-6">
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            <div className="mb-6 lg:mb-0">
              <img
                src="https://i.ibb.co/QQp1c5g/image.png"
                className="w-full rounded-md shadow-lg"
              />
            </div>
            <div className="mb-6 lg:mb-0">
              <img
                src="https://i.ibb.co/gVKSDNx/image.png"
                className="w-full rounded-md shadow-lg"
              />
            </div>
            <div className="mb-6 lg:mb-0">
              <img
                src="https://i.ibb.co/JtcvnyY/image.png"
                className="w-full rounded-md shadow-lg"
              />
            </div>
            <div className="mb-6 lg:mb-0">
              <img
                src="https://i.ibb.co/nzWSyYJ/image.png"
                className="w-full rounded-md shadow-lg"
              />
            </div>
            <div className="mb-6 lg:mb-0">
              <img
                src="https://i.ibb.co/H4dgPxC/image.png"
                className="w-full rounded-md shadow-lg"
              />
            </div>
            <div className="mb-6 lg:mb-0">
              <img
                src="https://i.ibb.co/8YYqrqP/image.png"
                className="w-full rounded-md shadow-lg"
              />
            </div>
          </div>
        </div> */}
        {/* app section */}
        <div className=" bg-[#4e2c2c]">
          <div className="max-w-2xl mx-auto text-white py-10">
            <div className="text-center">
                <div className="flex justify-center">
                <img src="https://i.ibb.co/h1CvRPb/Happy-Homes-Hub-logo.png" alt=""
                className="bg-white  rounded-sm mb-4"
                />
                </div>
              <h3 className="text-3xl mb-3"> Download our fitness app </h3>
              <p> Stay fit. All day, every day. </p>
              <div className="flex justify-center my-10">
                <div className="flex items-center border w-auto rounded-lg px-4 py-2  mx-2">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                    className="w-7 md:w-8"
                  />
                  <div className="text-left ml-3">
                    <p className="text-xs text-gray-200">Download on </p>
                    <p className="text-sm md:text-base"> Google Play Store </p>
                  </div>
                </div>
                <div className="flex items-center border w-auto rounded-lg px-4 py-2  mx-2">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/888/888841.png"
                    className="w-7 md:w-8"
                  />
                  <div className="text-left ml-3">
                    <p className="text-xs text-gray-200">Download on </p>
                    <p className="text-sm md:text-base"> Apple Store </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--Copyright section--> */}
        <div className="bg-[#4e2c2c] p-4 text-center text-white dark:bg-neutral-700 dark:text-neutral-200">
          © 2023 Copyright:
          <a
            className="dark:text-neutral-400"
            href="https://tailwind-elements.com/"
          >
            Happy Homes Hub
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footers;
