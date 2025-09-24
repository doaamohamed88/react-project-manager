import { Children } from "react";
import Layout from "./Layout";
import TaskDetails from "./components/TaskDetails";
import { useRoutes } from "react-router-dom";
import NoProjects from "./components/NoProjects";
import Project from "./components/Project";

const AppRoutes = () => {
  const routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <NoProjects/> },
        { path: "details", element: <TaskDetails /> },
        { path: "project/:id", element: <Project /> },
        
      ],
    },
  ];
  return useRoutes(routes);
};
export default AppRoutes;
