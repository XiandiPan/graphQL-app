import React,{useState} from "react";
import UserMessages from "./UserMessages";
import { useNavigate, useNavigationType } from "react-router-dom";

function UserMessagesForm() {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  /** Update form input. */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value,
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    navigate(`/messages/${formData.username}`)
  }


  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:
        <input id="username" name="username" onChange={handleChange}></input>
      </label>
      <button>Search</button>
    </form>
  );
}

export default UserMessagesForm;