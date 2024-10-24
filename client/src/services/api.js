import axios from 'axios';

// const API_URL = 'http://192.168.43.79:5000';
const API_URL = 'http://localhost:5000';
// const API_URL = 'https://personal-finance-dashboard-x1fy.onrender.com';

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/api/auth/register`, userData);
    return response;
  } catch (err) {
    if (err.response && err.response.status === 400) {
      return err.response;
    }
    throw err;
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/api/auth/login`, userData);
    return response;
  } catch (err) {
    if (err.response && err.response.status === 400) {
      return err.response;
    }
    throw err;
  }
};

export const getTransactions = async (type, category, startDate, endDate, token) => {
  const response = await axios.get(`${API_URL}/api/transactions`, {
    params: { type, category, startDate, endDate },
    headers: { Authorization: `Bearer ${token}` }
  });
  return response;
};

export const addTransaction = async (transactionData, token) => {
  const response = await axios.post(`${API_URL}/api/transactions/add`, transactionData, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response;
};

export const deleteTransaction = async (transactionId, token) => {
  const response = await axios.post(`${API_URL}/api/transactions/delete`, { transactionId }, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response;
};