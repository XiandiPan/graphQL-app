import { useQuery, gql } from '@apollo/client';
import {getUsers,getUserMsg,addUser,addMsg} from './queries';



function DisplayUsers() {
  const { loading, error, data } = useQuery(getUsers());
  console.log("data====", data)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.users.map(({ username, first_name, last_name}) => (
    <div key={username}>
      <h3>{username}</h3>
      <p>{first_name} {last_name}</p>

    </div>
  ));
}


export default DisplayUsers;