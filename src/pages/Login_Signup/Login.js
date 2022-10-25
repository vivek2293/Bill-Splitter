import React, { useState } from "react";
import axios from "axios";
import "../../styles/login.css";

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [valid, setValid] = useState("d-none");

  const submit = () => {
    const info = { email, password };
    const url =
      "https://bill-splitter-backend-iiits.herokuapp.com/api/v1/login";

    const PostInfo = async () => {
      await axios
        .post(url, info)
        .then(() => {
          setValid("d-none");
          window.alert("Success");
        })
        .catch((e) => {
          if (e.response.status === 401) {
            setValid("d-inline-block");
          }
        });
    };

    PostInfo();
  };

  return (
    <>
      <section
        className="d-flex justify-content-center align-items-center p-3"
        id="customsection"
      >
        <div className="card card-body px-4 px-lg-5" id="customcard">
          <div>
            <center>
              <h2>Login</h2>
            </center>
          </div>
          <hr />
          <div>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="name"
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                  placeholder="johndoe@example.com"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="email"
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
                  placeholder="Password"
                  required
                />
              </div>
              <div className={`${valid} invalid-feedback`}>
                Invalid UserName or Password!!!
              </div>
              <div className="d-flex justify-content-center p-3">
                <button
                  type="submit"
                  className="btn btn-outline-success"
                  id="customBtn"
                  onClick={submit}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;