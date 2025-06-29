@echo off
echo ========================================
echo Bank Transaction Management System
echo ========================================
echo.

echo Starting Backend Server...
echo.
start "Backend Server" cmd /k "mvn spring-boot:run"

echo Waiting for backend to start...
timeout /t 10 /nobreak > nul

echo.
echo Installing frontend dependencies...
cd frontend
call npm install

echo.
echo Starting Frontend Development Server...
echo.
start "Frontend Server" cmd /k "npm start"

echo.
echo ========================================
echo System is starting up...
echo ========================================
echo Backend: http://localhost:8080/api
echo Frontend: http://localhost:3000
echo H2 Console: http://localhost:8080/h2-console
echo.
echo Press any key to open the frontend in your browser...
pause > nul

start http://localhost:3000

echo.
echo System started successfully!
echo Keep these terminal windows open to run the application.
echo.
pause 