import axios from "axios";
const baseURL="https://api.escuelajs.co/api/v1";
export const getAllProducts=async ()=>{
const url=`${baseURL}/products`;
try{
    const {data}=await axios.get(url);
    console.log(data);
    return data;

}
catch(error)
{
    console.log("error occured");
    return error;
}
}


