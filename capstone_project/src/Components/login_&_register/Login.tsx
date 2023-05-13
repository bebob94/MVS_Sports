import { useRef, useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../api/context/AuthProvider";
import axios from "../api/axios";
import { useDispatch } from "react-redux";
import { USER } from "../../Redux/ActionType";
const LOGIN_URL = "/api/auth/login";

const Login = () => {
  const { setAuth }: any = useContext(AuthContext);
  const userRef = useRef<HTMLInputElement>(null);
  const errRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current?.focus();
  }, []);
  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  useEffect(() => {
    if (success) {
      navigate("/");
      setSuccess(false);
    }
  }, [success]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ username: user, password: pwd }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      const id = response?.data?.id;
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ id, user, pwd, roles, accessToken });
      dispatch({
        type: USER,
        payload: { id, username: user, accessToken, roles },
      });

      setUser("");
      setPwd("");
      setSuccess(true);
    } catch (error: any) {
      setErrMsg(error?.response?.data.message);
      errRef.current?.focus();
    }
  };

  return (
    <div className="MyContainer myRegister">
      {success ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
          <p>
            <Link to={"/"} className="MyLink2">
              Go to Home
            </Link>
          </p>
        </section>
      ) : (
        <section>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
            <button disabled={!user || !pwd ? true : false}>Sign In</button>
          </form>
          <p>
            Need an Account?
            <br />
            <span className="line">
              <Link to={"/register"} className="MyLink2">
                Sign Up
              </Link>
            </span>
          </p>
        </section>
      )}
    </div>
  );
};

export default Login;
