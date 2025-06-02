import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const Index = () => {
  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  if (localStorage.getItem("token") != null) {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <NavLink
                  to="/admin/home"
                  className={({ isActive }) =>
                    isActive ? "nav-link fw-bold text-dark" : "nav-link"
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/admin/user"
                  className={({ isActive }) =>
                    isActive ? "nav-link fw-bold text-dark" : "nav-link"
                  }
                >
                  User
                </NavLink>
              </div>
            </div>
            <span className="d-flex">
                            <button 
                            onClick={logout} href="/login" className="btn btn-primary">
                            <a className="nav-link active" href="/login">Logout</a>
                            </button>
                        </span>
          </div>
        </nav>

        <div className="container mt-2">
          <div className="row">
            <div className="col">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    );
  } else {

    window.location.href = "/";
    return null;
  }
};

export default Index;
