import { useState, useCallback, useContext } from "react";
import SecurityProvider from "providers/SecurityProvider";
import loginService from "services/login";
import getUserByParam from "services/getUserByParam";
import registerService from "services/register";

export default function useSecurity() {
  /* Provider User */
  const { token, setToken, idUser, setIdUser, userName } =
    useContext(SecurityProvider);
  /* Estado del useUser */
  const [state, setState] = useState({
    loading: false,
    error: false,
    success: false,
    msg: "",
  });

  /* LOGIN */
  const login = useCallback(
    async ({ email, password }) => {
      setState({ loading: true, error: false, msg: "" });
      const { status, result } = await loginService({ email, password });
      if (status === "error") {
        setState({ loading: false, error: true, msg: result.error_msg });
        window.sessionStorage.removeItem("token");
        window.sessionStorage.removeItem("id");
      } else {
        setState({ loading: false, error: false, msg: "" });
        window.sessionStorage.setItem("token", result.token);
        window.sessionStorage.setItem("id", result.id);
        setIdUser(String(result.id));
        setToken(result.token);
      }
    },
    [setToken, setIdUser]
  );

  /* REGISTER */
  const register = useCallback(
    async ({ nombre, apellido, email, password }) => {
      setState({ loading: true, error: false, msg: "" });
      const { status, result } = await registerService({
        name: nombre,
        lastname: apellido,
        email,
        password,
      });
      if (status === "error") {
        setState({
          loading: false,
          error: true,
          msg: result.error_msg,
          success: false,
        });
      } else {
        setState({
          loading: false,
          error: false,
          msg: "Has sido Registrado!",
          success: true,
        });
        setIdUser(String(result.id));
      }
    },
    [setIdUser]
  );

  /* LOGOUT */
  const logout = useCallback(() => {
    window.sessionStorage.removeItem("token");
    window.sessionStorage.removeItem("id");
    setToken(null);
    setIdUser(null);
  }, [setToken, setIdUser]);

  /* INFO USER   */
  const getUser = useCallback(
    async ({ value, searchBy }) => {
      const res = await getUserByParam({ token, value, searchBy });
      return res[0];
    },
    [token]
  );

  return {
    isLogin: !!token /* Si esta logeado */,
    isLoading: state.loading /* Si esta cargando */,
    errorLogin: state.error /* Si ha habido un error */,
    isRegister: state.success /* Ha sido registrado */,
    msg: state.msg /* El tipo de mensaje */,
    idUser /* Id del usuario registrado */,
    userName,
    login,
    register,
    logout,
    getUser,
  };
}
