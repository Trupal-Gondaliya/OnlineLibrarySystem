React Online Library System

This project is an online library system built using React and Vite. It includes browsing, filtering, adding books using Redux, dynamic routing, and a 404 page.

FEATURES

# Home Page
- Displays welcome message
- Shows book categories
- Shows popular books in card format
- Navigation bar includes Home, Browse Books, and Add Book

# Browse Books Page
- Displays list of all books
- Filter books by category
- Supports dynamic routing using : /bookDetails/:id
- Search books by title or author
- Each book has a View Details button

# Book Details Page
- Dynamic route for each book
- Shows title, author, description, and rating
- Back to Browse button

# Add Book Page
- Form to add a new book
- Uses Redux for managing book list
- Newly added book appears at the top
- Form validation included
- After submit, user is redirected to Browse Books page

# 404 Page
- Shown for invalid URLs
- Displays invalid route text
- Header not included on this page
- Contains a link to go back to Home

# Styling
- Styled using Tailwind CSS
- Fully responsive and user-friendly

# TECH STACK
- React
- Vite
- Redux Toolkit
- React Router DOM
- Tailwind CSS

# INSTALLATION & SETUP

1. Clone the repository:
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name

2. Install  All Dependencies:
    npm install
    (This will automatically install All These Dependencies which required to this app.)

3. Setup Tailwind CSS
    npm install tailwindcss @tailwindcss/vite

4. Run the project:
    npm run dev

# FOLDER STRUCTURE
src/
    assets/
    components/
    redux/
utils/
App.jsx
main.jsx