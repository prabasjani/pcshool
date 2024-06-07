import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  return (
    <div className="d-flex justify-content-center">
      <Link
        to={`/${course.course}`}
        className="d-flex align-items-center justify-content-center flex-column p-3 shadow-lg col border-1 m-2 rounded text-decoration-none courseCard"
      >
        <img src={course.logo} alt={course.course} className="cardImg" />
        <h3 className="fs-4 text-dark">{course.course}</h3>
      </Link>
    </div>
  );
};

export default CourseCard;
