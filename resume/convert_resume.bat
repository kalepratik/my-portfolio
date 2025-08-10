@echo off
echo 🚀 Automated Resume PDF Converter
echo ======================================
echo.

REM Check if Python is installed
python --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Python is not installed or not in PATH
    echo Please install Python from https://python.org
    pause
    exit /b 1
)

echo ✅ Python found
echo.

REM Run the simple automated conversion script
python auto_convert_simple.py

echo.
echo Press any key to exit...
pause >nul
