import { createBrowserRouter } from "react-router-dom";
import Posts from "../page/Posts/Posts";
import AddPost from "../page/AddPost/AddPost";
import ErrorPage from "../error-page";
import AppLayout from "../AppLayout";

export const router = createBrowserRouter([
	{
		element: <AppLayout/>,
		children: [
			{
				path:'/',
				element : <Posts/>,
				errorElement: <ErrorPage/>
			},
			{
				path:'addpost',
				element: <AddPost/>,
				errorElement: <ErrorPage/>
			}
		]
	}
	
])