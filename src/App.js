// Import everything needed to use the `useQuery` hook
import { useQuery, gql } from '@apollo/client';
import { getUsers, getUserMsg, addUser, addMsg } from './queries';
import DisplayUsers from './DisplayUsers';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';
import RouteList from './RouteList';


function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar></NavBar>
        <h2>My first Apollo app 🚀</h2>
        <RouteList></RouteList>
      </BrowserRouter>
    </div>
  );
}

export default App;
