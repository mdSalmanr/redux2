import classes from './Auth.module.css';
import { useDispatch } from 'react-redux';
import{AuthAction} from "../Store/redux"

const Auth = () => {
  const disatch =  useDispatch();
  const LoginHandler  = (e)=>{
    e.preventDefault();
    disatch(AuthAction.login());


  }



  return (
    <main className={classes.auth}>
      <section>
        <form  onSubmit ={LoginHandler} >
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
