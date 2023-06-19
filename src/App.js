// Import everything needed to use the `useQuery` hook
import { useQuery, gql } from '@apollo/client';
import {getUsers,getUserMsg,addUser,addMsg} from './queries';
import DisplayUsers from './DisplayUsers';



function App() {
  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
      < DisplayUsers />
    </div>
  );
}

export default App;
