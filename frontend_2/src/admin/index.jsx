import React from "react"
import { Outlet } from "react-router-dom"


const Index = () => {
    const logout = () => {
        localStorage.clear ()
        window.location.href = "/"
    }
    if (localStorage.getItem('token') != null) {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-link " href="/admin/home">Home</a>
                                <a className="nav-link" href="/admin/user">User</a>
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

        )
    }

}

export default Index