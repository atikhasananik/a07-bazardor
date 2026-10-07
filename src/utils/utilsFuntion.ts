export const getDate = () => {
  return new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });
};
