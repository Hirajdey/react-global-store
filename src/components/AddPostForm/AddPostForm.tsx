import { ChangeEvent, useEffect, useState } from "react";
import useAddPosts from "../../services/hooks/useAddPosts";
import { useAppContext } from "../../store/AppContextProvider/AppContextProvider";

interface formInputsType {
	title: string,
	body: string
}

const AddPostForm = () => {
	const { state, dispatch } = useAppContext();
	const {response, isLoading, error , handleAddPostsRequest} = useAddPosts();
	const [inputData, setInputData] = useState<formInputsType>({title:'', body:''});
	const handleOnChangeInput = (event:ChangeEvent<HTMLInputElement>) => {
		const names = event.target.name;
		const values = event.target.value;
		setInputData((prevData) => ({
			...prevData,
			[names]: values
		}));
	}

	const checkIsEmpty = () => {
		if((inputData.body !== "") && (inputData.title !== "")){
			return false
		}else{
			return true
		}
	}

	const handleAddPost = () => {
		handleAddPostsRequest({
			title: inputData.title,
			body: inputData.body,
			userId: 1020
		})
	}

	useEffect(() => {
		if(response){
			dispatch({type:"ADD_POST", payload: response})
		}
	},[response]);

  return (
    <div>
    	<h1>Add Posts</h1>
			<input name='title' type="text" value={inputData.title} onChange={(e) => handleOnChangeInput(e)}/>
			<input name='body' type="text" value={inputData.body} onChange={(e) => handleOnChangeInput(e)}/>
			<button onClick={handleAddPost} disabled={checkIsEmpty()}>Add Post</button>
			<p>{isLoading && <>Loading...</>}</p>
			
    </div>
  )
}

export default AddPostForm;