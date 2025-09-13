import { useState } from "react";
import { loginAdmin } from "./api";

import css from "./login.module.css";

const AdminLogin = () => {
  const [authData, setAuthData] = useState({
    user: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    const result = await loginAdmin(authData);
    console.log(authData)
    if (result.success) {
      console.log(result)
    } else {
      console.log(result.message || "Error al iniciar sesión");
    }
  };
  return (
    <div className={css.container}>
      <div className={css.imgContainer}>
        <img src="/logo/logo2.svg" />
        <h1>Admin</h1>
      </div>
      <form className={css.form} onSubmit={(e) => handleLogin(e)}>
        <div>
          <label htmlFor="user">Usuario</label>
          <input
            type="text"
            name="user"
            id="user"
            placeholder="Usuario"
            value={authData.user}
            onChange={(e) =>
              setAuthData((prev) => ({ ...prev, user: e.target.value }))
            }
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            name="password"
            id="password"
            value={authData.password}
            placeholder="Contraseña"
            onChange={(e) =>
              setAuthData((prev) => ({ ...prev, password: e.target.value }))
            }
          />
        </div>
        <div className={css.button}>
          <button type="submit">Entrar</button>
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
