import React, {useEffect, useState} from 'react'
import './Navbar.css'

function Navbar() {

    const[show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                handleShow(true);
            }else handleShow(false);
        });
        return() => {
            window.removeEventListener("scroll");
        };
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
                className="nav__logo"
                src="https://lh3.googleusercontent.com/proxy/iYfxdDHRfYVMGHHBJVBAZEoG7LM2yEfkToLrzfypRDJoMJsf-iq9PatPlK8s7uloEF27duxFEHb2xcc5efqNNfdzUb6q1QS_z3F6ky_M88LmK5GjlIU"
                alt="Netflix Logo"
            />
        </div>
    )
}

export default Navbar
