# 🎨 Website Customization Guide

Your portfolio website now has a **configuration system** that makes it super easy to customize! Just edit the `config.json` file and your changes will automatically appear on the website.

## 📝 **How to Customize Your Website**

### **Step 1: Edit the `config.json` file**
Open `config.json` in any text editor and update the values with your information.

### **Step 2: Save the file**
Your changes will automatically appear when you refresh the website.

## 🔧 **What You Can Customize**

### **Personal Information**
```json
"personal": {
  "name": "Your Name",           // ← Change this to your name
  "title": "Professional Developer & Creative Problem Solver",  // ← Your job title
  "description": "I create innovative digital solutions...",    // ← Your tagline
  "email": "your.email@example.com",                           // ← Your email
  "phone": "+1 (555) 123-4567",                                // ← Your phone
  "location": "Your City, State",                              // ← Your location
  "profileImage": "images/profile.jpg"                         // ← Your photo (optional)
}
```

### **About Section**
```json
"about": {
  "story": "I'm a passionate professional...",                 // ← Your story
  "approach": "My approach combines...",                       // ← Your approach
  "skills": ["Web Development", "UI/UX Design", ...],         // ← Your skills
  "stats": {
    "projects": 50,                                            // ← Number of projects
    "experience": 5,                                           // ← Years of experience
    "satisfaction": 100                                        // ← Client satisfaction %
  }
}
```

### **Services**
```json
"services": [
  {
    "title": "Web Development",                                // ← Service name
    "description": "Custom websites and...",                   // ← Service description
    "icon": "fas fa-code"                                      // ← FontAwesome icon
  }
]
```

### **Portfolio Projects**
```json
"portfolio": [
  {
    "title": "E-Commerce Platform",                           // ← Project name
    "description": "A modern e-commerce...",                   // ← Project description
    "image": "images/project1.jpg",                           // ← Project image
    "technologies": ["React", "Node.js", "MongoDB"],          // ← Tech stack
    "link": "#"                                               // ← Project link
  }
]
```

### **Social Media Links**
```json
"social": {
  "linkedin": "https://linkedin.com/in/yourprofile",         // ← LinkedIn
  "github": "https://github.com/yourusername",               // ← GitHub
  "twitter": "https://twitter.com/yourusername",             // ← Twitter
  "instagram": "https://instagram.com/yourusername"          // ← Instagram
}
```

## 🖼️ **Adding Images**

1. **Create an `images/` folder** in your project
2. **Add your images** (profile photo, project screenshots, etc.)
3. **Update the image paths** in `config.json`

## 🚀 **Quick Start Example**

Here's what you need to change right away:

```json
{
  "personal": {
    "name": "Pratik Kumar",                    // ← Your actual name
    "title": "Full Stack Developer",           // ← Your actual title
    "email": "pratik@example.com",             // ← Your actual email
    "phone": "+91 98765 43210",                // ← Your actual phone
    "location": "Mumbai, India"                // ← Your actual location
  }
}
```

## 📋 **Checklist**

- [ ] Update your name
- [ ] Update your job title
- [ ] Update your email and phone
- [ ] Update your location
- [ ] Write your personal story
- [ ] Update your skills
- [ ] Add your real projects
- [ ] Update social media links
- [ ] Add your profile photo (optional)

## 🔄 **After Making Changes**

1. **Save the `config.json` file**
2. **Refresh your website** in the browser
3. **Your changes will appear automatically!**

## 📞 **Need Help?**

If something doesn't work:
1. Check that your JSON syntax is correct (commas, quotes, etc.)
2. Make sure you saved the file
3. Clear your browser cache and refresh

---

**That's it!** Just edit `config.json` and your website will update automatically. No coding required! 🎉
