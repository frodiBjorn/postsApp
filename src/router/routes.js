import PostIdPage from "../Pages/PostIdPage";
import Posts from "../Pages/Posts";
import About from "../Pages/About";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Login/Login";

export const privateRoutes = [
  {path: 'postsApp/about', component: <About/>, exact: true},
  {path: 'postsApp/error', component: <Error/>, exact: true},
  {path: 'postsApp/posts', component: <Posts/>, exact: true},
  {path: 'postsApp/posts/:id', component: <PostIdPage/>, exact: true},
  {path: 'postsApp/login', component: <Posts/>, exact: true},
  {path: 'postsApp/*', component: <Error/>, exact: true},
]

export const publicRoutes = [
  {path: 'postsApp/login', component: <Login/>, exact: true},
];
