import React, { useEffect, useState } from "react";
import "./Update.css";
import { IoIosCloseCircle } from "react-icons/io";
import Button from "../Button/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Update = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
  }, []);
  const handleUpdate = (e) => {
    e.preventDefault()  
    axios
      .put(`https://6662e9a062966e20ef0a8f48.mockapi.io/crud-youtube/${id}`, {
        name: name,
        email: email,
      })
      .then(() => navigate("/read"));
  };
  return (
    <div className="form-container ">
      <form onSubmit={handleUpdate}>
        <span>
          <IoIosCloseCircle fontSize={"20px"} onClick={()=>navigate('/read')}/>
        </span>
        <h1>Update</h1>
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

        <Button buttonName={"Update"} />
      </form>
    </div>
  );
};

export default Update;
