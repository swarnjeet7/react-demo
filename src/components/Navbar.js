import React from 'react';

const Navbar = (props) => {
    return (
        <header>
            <div className="container">
                <div className="row">
                    <h1>
                        NAVBAR 
                        <span className="badge badge-secondary m-4">{props.totalCart}</span>
                        <button className="btn btn-warning" onClick={()=> props.resetAll()}>
                            RESET
                        </button>
                    </h1>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
