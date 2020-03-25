import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

import logoImg from "../../assets/logo.svg";
import { FiArrowLeft } from "react-icons/fi";

export default function Register() {
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Cadastro</h1>

          <p>
            Faça o seu cadastro, entre na plataforma e ajude as pessoas a
            encontrarem os casos da sua ONG
          </p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para o Logon
          </Link>
        </section>

        <form action="">
          <input placeholder="Nome da ONG" />
          <input type="email" placeholder="E-mail" />
          <input placeholder="WhatsApp" />

          <div className="input-group">
            <input placeholder="Cidade" />
            <input placeholder="UF" style={{ width: 80 }} />
          </div>

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
