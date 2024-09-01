import { useParams } from "react-router-dom";
import { courseListData } from "../utils/CourseListData";

function CourseDetails() {
    const { course_id } = useParams(); // Fetch course_id from URL params
  
    const course = courseListData.courses.find(course => course.course_id.toString() === course_id); // Find the course details

    if (!course) {
        return <div>Course not found</div>;
    }

    return (
        <div className="container mx-auto px-10 py-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
                <img
                    src={course.image_url}
                    alt={course.course_name}
                    className="w-[200px] h-[130px] object-cover rounded-t-lg mb-6"
                />
                <h1 className="text-3xl font-bold text-gray-800 mb-4">{course.course_name}</h1>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <p className="text-gray-800 font-bold mb-2">Instructor: {course.instructor_name}</p>
                <p className="text-gray-800 font-bold mb-2">Price: {course.price}</p>
                <p className="text-gray-500 mb-2">Schedule: {course.schedule}</p>
                <p className="text-gray-500 mb-2">Duration: {course.course_duration}</p>
                <p className="text-gray-500 mb-4">Pre-requisites: {course.pre_requisites}</p>

                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Syllabus</h2>
                <ul className="text-gray-700 list-disc list-inside mb-6">
                    {course.syllabus.map((week, index) => (
                        <li key={index} className="mb-2">
                            {week}
                        </li>
                    ))}
                </ul>

                <p className="text-gray-500 mb-2">Location: {course.location}</p>
                <p className="text-gray-500">Enrollment Status: {course.enrollment_status}</p>
            </div>
        </div>
    );
}

export default CourseDetails;
