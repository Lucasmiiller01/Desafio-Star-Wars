import api from "./api";

export const getById = id => {
  return api.get(`planets/${id}`);
};
