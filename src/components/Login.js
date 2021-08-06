import React, { Component } from "react";
import axios from "axios";
import md5 from "md5";
import { Link } from "react-router-dom";

import { Navbar } from "./Navbar";
import "../styles/Login.css";

const baseUrl = "https://movies-geek.herokuapp.com/usuario";

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      form: {
        username: "",
        password: "",
      },
    };
  }

  handleChange = async (e) => {
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  iniciarSesion = async () => {
    await axios
      .get(baseUrl, {
        params: {
          username: this.state.form.username,
          password: md5(this.state.form.password),
        },
      })
      .then((response) => {
        return response.data;
      })
      .then((response) => {
        if (response.length > 0) {
          var respuesta = response[0];
          alert(`Bienvenido ${respuesta.nombre} ${respuesta.apellido_paterno}`);
          this.props.history.push("/Heroes");
        } else {
          alert("El usuario o la contraseña no son correctos");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleSutmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <Navbar />
        <div id="content-contacto">
          <h1>Bienvenido</h1>
          <form id="contacto" onSubmit={this.handleSutmit}>
            <div className="mb-3">
              <label htmlFor="InputEmail1" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="InputEmail1"
                name="username"
                aria-describedby="emailHelp"
                onChange={this.handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="InputPassword" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                className="form-control"
                id="InputPassword"
                name="password"
                onChange={this.handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary"
            onClick={this.iniciarSesion}>
              Ingresar
            </button>
            <Link
                to="/"
                className="link mx-auto mt-4 text-white "
            >
                Aún no te has registrado?
            </Link>
          </form>
        </div>
      </div>
    );
  }
}
