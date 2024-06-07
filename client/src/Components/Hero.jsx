import React, { useContext } from "react";
import SubscribeModal from "./SubscribeModal";
import CourseCard from "./CourseCard";
import { courses } from "../utils/data";
import { AppContext } from "../AppContext";

const Hero = () => {
  const { subModal } = useContext(AppContext);
  return (
    <div className="h-100">
      {subModal ? (
        <SubscribeModal />
      ) : (
        <div className="container mt-4">
          <div className="row row-cols-lg-4 subModal">
            {courses.map((course, index) => {
              return <CourseCard course={course} key={index} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
