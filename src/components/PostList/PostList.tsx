import { memo } from "react";
import { useAppContext } from "../../store/AppContextProvider/AppContextProvider";

// Styles
import Styles from './PostList.module.scss'

const PostList = () => {
	const { state } = useAppContext();
	
  return (
    <div>
			<h1>Post Count : {state.posts.length}</h1>
			{state.posts.map((item) => (
				<div key={item.id} className={Styles.posts}>
					<h2>{item.title}</h2>
					<p>{item.body}</p>
				</div>
			))}
		</div>
  )
}

export default memo(PostList);