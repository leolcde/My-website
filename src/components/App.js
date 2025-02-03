import React from "react"
import './App.css';

export default function Example() {
    return (
      <>
        <div>
          <div>
            <h2 className="Title">
              Login to your account
            </h2>
          </div>
          <div className="Login_div">
            <form>
              <div>
                <label htmlFor="email">
                  Email address
                </label>
                <div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                  />
                </div>
              </div>
              <div>
                <div>
                  <label>
                    Password
                  </label>
                  <div>
                    <a href="#">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                  />
                </div>
              </div>

              <div>
                <button type="submit">
                  Login in
                </button>
              </div>
            </form>
            <p>
              Not a member?{' '}
              <a href="#">
                Sign in...
              </a>
            </p>
          </div>
        </div>
      </>
    )
  }
