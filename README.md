# My First React App

## Description
This project is the starting point of a responsive React-based layout. It includes a navigation bar, a sidebar for desktop/tablet view, a mobile/responsive menu (which combines the sidebar and navbar into a single hamburger menu) and a tag/categories component – built with reusable components and styled with CSS. The goal is to build a complete application layout that will be expanded further with more functionality and content.


## Structure
- `App.jsx` – The root component that defines the layout
- `main.jsx` – Renders the App component into the DOM
- `index.css` – Global and responsive CSS styling
- `assets/background-img.jpg` – The background image used in the app
- `assets/logo.jpg` – The image used in the sidebar
- `Components/Navbar/Navbar.jsx` – Navigation bar, includes mobile menu toggle
- `Components/Navbar/NavLinks.jsx` – Array of shared navigation links used in Navbar and MobileMenu
- `Components/Header/Header.jsx` – The header component
- `Components/PostList/PostList.jsx` – The main component for displaying a list of posts
- `Components/PostList/Post.jsx` – Part of the PostList, displays individual posts
- `Components/Reponsive/MobileMenu.jsx` – Responsive navigation menu for mobile view
- `Components/Sidebar/Sidebar.jsx` – A sidebar shown on desktop/tablet view only
- `Components/Sidebar/SidebarButton.jsx` – Reusable button component used in sidebar and mobile view
- `Components/TagList/TagList.jsx` – A component for displaying tags in the app, contains an array of tags
- `Components/TagList/TagButton.jsx` – Part of the TagList, contains the invidiual tag buttons


**Author:** Rebecka Johansson
