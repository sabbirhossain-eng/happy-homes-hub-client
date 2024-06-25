const About = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl font-semibold text-primary-light text-center mb-4" data-aos="fade-up" data-aos-duration="3000">
        Welcome to Happy Homes Hub - Where Hearts and Homes Unite!
      </h2>
      <div className="bg-white dark:bg-card-dark dark:text-in-dark">
      <header className="bg-primary-light text-white text-center py-12">
        <h1 className="text-4xl font-bold mt-16">About Us</h1>
      </header>

      <section className="text-center py-12 px-4">
        <h2 className="text-2xl font-bold">Mission And Values</h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
        At Happy Homes Hub, we believe every pet deserves a loving home, and we are dedicated to making that vision a reality. Together, we can create a world where all animals are valued, cared for, and cherished.
        </p>
        <div className="flex justify-center space-x-8 mt-8 animate-fadeIn">
          <div className="transition transform hover:scale-110">
            <h3 className="text-xl font-bold" >85+</h3>
            <p className="text-gray-700">Specialists</p>
          </div>
          <div className="transition transform hover:scale-110">
            <h3 className="text-xl font-bold" >25+</h3>
            <p className="text-gray-700">Years of Experience</p>
          </div>
        </div>
      </section>

      <section className="bg-primary-light text-white py-12 px-4">
        <h2 className="text-2xl font-bold text-center">Our Vision</h2>
        <p className="mt-4 text-center max-w-2xl mx-auto">
        At Happy Homes Hub, our vision is to be the leading platform for pet adoption, transforming the lives of animals and humans alike by fostering a world where every pet finds a loving and permanent home. We aspire to create a compassionate and connected community where the bond between pets and their owners is cherished and celebrated.
        </p>
      </section>

      <section className="text-center py-12 px-4">
        <h2 className="text-2xl font-bold">Our Healthcare Specialties</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8 dark:text-black">
          <div className="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
            <h3 className="text-xl font-bold">Cardiology</h3>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
            <h3 className="text-xl font-bold">Neurology</h3>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
            <h3 className="text-xl font-bold">Pediatrics</h3>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
            <h3 className="text-xl font-bold">Oncology</h3>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-12 px-4 dark:bg-card-dark dark:text-in-dark">
        <h2 className="text-2xl font-bold text-center">State-Of-The-Art Technology</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-5xl mx-auto">
          <div className="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow dark:bg-card-dark dark:text-in-dark">
            <h3 className="text-xl font-bold">Advanced Diagnostics</h3>
            <p className="text-gray-700 mt-2">We utilize the latest technology for accurate diagnostics.</p>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow dark:bg-card-dark dark:text-in-dark">
            <h3 className="text-xl font-bold">Telemedicine</h3>
            <p className="text-gray-700 mt-2">Consult with our specialists from the comfort of your home.</p>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow dark:bg-card-dark dark:text-in-dark">
            <h3 className="text-xl font-bold">Robotic Surgery</h3>
            <p className="text-gray-700 mt-2">Minimally invasive procedures with precision.</p>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow dark:bg-card-dark dark:text-in-dark">
            <h3 className="text-xl font-bold">Electronic Health Records</h3>
            <p className="text-gray-700 mt-2">Secure and easy access to your medical records.</p>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
};

export default About;
