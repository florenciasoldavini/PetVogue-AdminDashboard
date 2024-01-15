import { setLogout } from "../../slices/loginSlice";

const logout = () => {
  return (dispatch) => {
    // Puedes realizar cualquier lógica de logout necesaria aquí.
    // Por ejemplo, limpiar el estado o realizar alguna llamada al servidor para cerrar la sesión.

    // Despachar la acción de logout para limpiar el estado
    dispatch(setLogout());
  };
};

export default logout;
