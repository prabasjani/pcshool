import React from "react";

const Topics = ({ currentCourse }) => {
  return (
    <div className="courseTopics">
      {currentCourse.topics.map((topic, index) => {
        return (
          <div className="topicBlock" key={index}>
            <h2>{topic.topic}</h2>
            <div className="d-flex align-items-center justify-content-between">
              <p className="text-secondary fs-3">{topic.desc}</p>
              <img
                src={topic.codeImg}
                alt=""
                style={{ width: "400px", marginLeft: "50px" }}
                className="codeImg"
              />
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Topics;
