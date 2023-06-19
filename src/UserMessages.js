import React from "react";
import {getUserMsg} from "./queries"
import { useQuery,  } from '@apollo/client';
import { useParams } from "react-router-dom";

function UserMessages(){
  const {username} = useParams();
  const { loading, error, data } = useQuery(getUserMsg(username));
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
      <h3>{data.user.username}'s Messages:</h3>
      {data.user.messages.map(message => <div key={message.id}>{message.body}</div>)}
    </div>
  )
}
export default UserMessages;