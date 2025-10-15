import axiosInstance from "./axioxInstance";

async function getBooks () {
    try{
        const response = await axiosInstance.get("/books");
        return response.data; 
    }
    catch(error){
        console.error("Error fetching books", error);
    }
}

export default getBooks