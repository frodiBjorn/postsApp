import PostIdPage from "../Pages/PostIdPage";
import Posts from "../Pages/Posts";
import About from "../Pages/About";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Login/Login";

export const privateRoutes = [
  {path: '/about', component: <About/>, exact: true},
  {path: '/error', component: <Error/>, exact: true},
  {path: '/posts', component: <Posts/>, exact: true},
  {path: '/posts/:id', component: <PostIdPage/>, exact: true},
  {path: '/login', component: <Posts/>, exact: true},
]

export const publicRoutes = [
  {path: '/login', component: <Login/>, exact: true},
];
