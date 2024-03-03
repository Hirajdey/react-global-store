import { useCallback, useState } from "react";
import { API } from "../const";

const useAddPosts = () => {
  const [response, setResponse] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
	
	interface payloadType {
		title: string,
		body: string,
		userId: number 
	}
	
  const handleAddPostsRequest = useCallback(async ({title, body, userId}:payloadType) => {
    setIsLoading(true);
    
    try{
      const res = await fetch(`${API.POSTS_ENDPOINT}`, {
				method:'POST',
				body: JSON.stringify({
					title,
					body,
					userId
				}),
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
				},
			});
      if(!res.ok){
        const message = await res.json();
        setError(message);
      }else{
        const data = await res.json();
        setResponse(data);
      }
    }catch(err){
      console.log("useAddPosts Error", err);
    } finally{
      setIsLoading(false);
    }
  },[])

  return { handleAddPostsRequest, isLoading, response, error }
}

export default useAddPosts;