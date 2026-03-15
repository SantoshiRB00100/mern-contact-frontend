import axios from "axios";

const API_URL =  "http://localhost:3000/api/contact";

export const sendContact = async (data) =>{
    try{
        const response = await axios.post(API_URL,data);
        return response.data;
    } catch (error){
        console.error(error);
    }
};

