import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [user, setUser] = useState({ name: "", email: "" });
  const [data, setData] = useState([]);

  const handleChange = (e, field) => {
    const value = e.target.value.trim(); // Trim whitespace
    if (value === "") {
      return;
    }
    setUser({ ...user, [field]: value });
  };

  const handleAddContact = (e) => {
    e.preventDefault();
    if (user.name === "" || user.email === "") {
      return;
    }
    setData([...data, user]);
    setUser({ name: "", email: "" });
  };

  useEffect(() => {
    console.log(data); // Log data whenever it changes
  }, [data]);

  const deleteUser = (userToDelete) => {
    const updatedData = data.filter((user) => user !== userToDelete);
    setData(updatedData);
  };

  return (
    <form onSubmit={handleAddContact}>
      <div className="container">
        <div className="title">
          <p>Contact Manager</p>
        </div>
        <div className="wrapper">
          <input
            type="text"
            placeholder="Name"
            value={user.name}
            required
            className="input-field"
            onChange={(e) => handleChange(e, "name")}
          />
          <input
            type="email"
            placeholder="E-mail"
            value={user.email}
            required
            className="input-field"
            onChange={(e) => handleChange(e, "email")}
          />
          <button type="submit" className="button-54">
            Add
          </button>
        </div>
        <div className="user-list">
          {data.map((user) => (
            <div
              className="user-box"
              key={`${user.name}-${user.email}-${Math.random()}`}
            >
              <div>
                <hr className="separator" />
                <p className="user-info">Name : {user.name}</p>
                <p className="user-info">Email id: {user.email}</p>
              </div>
              <button
                onClick={() => deleteUser(user)}
                className="delete-button"
              >
                remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </form>
  );
};

export default App;
