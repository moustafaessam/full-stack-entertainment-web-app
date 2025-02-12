# Full-Stack Entertainment Web App

## Overview

This project is a full-stack entertainment web application that allows users to explore movies and TV series. Users can search for content, view trending and recommended titles, and bookmark their favorite movies or TV shows. The application is built with a modern stack including React, Styled Components, React Query, and Supabase for backend services, authentication, and database management.

## Features

- **Authentication:**

  - Users can sign up and log in using email and password.
  - A confirmation email is sent during sign-up.
  - Only authenticated users can access protected routes (e.g., the Home page).

- **Pages:**

  - **Home:**  
    Displays trending content and recommendations for movies and TV series.
  - **Movies:**  
    Lists popular movies and includes a search functionality to filter movies.
  - **TV-Series:**  
    Shows a list of TV series with search functionality.
  - **Bookmarks:**  
    Displays a list of movies and TV series that the user has bookmarked.

- **Search Functionality:**  
  Each page provides a search feature, allowing users to search for movies or TV series in real-time.

- **Bookmark Persistence:**  
  Bookmarked items are stored in the Supabase database and are retrieved on page load, ensuring that users see their saved bookmarks even after refreshing the page.

- **Database & Access Control:**
  - Supabase is used as the backend and database service.
  - Database tables and logic are created with row-level security (RLS) to ensure that users can only access their own data.
- **Modern UI and State Management:**
  - **Styled Components** are used for component-level styling.
  - **React Query** handles data fetching, caching, and asynchronous mutations efficiently.

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **Styled Components:** For writing CSS in JavaScript and styling components.
- **React Query:** For data fetching, caching, and state management of asynchronous requests.
- **Supabase:** Provides backend-as-a-service with PostgreSQL, authentication, real-time data, and more.
- **PostgreSQL:** The relational database used by Supabase.
- **React Router:** For routing and navigation between different pages.

## Project Structure

- **Authentication:**  
  A dedicated authentication page allows users to sign up or log in. Upon signing up, a confirmation email is sent, and users are redirected to the Home page after a successful login.

- **Home Page:**  
  Shows a list of trending and recommended movies/TV series. It also includes a search bar to filter content.

- **Movies and TV-Series Pages:**  
  Separate pages display lists of movies or TV series with individual search functionality.

- **Bookmarks Page:**  
  Users can bookmark movies or TV series they like, and these bookmarks persist in the database and are displayed on a dedicated bookmarks page.

## Installation and Setup

1. **Clone the Repository:**

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the website on your device**

   ```bash
   npm run dev


   ```

**Can View the website live in the link below**

[https://full-stack-entertainment-web.netlify.app/log-in](https://full-stack-entertainment-web.netlify.app/)
