import React, { useContext } from 'react'
import './Login.css'
import user from '../../img/undraw_Male_avatar_re_y880.png'
import login from "../../img/undraw_Complete_design_re_h75h.png";
import { loginContext } from "../../App";
import { Link } from 'react-router-dom'
import Home from '../Home/Home';


function Login() {
  const logged = useContext(loginContext);
  const handelSubmit = (event) => {
    logged.setLogged(true)
    event.preventDefault()
  }
  return (
    <>
      {logged.logged ? (
        <Home />
      ) : (
        <div className="Login">
          <div className="container row justify-content-center gap-5 align-items-center">
            <form onSubmit={handelSubmit} className="col-md-5 col-10">
              <img src={user} alt="user" className="userImg" />
              <input
                onKeyUp={(event) => {
                  window.localStorage.user = event.target.value;
                }}
                id="email"
                type="email"
                required
                placeholder="Email"
              />
              <input
                onKeyUp={(event) => {
                  window.localStorage.pass = event.target.value;
                }}
                id="pass"
                type="password"
                required
                placeholder="Password"
              />
              <input
                // onClick={handelSubmit}
                as={Link}
                to="/cart"
                id=""
                type="submit"
                value="submit"
                className="submit"
              />
            </form>
            <div className="col-md-5 d-md-block d-none col-10">
              <img
                className="img-fluid logImg"
                src={login}
                alt="loginPicture"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Login