export const getUsuarioStorage = () => {
  return {
    agente: localStorage.getItem("agente") || null,
    escritorio: parseInt(localStorage.getItem("escritorio")) || null,
  };
};

export const clearUserStorage = () => {
  localStorage.removeItem("agente");
  localStorage.removeItem("escritorio");
};
