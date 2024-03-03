import { useCallback, useState } from "react";
import { API } from "../const";

const useGetAllPosts = () => {
  const [response, setResponse] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  
  const handleGetAllPostsRequest = useCallback(async () => {
    setIsLoading(true);
    
    try{
      const res = await fetch(`${API.POSTS_ENDPOINT}`);
      if(!res.ok){
        const message = await res.json();
        setError(message);
      }else{
        const data = await res.json();
        setResponse(data);
      }
    }catch(err){
      console.log("useGetALlPosts Error", err);
    } finally{
      setIsLoading(false);
    }
  },[])

  return { handleGetAllPostsRequest, isLoading, response, error }
}

export default useGetAllPosts;