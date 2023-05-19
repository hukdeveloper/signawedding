import React from "react";
import "./styles.css";

const JoinMailComponent = () => {
  return (
    <>
      <div className="JoinMailHead">
        <div className="formHead">
          <form action="" className="form">
            <h2>Stay Informed... Join our Mailing List</h2>
            <label htmlFor="email">email *</label>
            <input type="text" required placeholder="Enter Your Email here" />
            <button>Subscribe Now</button>
          </form>
        </div>
      </div>
    </>
  );
};
export default JoinMailComponent;
