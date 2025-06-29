#!/bin/bash

echo "========================================"
echo "Bank Transaction Management System"
echo "========================================"
echo

echo "Starting Backend Server..."
echo
# Start backend in background
mvn spring-boot:run &
BACKEND_PID=$!

echo "Waiting for backend to start..."
sleep 10

echo
echo "Starting Frontend Development Server..."
echo
cd frontend
# Start frontend in background
npm start &
FRONTEND_PID=$!

echo
echo "========================================"
echo "System is starting up..."
echo "========================================"
echo "Backend: http://localhost:8080/api"
echo "Frontend: http://localhost:3000"
echo "H2 Console: http://localhost:8080/h2-console"
echo
echo "Press Ctrl+C to stop both servers"
echo

# Function to cleanup on exit
cleanup() {
    echo
    echo "Stopping servers..."
    kill $BACKEND_PID 2>/dev/null
    kill $FRONTEND_PID 2>/dev/null
    echo "Servers stopped."
    exit 0
}

# Set trap to cleanup on script exit
trap cleanup SIGINT SIGTERM

# Wait for user to stop
wait 