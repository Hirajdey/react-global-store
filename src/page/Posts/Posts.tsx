import { memo, useCallback, useEffect } from 'react'
import PostList from '../../components/PostList/PostList'
import { useAppContext } from '../../store/AppContextProvider/AppContextProvider';
import useGetAllPosts from '../../services/hooks/useGetAllPosts';
import { Link } from 'react-router-dom';

const Posts = () => {
  const {state, dispatch } = useAppContext();
	const { isLoading, error, response, handleGetAllPostsRequest} = useGetAllPosts(); 
	
	useEffect(() => {
		if(state.posts.length === 0){
			handleGetAllPostsRequest();	
		}
	},[]);

	useEffect(()=> {
		if(response){
			dispatch({type:'SET_POST', payload: response})
		}
	},[response, dispatch]);
  return (
    <>
      <PostList/>
    </>
  )
}

export default memo(Posts)