# CutLink - URL Shortener System

CutLink is a full-stack URL shortener application that allows users to shorten URLs and manage them through a web interface. The system includes a **React frontend** and a **Node.js/Express backend**.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Setup Instructions](#setup-instructions)
  - [Backend Setup (Node.js)](#backend-setup-nodejs)
  - [Frontend Setup (React)](#frontend-setup-react)
- [Environment Variables](#environment-variables)

---

## Features

- **Shorten URLs**: Users can input a long URL and get a shortened version.
- **Redirection**: Users can visit the shortened URL and get redirected to the original URL.
- **View All Shortened URLs**: Users can view all previously shortened URLs.
- **Delete URLs**: Users can delete a shortened URL.
- **Responsive Web Interface**: Built using React, the web interface is easy to use and responsive.

---

## Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: React.js (Create React App)
- **Database**: In-memory (URL mapping stored in memory)
- **API**: REST API for URL shortening, retrieval, and deletion

---

## Prerequisites

Make sure you have the following installed:

- **Node.js** (v12.x or later)
- **npm** (Node Package Manager)
- **React** (via Create React App)

---

## Setup Instructions

### Backend Setup (Node.js)

1. **Clone the repository**:
   ```bash
   git clone https://github.com/wasimhakim/cutlink.git
   cd cutlink
2. **Navigate to the server directory**:
   ```bash
   cd server
3. **Install backend dependencies**:
   ```bash
   npm install
4. **Start the backend server**:
   ```bash
   nodemon index.js

The backend will run on http://localhost:3000

### Frontend Setup (React)

1. **Navigate to the client directory**:
   ```bash
   cd client
3. **Install frontend dependencies**:
   ```bash
   npm install
4. **Start the frontend server**:
   ```bash
   npm start

The frontend will run on http://localhost:5000

## Environment Variables

The .env file in the frontend allows you to configure the API URL. Here’s an example:
   ```bash
   REACT_APP_API_URL=http://localhost:3000