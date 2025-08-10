# 📸 Images Guide

This folder is for storing all images used in your portfolio website.

## 📁 **Required Images**

### **Profile Image**
- **File**: `profile.jpg` (or `profile.png`)
- **Size**: Recommended 400x400 pixels or larger
- **Format**: JPG or PNG
- **Description**: Your professional headshot or profile photo

### **Portfolio Project Images**
- **Files**: `project1.jpg`, `project2.jpg`, `project3.jpg`
- **Size**: Recommended 800x600 pixels or larger
- **Format**: JPG or PNG
- **Description**: Screenshots or images of your projects

## 🎯 **How to Add Your Profile Image**

1. **Prepare your image**:
   - Use a professional headshot
   - Square aspect ratio works best (1:1)
   - High quality (at least 400x400 pixels)
   - Professional attire and background

2. **Save as `profile.jpg`** in this folder

3. **Alternative names**: You can also use:
   - `profile.png`
   - `profile.jpeg`
   - `profile.webp`

## 📋 **Image Guidelines**

### **Profile Photo Tips**
- ✅ Professional headshot
- ✅ Good lighting
- ✅ Neutral background
- ✅ Business attire
- ✅ Friendly expression
- ✅ High resolution

### **Project Images Tips**
- ✅ Screenshots of your work
- ✅ Before/after comparisons
- ✅ Dashboard screenshots
- ✅ Application interfaces
- ✅ Clear and readable

## 🔧 **Updating Image Paths**

If you use different image names, update the `config.json` file:

```json
{
  "personal": {
    "profileImage": "images/your-image-name.jpg"
  },
  "portfolio": [
    {
      "image": "images/your-project-image.jpg"
    }
  ]
}
```

## 📱 **Responsive Images**

The website automatically handles:
- Image scaling for different screen sizes
- Loading optimization
- Fallback to placeholder if image not found

---

**Ready to add your images?** Just drop your profile photo in this folder as `profile.jpg`! 🎉
