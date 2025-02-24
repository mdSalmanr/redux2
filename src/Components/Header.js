import classes from './Header.module.css';
import { useDispatch } from 'react-redux';
import { AuthAction } from '../Store/redux';
import { useSelector } from 'react-redux';

const Header = () => {
  const dispatch = useDispatch();
  const LogoutHandler=()=>{
    dispatch(AuthAction.logout())

  }
  const authe = useSelector(state=>state.auth.isAuthenticate);
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {authe &&
      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={LogoutHandler} >Logout</button>
          </li>
        </ul>
      </nav>}
    </header>
  );
};

export default Header;
