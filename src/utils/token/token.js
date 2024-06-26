export const isloggedIn = () => {
    return (
      !!localStorage.getItem("ACCESS_TOKEN_CHITRAKOOT") &&
      !!localStorage.getItem("email")
    );
  };
  
  export const logout = () => {
    var deviceId = localStorage.getItem("deviceId");
    localStorage.removeItem("email");
    localStorage.removeItem("name");
    localStorage.removeItem("ACCESS_TOKEN_CHITRAKOOT");
    localStorage.removeItem("user_id");
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };
  export const getRolesId = () => {
    return localStorage.getItem("roles");
  };
  