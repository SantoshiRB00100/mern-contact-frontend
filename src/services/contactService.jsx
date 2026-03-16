import axios from "axios";

const API_URL = "https://mern-contact-backend-w929.onrender.com/api/contact";

export const sendContact = async (data) =>{
    const response = await axios.post(API_URL,data);
    return response.data;
};
