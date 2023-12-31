import {
  Refine,
  GitHubBanner,
  WelcomePage,
  Authenticated,
} from "@refinedev/core";
 
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import {
  AuthPage,
  ErrorComponent,
  notificationProvider,
  ThemedLayoutV2,
} from "@refinedev/antd";
import "@refinedev/antd/dist/reset.css";

import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import routerBindings, {
  NavigateToResource,
  CatchAllNavigate,
  UnsavedChangesNotifier,
  DocumentTitleHandler,
} from "@refinedev/react-router-v6";
import dataProvider from "@refinedev/simple-rest";
import { ColorModeContextProvider } from "./contexts/color-mode";

import PostShow from "pages/posts/show";
import PostEdit from "pages/posts/edit";
import PostList from "pages/posts/list";
import PostCreate from "pages/posts/create";
import { TeamOutlined } from "@ant-design/icons";
import stream from "components/agent/stream";
import Home from "pages/Dashboard/home";


function App() {
  return (
    <BrowserRouter>
      {/* <GitHubBanner /> */}
      <RefineKbarProvider>
        <ColorModeContextProvider>
          <Refine
            notificationProvider={notificationProvider}
            routerProvider={routerBindings}
            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
            options={{
              syncWithLocation: true,
              warnWhenUnsavedChanges: true,
            }}
            resources={[
              {
                name: "dashboard",
                list: Home,
                
              
              
              },
              {
                name: "posts",
                list: PostList,
                show: PostShow,
                create: PostCreate,
                edit: PostEdit,
                canDelete:true,
              },
              {
                name: "Agent",
                list: stream,
                icon: <TeamOutlined />
              
              
              },
             
            ]}
          >
            {/* <Routes>
              <Route index element={<WelcomePage />} />
              <Route
                index
                element={<NavigateToResource resource="blog_posts" />}
              />
            </Routes> */}
            <Routes>
                        <Route
                            element={
                                <ThemedLayoutV2>
                                    <Outlet />
                                </ThemedLayoutV2>
                            }
                        >
                            <Route
                                index
                                element={
                                    <NavigateToResource resource="blog_posts" />
                                }
                            />
                            <Route path="dashboard">
                            <Route index element={ <Home/> } />
                            </Route>
                            <Route path="posts">
                                <Route index element={<PostList/> } />
                                <Route
                                    path="show/:id"
                                    element={<PostShow/>}
                                />
                                <Route
                                    path="edit/:id"
                                    element={<PostEdit/>}
                                />
                                <Route
                                    path="create"
                                    element={<PostCreate/>}
                                />
                            </Route>

                            <Route path="*" element={<ErrorComponent />} />
                        </Route>
                    </Routes>
            <RefineKbar />
            <UnsavedChangesNotifier />
            <DocumentTitleHandler />
          </Refine>
        </ColorModeContextProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
