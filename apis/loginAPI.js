import axiosInstance from ".";

export const sendLoginRequest = async (id, pw) => {
  return axiosInstance.post("/login", { patient_id: id, password: pw });
};
