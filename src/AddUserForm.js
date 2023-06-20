import { ADD_USER } from "./queries";
import React, { useState } from "react";
import { useMutation, gql } from '@apollo/client';



const INIT_FORM_DATA = {
  username: "",
    firstName: "",
    lastName: ""
}


function AddUserForm() {

  const [formData, setFormData] = useState(INIT_FORM_DATA);
  const [createUser, { data, loading, error }] = useMutation(ADD_USER);
 

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  function handleSubmit(evt) {
    console.log("formData===", formData)
    evt.preventDefault();
    createUser({
      variables:
      {
        username: formData.username,
        first_name: formData.firstName,
        last_name: formData.lastName
      }
    });
    setFormData(INIT_FORM_DATA)

  }


  /** Handle form data changing */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(f => ({
      ...f,
      [name]: value,
    }));

  }

  return (
    <div className="ProfileForm col-md-6 col-lg-4 offset-md-3 offset-lg-4">
      <h3>Add User Form</h3>
      <div className="card">
        <div className="card-body">
          <form>
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
              name="username"
                className="form-control"
                placeholder={formData.username}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">First Name</label>
              <input
                name="firstName"
                className="form-control"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Last Name</label>
              <input
                name="lastName"
                className="form-control"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>


            <div className="d-grid">
              <button className="btn btn-primary" onClick={handleSubmit}>
                Save Changes
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default AddUserForm;

