import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Bitcoin from "pages/Bitcoin";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Bitcoin /> },
    { path: "*", element: <NotFound /> }
  ]);

  return element;
};

export default ProjectRoutes;
