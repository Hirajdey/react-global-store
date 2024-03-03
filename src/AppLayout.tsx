import { Link, Outlet } from 'react-router-dom';
import { useAppContext } from './store/AppContextProvider/AppContextProvider';

// Styles 
import "./App.css";

function AppLayout() {
  const { state } = useAppContext();
  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to={'/'}>Posts List (Count : {state.posts.length} )</Link></li>
          <li><Link to={'/addpost'}>Add Post</Link></li>
        </ul>
      </nav>
      <Outlet/>
    </div>
  );
}

export default AppLayout;
