import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="about p-8 bg-gray-100">
      <div className="container mx-auto p-4">
        <div className="row flex flex-wrap justify-center">
          <div className="image w-full md:w-1/2 xl:w-1/3 p-4">
            <img
              src="/public/images/about-img.svg"
              alt="About Us"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="content w-full md:w-1/2 xl:w-2/3 p-4">
            <h3 className="text-3xl font-bold text-gray-800">Why Choose Us?</h3>
            <p className="text-gray-600 mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut dolorum quasi illo? Distinctio expedita commodi, nemo a quam error repellendus sint, fugiat quis numquam eum eveniet sequi aspernatur quaerat tenetur.
            </p>
            <Link
              to="/home/course"
              className="inline-btn bg-blue-500 hover:bg-blue-700 text-white p-4 rounded mt-16 transition duration-300 ease-in-out"
            >
              Our Courses
            </Link>
          </div>
        </div>

        <div className="box-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {[
            {
              image: "/public/images/onlinecourses.png",
              title: "+10k",
              description: "Online Courses",
            },
            {
              image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOM9uHKlXzS3gNM6G0ZqQkjMtSKdNwuQA-OrlsNxBBGu0eTAUgPuWs3i0Sh1zg-xbxy9s&usqp=CAU",
              title: "+40k",
              description: "Brilliant Students",
            },
            {
              image: "https://www.pngkey.com/png/detail/171-1715831_expert-ucat-teachers-teachers-hat-icon.png",
              title: "+2k",
              description: "Expert Tutors",
            },
            {
              image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRjqR8EKYV2jBCKpLmyhBa1Wqr0hP7cUdShg&s",
              title: "100%",
              description: "Job Placement",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="box bg-white p-4 rounded shadow-md flex items-center space-x-4 hover:shadow-lg transition duration-300 ease-in-out"
            >
              <img src={item.image} alt={item.description} className="w-12 h-12 object-cover" />
              <div>
                <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;