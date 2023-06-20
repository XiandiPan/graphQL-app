import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import DisplayUsers from "./DisplayUsers";
import UserMessages from "./UserMessages";
import AddUser from "./AddUser";
import AddMessage from "./AddMessage";
import UserMessagesForm from "./UserMessagesForm";
import AddUserForm from "./AddUserForm";

/**
 * Component for RouteList
 *
 * Props:
 *
 *
 * App -> RoutesList ->
 */
function RouteList() {


  return (
    <Routes className="Routes">
      <Route path="/" element={<DisplayUsers />} />
      <Route path="/messages" element={<UserMessagesForm/>}></Route>
      <Route path="/messages/:username" element={<UserMessages/>}></Route>
      <Route path="/addUser" element={<AddUserForm  />}/>
      <Route path="/addMessage" element={<AddMessage  />}/>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );

}

export default RouteList;