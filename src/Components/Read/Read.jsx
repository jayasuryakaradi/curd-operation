import React, { useEffect, useState } from "react";
import "./Read.css";
import Button from "../Button/Button";
import axios from "axios";
import { Link } from "react-router-dom";
const Read = () => {
  const [data, setData] = useState([]);
  const [items, setItems] = useState([]);
  const [dataChange,setDataChange]=useState(false)
  const getData = async () => {
    await axios
      .get("https://6662e9a062966e20ef0a8f48.mockapi.io/crud-youtube")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => console.log(error));
  };
  const handleDelete = (id) => {
    axios
      .delete(`https://6662e9a062966e20ef0a8f48.mockapi.io/crud-youtube/${id}`)
      .then(() => getData());
  };
  const sendToLocalStorage = (id, name, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };

  useEffect(() => {
    getData();
  }, [dataChange]);
  const loadData=()=>{
    axios.post(`https://6662e9a062966e20ef0a8f48.mockapi.io/crud-youtube`,
      {
        "name": "JK",
        "email": "jk@gmail.com"
      }
    )
    setDataChange((prev)=>!prev)
  }
  return (
    <div className="table-container">
      <div className="title-container">
        <h1>Read Operation</h1>
        <div className="button-container">
          <Link to="/">
            <Button buttonName={"Create"} />
          </Link>
          <div onClick={loadData}>
            <Button buttonName={"Load Dummy Data"}/>
          </div>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((ele) => {
            return (
              <tr key={ele.id}>
                <th>{ele.id}</th>
                <td>{ele.name}</td>
                <td>{ele.email}</td>
                <td
                  onClick={() =>
                    sendToLocalStorage(ele.id, ele.name, ele.email)
                  }
                >
                  <Link to="/update">
                    <Button buttonName={"Edit"} />
                  </Link>
                </td>
                <td onClick={() => handleDelete(ele.id)}>
                  <Button buttonName={"Delete"} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Read;
