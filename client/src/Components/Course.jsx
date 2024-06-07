import React from "react";
import { useParams } from "react-router-dom";
import { courses } from "../utils/data";

const Course = () => {
  const { course } = useParams();
  const currentCourse = courses.find(
    (thisCourse) => thisCourse.course === course
  );
  console.log(currentCourse);
  return (
    <div className="container mt-5">
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
        {currentCourse.topics.map((topic) => {
          return (
            <div className="topicBlock">
              <h2>{topic.topic}</h2>
              <div className="d-flex align-items-center">
                <p className="text-secondary fs-3">{topic.desc}</p>
                <img
                  src={topic.codeImg}
                  alt=""
                  style={{ width: "400px", marginLeft: "50px" }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Course;
