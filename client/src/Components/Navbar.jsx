import { useContext } from "react";
import { AppContext } from "../AppContext";

const Navbar = () => {
  const { subModal, toggleSubModal } = useContext(AppContext);
  return (
    <div className="d-flex justify-content-between px-10 py-3 border-bottom shadow">
      <div className="brand">
        <h2 className="">
          <b>P</b>raba<b>C</b>ode<b>S</b>chool
        </h2>
      </div>
      <div className="subscription">
        {subModal ? null : (
          <button
            className="btn btn-danger rounded-5 fw-bold px-4"
            onClick={toggleSubModal}
          >
            Subscribe
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
