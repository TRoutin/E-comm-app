# E-commerce Web App

This is a simple e-commerce web application built with React, Node.js, Express, and PostgreSQL.
Here is the link to check the app : [https://e-comm-app-nu.vercel.app/](https://e-comm-app-nu.vercel.app/)

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Issues I got](#issues-i-got)
- [Original Plan](#original-plan-vs-current-state)
## Features

- Browse products by category
- Add products to the shopping cart
- View and manage the shopping cart
- Basic user authentication (not implemented in this example)

## Getting Started

### Prerequisites

- Node.js and npm installed
- PostgreSQL database

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/TRoutin/E-comm-app
   cd E-comm-app
   ```

2. Install dependencies for the backend (Node.js and Express):

   ```bash
   cd server
   npm install
   ```

3. Install dependencies for the frontend (React):

   ```bash
   cd client
   npm install
   ```

4. Set up the PostgreSQL database and update the connection URL in `prisma/schema.prisma`.

5. Apply database migrations:

   ```bash
   cd server
   npx prisma migrate dev
   ```

## Usage

1. Start the backend server:

   ```bash
   cd server
   npm start
   ```

2. Start the frontend development server:

   ```bash
   cd client
   npm start
   ```

3. Open your browser and visit [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

- `client`: Frontend React application.
- `server`: Backend Node.js and Express application.
- `prisma`: Prisma configuration and database schema.

## Technologies Used

- React
- Node.js
- Express
- Prisma
- PostgreSQL

## Issues Encountered

### 1. Installation and Dependency Challenges
- Faced difficulties setting up React and Node.js, leading to project initiation delays.
- Wrestling with numerous dependencies resulted in unexpected conflicts, hindering progress.

### 2. Unfamiliarity with React and Node.js
- Lack of prior experience with React and Node.js posed a significant hurdle during development.
- Navigating through these technologies for the first time contributed to a steep learning curve.

### 3. Project Restarts and Repository Challenges
- Encountered the need for multiple project restarts, indicating persistent issues with the codebase.
- Frequent repository creations without achieving desired progress led to frustration.

### 4. Version Control Dilemma
- Initially planned to utilize pull requests for version control but had to abandon the approach due to non-functional code.
- The absence of a streamlined version control process added complexity to collaborative efforts.

## Original Plan vs. Current State

### 1. Frontend Development
#### Original Plan:
- Display items in a grid, fetching data from the database.
- Implement dynamic filtering based on database information.
- Enable a shopping cart seamlessly interacting with the backend.
#### Current State:
- Project iterations led to a partial implementation, yet core features remain incomplete.

### 2. Backend Operations
#### Original Plan:
- Develop a comprehensive API handling various operations.
- Manage the shopping cart efficiently using a dedicated database table.
#### Current State:
- API operations are in progress, but challenges in backend functionality persist.

### 3. Version Control and Deployment
#### Original Plan:
- Intended to use pull requests for version control, but aborted due to non-functional code.
- Successfully deployed the application on Vercel, showcasing adaptability to new platforms.
#### Current State:
- Seeking a more robust version control strategy as development progresses.

### 4. Documentation Efforts
#### Original Plan:
- Utilized Swagger.io for documentation, aiming for a professional appearance while maintaining structural integrity.
#### Current State:
- Documentation in place, demonstrating commitment to clarity and understanding.