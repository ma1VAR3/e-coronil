import React from 'react'

const MyNav =()=>{
    return(
        <nav className="navbar navbar-expand  bg-danger">
            <div className="container">
                <a className="navbar-brand" href="#">E-Coronil.</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link" href="/home">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/help">Help<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/Updates">Updates<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/Info">Info<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/Stats">Stats<span className="sr-only">(current)</span></a>
                    </li>
                    
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default MyNav;