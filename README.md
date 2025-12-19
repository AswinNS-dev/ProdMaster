# MERN Stack Project

A full-stack web application built with MongoDB, Express.js, React, and Node.js.

## Project Structure

```
├── backend/          # Node.js/Express API server
├── frontend/         # React frontend application
└── README.md
```

## Deployment

- **Backend**: Deployed on Render
- **Frontend**: Deployed on Vercel

## Local Development

### Backend
```bash
cd backend
npm install
npm run dev
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## Environment Variables

### Backend (.env)
```
PORT=5001
NODE_ENV=development
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:5001/api
```