import React from 'react'
import { Navbar } from './Navbar';

import '../styles/Login.css';

export const Login = () => {
    return (
        <div>
        <Navbar/>
        <div id="content-contacto">
            <h1>Bienvenido</h1>
            <form id="contacto">
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email </label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary">Ingresar</button>
            </form>
        </div>
        </div>
    )
}
