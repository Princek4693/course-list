import { Link } from "react-router-dom";
import { courseListData } from "../utils/CourseListData";
import CourseDetails from "./CourseDetails";

function CourseList() {
    const { courses } = courseListData;

   

   
    
    return (
        <div className="container mx-auto px-10 py-14">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {courses.map((course) => (
                    <div
                        key={course.course_id}
                        className="bg-white shadow-lg rounded-lg p-10 hover:shadow-xl transition-shadow duration-300"
                    >
                        {/* Image at the top */}
                        <img
                            src={course.image_url}  // Assuming the image URL is part of the course data
                            alt={course.instructor_name}
                            className="w-[70px] h-[60px] object-cover rounded-t-lg mb-4"
                        />
                         <img
                            src={course.course_image_url}  // Assuming the image URL is part of the course data
                            alt={course.instructor_name}
                            className="w-[300px] h-[200px] rounded-t-lg mb-4"
                        />
                        
                        {/* Instructor Name and Date */}
                        <div className="flex justify-between items-center mb-4">
                            <h1 className="text-xl font-semibold text-gray-800">
                                {course.instructor_name}
                            </h1>
                            <span className="text-gray-500 text-sm">
                                {course.date}  {/* Assuming the date is part of the course data */}
                            </span>
                        </div>

                        <h2 className="text-lg font-medium text-gray-600 mb-2">
                            {course.course_name}
                        </h2>
                        <p className="text-gray-800 font-bold mb-4">
                            Price: {course.price}
                        </p>
                        <p className="text-gray-500">
                            Schedule: {course.schedule}
                        </p>
                        <Link to={`/home/course/${course.course_id}`}  className="bg-blue-600 text-white rounded-lg font-semibold px-3 py-3  relative top-4 hover:bg-blue-700 shadow-lg transition duration-300 ease-in-out">
                            About Coures
                        </Link>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default CourseList;
