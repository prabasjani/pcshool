import React from "react";
import { useParams } from "react-router-dom";
import { courses } from "../utils/data";
import NoContent from "./NoContent";
import Topics from "./Topics";
import DownloadBtn from "./DownloadBtn";

const Course = () => {
  const { course } = useParams();
  const currentCourse = courses.find(
    (thisCourse) => thisCourse.course === course
  );
  return (
    <div className="container mt-5 ">
      <div className="d-flex align-items-center justify-content-start shadow-lg p-4 rounded-4 mb-5">
        <img
          src={currentCourse.logo}
          alt={currentCourse.course}
          style={{ width: "75px", marginRight: "30px" }}
        />
        <h1>{currentCourse.course}</h1>
      </div>
      <p className="fs-4 text-secondary">{currentCourse.desc}</p>
      <div className="mt-5">
        {currentCourse.topics.length === 0 ? (
          <NoContent />
        ) : (
          <>
            <Topics currentCourse={currentCourse} />
            <DownloadBtn currentCourse={currentCourse} />
          </>
        )}
      </div>
    </div>
  );
};

export default Course;
