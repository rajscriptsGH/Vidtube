# Vidtube

A Full-Stack YouTube Clone built with MERN Stack + TypeScript + Tailwind CSS

## Description

Vidtube is a full-featured video sharing platform inspired by YouTube. Users can upload, view, like, comment on, and share videos. It supports authentication, subscriptions, trending pages, search functionality, and much more. It is built with a modern tech stack to ensure performance, scalability, and a smooth user experience.

- This project is perfect for learning full-stack architecture, REST APIs, file handling, and user interaction in real-world apps.

## 🛠️ Tech Stack

### Frontend

- React (with JavaScript)
- Tailwind CSS for styling
- Zustand (for state management)
- React Router DOM for routing
- Axios for API requests
- React Player for video playback

### Backend

- Node.js + Express.js
- MongoDB with Mongoose
- Cloudinary or AWS S3 for video and thumbnail uploads
- JWT for authentication
- Multer for file uploads
- Bcrypt for password hashing

## 🔐 Features

- User Authentication & Authorization
- Video Uploading & Playback
- Comment System
- Like/Dislike Functionality
- Search Videos by Title/Tags
- Subscribe to Channels
- View Count Tracking
- Trending & Recommended Videos
- Channel Pages (User Profiles)
- Responsive UI

## 🚀 Getting Started

### Clone the Repo

```bash
git clone <https://github.com/rajscriptsGH/vidtube.git>
cd vidtube
```

## 📦 Backend Setup

### 1. Navigate to server/

```bash
cd backend
npm install
```

### 2. Create a .env file

```env
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_key
CLOUDINARY_API_SECRET=your_secret
```

### 3. Start the server

```bash
npm run dev
```

## 🌐 Frontend Setup

### 1.Navigate to client/

```bash
cd frontend
npm install
```

### 2. Create .env file

```env
VITE_API_URL=<http://localhost:5000/api>
```

### 3. Start the app

```bash
npm run dev
```

## 🧪 Testing & Deployment

- Local testing: ✅

- Deployment ready on Render, Vercel, or Netlify + Railway.

- CI/CD optional using GitHub Actions.

## 📸 Screenshots

### Comming soon

- Home page
- Video Watch page
- Upload UI
- Comment section
- Profile/channel page

## 🧑‍💻 Author

Razz – ```GitHub```
Built with ❤️ and JavaScript.

## 📄 License

This project is licensed under the MIT License - see the ```LICENSE``` file for details.
