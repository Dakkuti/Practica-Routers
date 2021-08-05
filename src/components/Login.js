import React from 'react'
import { Navbar } from './Navbar';

import '../styles.css/Login.css';

export const Login = () => {
    return (
        <div>
        <Navbar/>
        <div id="content-contacto">
        <form id="contacto">
            <h1>Bienvenido</h1>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email </label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                <input type="password" class="form-control" id="exampleInputPassword1" />
            </div>
            <button type="submit" class="btn btn-primary">Ingresar</button>
        </form>
        </div>
        </div>
    )
}
