import AddPostForm from "../../components/AddPostForm/AddPostForm";
import { useAppContext } from "../../store/AppContextProvider/AppContextProvider";

const AddPost = () => {
	const {state} = useAppContext();
	const filteredData = state.posts.filter((item)=> item.userId === 1020); 
	
  return (
    <div>
    	<AddPostForm/>
			{filteredData.map((item,index) => (
				<div key={index}>
					<h2>{item.title}</h2>
					<p>{item.body}</p>
				</div>
			))}
    </div>
  )
}

export default AddPost;