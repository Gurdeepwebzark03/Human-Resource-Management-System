import API from "./api";

export const employeeLogin = async (credentials) => {
    const response = await API.post("/auth/employee/login", credentials);
    return response.data;
};

export const adminLogin = async (credentials) => {
    const response = await API.post("/auth/admin/login", credentials);
    return response.data;
};

export const logout = () => {
    localStorage.clear();
};