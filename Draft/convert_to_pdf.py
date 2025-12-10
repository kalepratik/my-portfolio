#!/usr/bin/env python3
"""
Convert Optimized Resume HTML to PDF
"""

import os
import sys
import subprocess
from pathlib import Path

def check_dependencies():
    """Check if required dependencies are installed"""
    try:
        import selenium
        return True
    except ImportError:
        return False

def install_dependencies():
    """Install required dependencies"""
    print("Installing required dependencies...")
    try:
        subprocess.check_call([sys.executable, "-m", "pip", "install", "selenium", "webdriver-manager"])
        print("✅ Dependencies installed successfully!")
        return True
    except subprocess.CalledProcessError:
        print("❌ Failed to install dependencies. Please install manually:")
        print("   pip install selenium webdriver-manager")
        return False

def convert_html_to_pdf():
    """Convert HTML resume to PDF using browser automation"""
    try:
        from selenium import webdriver
        from selenium.webdriver.chrome.service import Service
        from selenium.webdriver.chrome.options import Options
        from selenium.webdriver.common.by import By
        from selenium.webdriver.support.ui import WebDriverWait
        from selenium.webdriver.support import expected_conditions as EC
        from webdriver_manager.chrome import ChromeDriverManager
        
        # Get current directory
        current_dir = Path(__file__).parent
        html_file = current_dir / "resume_optimized.html"
        pdf_file = current_dir / "Pratik_Kumar_Kale_Resume_Optimized.pdf"
        
        # Check if HTML file exists
        if not html_file.exists():
            print(f"❌ HTML file not found: {html_file}")
            return False
        
        print("🔄 Setting up automated browser...")
        
        # Configure Chrome options for PDF printing
        chrome_options = Options()
        chrome_options.add_argument("--headless")  # Run in background
        chrome_options.add_argument("--no-sandbox")
        chrome_options.add_argument("--disable-dev-shm-usage")
        chrome_options.add_argument("--disable-gpu")
        chrome_options.add_argument("--window-size=1920,1080")
        
        # Initialize WebDriver
        service = Service(ChromeDriverManager().install())
        driver = webdriver.Chrome(service=service, options=chrome_options)
        
        try:
            # Convert file path to URL
            file_url = f"file:///{html_file.absolute().as_posix()}"
            print(f"📄 Loading resume from: {file_url}")
            
            # Load the HTML file
            driver.get(file_url)
            
            # Wait for page to load
            WebDriverWait(driver, 10).until(
                EC.presence_of_element_located((By.TAG_NAME, "body"))
            )
            
            print("🔄 Converting to PDF...")
            
            # Execute print command
            result = driver.execute_cdp_cmd("Page.printToPDF", {
                "printBackground": True,
                "paperWidth": 8.27,  # A4 width in inches
                "paperHeight": 11.69,  # A4 height in inches
                "marginTop": 0.4,
                "marginBottom": 0.4,
                "marginLeft": 0.4,
                "marginRight": 0.4,
                "scale": 1.0,
                "preferCSSPageSize": True
            })
            
            # Save PDF
            import base64
            pdf_data = base64.b64decode(result["data"])
            
            with open(pdf_file, "wb") as f:
                f.write(pdf_data)
            
            if pdf_file.exists():
                print(f"✅ PDF created successfully: {pdf_file}")
                print(f"📄 File size: {pdf_file.stat().st_size / 1024:.1f} KB")
                print(f"📁 Saved in: {current_dir}")
                return True
            else:
                print("❌ PDF creation failed")
                return False
                
        finally:
            driver.quit()
            
    except Exception as e:
        print(f"❌ Error during conversion: {e}")
        return False

def main():
    """Main function"""
    print("🤖 Optimized Resume PDF Converter")
    print("=" * 35)
    
    # Check dependencies
    if not check_dependencies():
        print("📦 Required dependencies not found.")
        if not install_dependencies():
            return
    
    # Convert HTML to PDF
    if convert_html_to_pdf():
        print("\n🎉 Optimized Resume PDF conversion completed!")
        print("📁 PDF saved as 'Pratik_Kumar_Kale_Resume_Optimized.pdf' in the Draft folder")
    else:
        print("\n❌ PDF conversion failed. Please check the error messages above.")

if __name__ == "__main__":
    main()

