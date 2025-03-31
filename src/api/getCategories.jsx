import axios from "axios";
const baseURL="https://api.escuelajs.co/api/v1";
export  const getAllCategories=async ()=>{
    const url=`${baseURL}/categories`;
    try 
    {
        const {data}=await axios.get(url);
        // console.log(response);
        return data;
    }
    catch(error)
    {
        console.log("Error occured");
        return error;
    }
}
