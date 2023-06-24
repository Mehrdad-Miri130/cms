# Farzin CMS

## Run Client Project

### 1. `npm i`
### 2. `npm start`

<hr />

## Client Project Tools
1. Redux-toolkit (Global state management)
2. React-Query (Api Base Calls)
3. Antd Design (ui components)
4. Tailwind (Css Framework)
5. React Router (Route Management)

<hr />

## Client Project Routes

1. Route `/` : All Blogs that shows to login user or anonymous user
2. Route `/my-blog` : All own blogs that is login to site.
3. Route `/admin` : Manage All Blog by admin role.
4. Route `/single-blog/:blogId` : Show single blog.

<hr />

## Client Main Folders
1. core folder : contains utils and helpers and reusable hooks and types.
2. components : contains all components that we use in project
3. page : contains all routes that has a page in client
4. assets : contain css file

<hr />

## Client Main Components

1. `MainRoute.tsx` : Manage project route system and contains private route that depends on user roles
2. `Header.tsx` : Project Navbar
3. `MainLayout.tsx` : Project Main layout that is same for all routes
4. `MainPage.tsx` : Content of Route `/`
5. `AdminPage.tsx` : Content of Route `/admin`
6. `MyBlogPage.tsx` : Content of Route `/my-blog`
7. `SingleBlogPage.tsx` : Content of Route `/single-blog/:blogId`
