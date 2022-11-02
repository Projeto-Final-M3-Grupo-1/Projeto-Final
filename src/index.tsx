
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import { ProjectsProvider } from "./Providers/ProjectsProvider";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <BrowserRouter>
        <ProjectsProvider>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </ProjectsProvider>
    </BrowserRouter>
);

