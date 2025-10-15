import axiosInstance from "./axioxInstance";

async function getPodcast(){
    try{
        const response = await axiosInstance.get("/podcast");
        return response.data; 
    }
    catch(error){
        console.error("Error fetching podcast", error);
    }
}

export default getPodcast