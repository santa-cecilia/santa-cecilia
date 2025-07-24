// src/hooks/useAuth.js
import { useEffect, useState } from 'react';

const USERS_KEY = 'usuarios';
const LOGGED_KEY = 'usuario_logado';

export const useAuth = () => {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem(LOGGED_KEY);
    if (data) setUsuario(JSON.parse(data));
  }, []);

  const login = (email, senha) => {
    const usuarios = JSON.parse(localStorage.getItem(USERS_KEY)) || [];
    const encontrado = usuarios.find(
      (u) => u.email === email && u.senha === senha
    );
    if (encontrado) {
      setUsuario(encontrado);
      localStorage.setItem(LOGGED_KEY, JSON.stringify(encontrado));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUsuario(null);
    localStorage.removeItem(LOGGED_KEY);
  };

  const cadastrar = (nome, email, senha) => {
    const usuarios = JSON.parse(localStorage.getItem(USERS_KEY)) || [];
    if (usuarios.some((u) => u.email === email)) return false;
    const novo = { nome, email, senha };
    usuarios.push(novo);
    localStorage.setItem(USERS_KEY, JSON.stringify(usuarios));
    return true;
  };

  const recuperarSenha = (email) => {
    const usuarios = JSON.parse(localStorage.getItem(USERS_KEY)) || [];
    const encontrado = usuarios.find((u) => u.email === email);
    return encontrado ? encontrado.senha : null;
  };

  return { usuario, login, logout, cadastrar, recuperarSenha };
};
