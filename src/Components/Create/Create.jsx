import React, { useState } from "react";
import "./Create.css";
import Button from "../Button/Button";
import { IoIosCloseCircle } from "react-icons/io";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const postData = { name: name, email: email };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Clicked");
    axios
      .post(
        "https://6662e9a062966e20ef0a8f48.mockapi.io/crud-youtube",
        postData
      )
      .then(() => {
        navigate("/read");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="form-container ">
      <form onSubmit={handleSubmit}>
        <span>
          <IoIosCloseCircle fontSize={"20px"} onClick={()=>navigate('/read  ')}/>
        </span>
        <h1>Create</h1>
        <div className="user-input">
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            htmlFor="email"
            id="email"
            autoComplete="off"
            required
          />
        </div>
        <div className="user-input">
          <label htmlFor="name">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            htmlFor="name"
            id="name"
            autoComplete="off"
            required
          />
        </div>

        <Button buttonName={"Submit"} />
      </form>
    </div>
  );
};

export default Create;
