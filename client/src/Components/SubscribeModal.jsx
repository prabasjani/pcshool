import React, { useContext, useState } from "react";
import { AppContext } from "../AppContext";
import { useNavigate } from "react-router-dom";

const SubscribeModal = () => {
  const { subModal, toggleSubModal } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    navigate("/");
  };

  return (
    <>
      {subModal && (
        <div className="d-flex flex-column justify-content-center align-items-center border-1 w-50 shadow-lg  my-6 p-5 rounded-4 subscriptionModal">
          <h3>Please Subscribe Our Page</h3>
          <form onSubmit={handleSubmit}>
            <div class="form-floating my-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="d-flex gap-4 mt-2">
              <button className="btn btn-danger rounded-5 px-5" type="submit">
                Subscribe
              </button>
              <button
                className="btn btn-secondary rounded-5 px-5 subscribeCancelBtn"
                onClick={toggleSubModal}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default SubscribeModal;
