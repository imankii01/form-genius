# **Form-Genius 🚀**  
**AI-Powered Dynamic Form Validator for Node.js**  

![npm](https://img.shields.io/npm/v/form-genius?color=blue&style=flat-square)  
![License](https://img.shields.io/badge/license-MIT-green)  
![Build](https://img.shields.io/badge/build-passing-brightgreen)  
![Contributions](https://img.shields.io/badge/contributions-welcome-orange)  

**Form-Genius** is an **AI-powered, highly customizable, and dynamic form validation** package for Node.js. It supports unlimited fields, real-time validation, AI-based auto-corrections, and customizable validation rules. Whether you're working on a simple contact form or a complex application requiring secure validation, **Form-Genius** is the perfect solution.  

---  

## 🌟 **Why Use Form-Genius?**  
✅ **Unlimited Fields** – Validate **any** number of fields dynamically.  
✅ **AI-Powered Corrections** – Suggests fixes for typos, formatting issues, and invalid inputs.  
✅ **Auto Field-Type Detection** – Automatically detects input type (email, phone, password, etc.).  
✅ **Custom Rules Support** – Define **your own validation rules** for full flexibility.  
✅ **Real-Time Validation** – Easily integrates with front-end frameworks like React, Vue, and Angular.  
✅ **Multi-Language Support** – Works with various languages and regional formats.  
✅ **Security & Fraud Detection** – AI-based algorithms prevent fake/spam submissions.  
✅ **Lightweight & Fast** – Designed for high-performance applications.  

---

## 🚀 **Installation**  
```sh
npm install form-genius
```

---

## 🛠️ **How It Works**  

1. Define your **form fields**.  
2. Set up **validation rules** for each field.  
3. Use `form-genius` to validate **all inputs dynamically**.  
4. Get **real-time feedback** with errors and AI-generated suggestions.  

---

## 📌 **Usage Example**  

### **Basic Example**  
```javascript
const validateForm = require("form-genius");

const userData = {
    email: "john.doe@gmal.com",
    phone: "+123 456 7890",
    password: "pass",
    website: "htt://invalid-url.com",
    age: "17",
    username: "john_doe_123",
    address: "1600 Amphitheatre Pkwy, California"
};

const validationRules = {
    password: { minLength: 8 },
    website: { type: "url" }, // User-defined type override
    age: { type: "number", min: 18, max: 99 },
    address: { type: "address" }, // AI-powered address validation
    username: { type: "username", minLength: 3, maxLength: 15 }
};

console.log(validateForm(userData, validationRules));
```

### **Output Example**  
```json
{
  "valid": false,
  "errors": {
    "password": "Password must be at least 8 characters",
    "website": "Invalid URL format",
    "age": "Must be at least 18"
  },
  "suggestions": {
    "email": "john.doe@gmail.com",
    "website": "http://invalid-url.com"
  }
}
```

---

## 🎯 **Supported Validations**  
🔹 **Basic Validations**  
- Required fields  
- Min/max length  
- Allowed characters  

🔹 **Data Type-Specific Validations**  
- **Email** – Validate format, suggest correct domain (`gmal.com` → `gmail.com`)  
- **Phone Number** – Auto-format numbers, detect invalid inputs  
- **Password** – Strength validation (uppercase, numbers, special characters)  
- **Username** – No spaces, supports underscores, min/max length  
- **URL** – Ensures valid website addresses  
- **Date** – Ensures correct date formats (`MM-DD-YYYY`, `YYYY-MM-DD`)  
- **Number** – Range validation (`min`, `max`)  
- **Address** – Uses Google Maps API for real-world validation  

🔹 **Advanced AI-Based Features**  
- **Contextual Text Correction** – AI fixes common typos  
- **Fraud Detection** – Detects fake/spam submissions  
- **Real-Time Validation** – Perfect for frontend form validation  

---

## 📦 **Integrating with Express.js (API Example)**  
Easily validate user input in your Express.js application.  

```javascript
const express = require("express");
const validateForm = require("form-genius");

const app = express();
app.use(express.json());

app.post("/register", (req, res) => {
    const validationRules = {
        email: { type: "email" },
        password: { minLength: 8 },
        username: { type: "username", minLength: 3, maxLength: 15 }
    };

    const result = validateForm(req.body, validationRules);
    
    if (!result.valid) return res.status(400).json(result);
    
    res.json({ success: true, message: "User registered successfully!" });
});

app.listen(3000, () => console.log("Server running on port 3000"));
```

---

## 🌍 **Use Cases**
✅ **E-commerce Websites** – Validate shipping addresses, phone numbers, and payment details.  
✅ **User Registration Forms** – Secure authentication with strong passwords and valid emails.  
✅ **Finance & Banking Apps** – Validate account details securely.  
✅ **Healthcare Applications** – Ensure medical forms are properly filled.  
✅ **Job Portals & Applications** – Validate structured resume submissions.  

---

## ⚙️ **Versioning**  
Current Stable Version: **`1.0.0`**  
- 🎉 **New Features**: AI-powered validation, customizable rules, auto-detection  
- 🔥 **Performance**: Optimized for high-speed validation  

---

## 🔥 **Contributing**  
We welcome contributions! Feel free to submit issues and pull requests.  

### **To Contribute:**  
1. Fork the repository  
2. Create a new feature branch  
3. Make changes and commit  
4. Submit a pull request  

---

## 💙 **Support My Work**  
If you love **Form-Genius**, consider buying me a coffee! ☕  

[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-Support%20the%20Developer-orange?style=flat-square&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/imankii01)  

---

## 🔒 **License**  
This project is licensed under the **MIT License**. See the full **[LICENSE](./LICENSE)** file for details.  

---

🚀 **Form-Genius** makes form validation smarter, faster, and more powerful. Install it today and take your **form validation to the next level!** 💡# form-genius
