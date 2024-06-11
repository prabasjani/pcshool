import React from "react";

const DownloadBtn = ({ currentCourse }) => {
  return (
    <div className="d-flex align-items-center justify-content-around mb-3">
      <p className="fs-5 text-primary-emphasis m-0">
        Subscribe to Download the {currentCourse.course} Documentation
      </p>
      <a href="" className="btn btn-primary">
        Download
      </a>
    </div>
  );
};

export default DownloadBtn;
