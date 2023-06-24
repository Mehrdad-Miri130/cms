# Farzin CMS

# Server side

## Run Server Project

1. `cd server`
2. `npm install`
3. `nodemon index.js`

## API Server

### 1) Authentication

- POST `/api/sessions` (login function)
  - request parameters in body (email & password)
  - response body content if email and password is correct return (id,email,role) else API return a message (Incorrect username or password ) with status code 401.
- GET `/api/sessions/current` (user info)
  - request parameters in header (a valid Cookie)
  - response body content (if Cookie is valid API return (id,email,role) else API return an error with message (Not authenticated) with sstatus code 401.)
- DELETE `/api/sessions/current` (log out)
  - Response body content (API return empty content with status code 200)

### 2) Pages `for all without authentication`

- GET `/api/pages` (index page)
  - response body content, API returns all pages that have been published that contains (pageId,publishedAt,createdAt,authorId,authorEmail,title,image).
- GET `/api/pages/1`
  - request parameters in URL, id of the page in URL as a param
  - response body content (if page exist API return id,title,content,createdAt,publishedAt,author,image,orders,authorEmail)

### 3) Pages `for authenticated users`

- POST `/api/pages`
  - request parameters in body (title,publishedAt,content,image,orders) and in header a valid Cookie
  - response body content (Returns the stored ID if the cookie and request body are valid else return status code 401-unauthorized or 422-invalid body)
- PATCH `/api/pages/:id`
  - request parameters in body (title,publishedAt,content,image,orders) and id of the page in URL as a param and in header a valid Cookie
  - response body content (Returns the stored ID if the cookie and request body are valid else return status code 401-unauthorized or 422-invalid body), each user can update pages that owned by himself.
- DELETE `/api/pages/:id`
  - request parameters in header a valid Cookie and id of the page in URL as a param
  - response body content (API return with status code 200), each user can delete pages that owned by himself.

### 4) Pages `for admins`

- POST `/api/pages/by-admin`
  - request parameters in body (title,author,publishedAt,content,image,orders)
  - response body content (Returns the stored ID if the cookie and request body are valid else return status code 401-unauthorized or 401-permission deny or 422-invalid body)
- PATCH `/api/pages/by-admin/:id`
  - request parameters in body (title,author,publishedAt,content,image,orders) and id of the page in URL as a param and a valid cookie in header
  - response body content (Returns the stored ID if the cookie and request body are valid else return status code 401-unauthorized or 422-invalid body), each admin can update any pages.
- DELETE `/api/pages/by-admin/:id`
  - request parameters in header a valid Cookie and id of the page in URL as a param
  - response body content (API return with status code 200), each admin can delete any pages.

### 5) Pages `for authenticated users and admins`

- GET `/api/pages/my-blog`
  - request parameters in header a valid Cookie
  - response body content, contains all pages that owned the user.

### 6) Users `for admins`

- GET `/api/user`
  - request parameters in header a valid Cookie
  - response body content, contains all users info(email and id).

## Database Tables

- Table `user` - contains id,email,role,password,salt
- Table `pages` - contains id,title,createdAt,publishedAt,author,image,orders,content

## Run Client Project

1. `npm i`
2. `npm start`

## Client Project Tools

1. Redux-toolkit (Global state management)
2. React-Query (Api Base Calls)
3. Antd Design (ui components)
4. Tailwind (Css Framework)
5. React Router (Route Management)

## Client Project Routes

1. Route `/` : All Blogs that shows to login user or anonymous user
2. Route `/my-blog` : All own blogs that is login to site.
3. Route `/admin` : Manage All Blog by admin role.
4. Route `/single-blog/:blogId` : Show single blog.

## Client Main Folders

1. core folder : contains utils and helpers and reusable hooks and types.
2. components : contains all components that we use in project
3. page : contains all routes that has a page in client
4. assets : contain css file

## Client Main Components

1. `MainRoute.tsx` : Manage project route system and contains private route that depends on user roles
2. `Header.tsx` : Project Navbar
3. `MainLayout.tsx` : Project Main layout that is same for all routes
4. `MainPage.tsx` : Content of Route `/`
5. `AdminPage.tsx` : Content of Route `/admin`
6. `MyBlogPage.tsx` : Content of Route `/my-blog`
7. `SingleBlogPage.tsx` : Content of Route `/single-blog/:blogId`
