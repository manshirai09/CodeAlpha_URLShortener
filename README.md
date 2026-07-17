# 🔗 CodeAlpha URL Shortener API

A production-ready **URL Shortener REST API** built with **Node.js**, **Express.js**, and **MongoDB Atlas**. This project generates unique short URLs, stores them in MongoDB, and redirects users to the original URLs.

---

## 🚀 Features

- 🔗 Shorten long URLs
- ↪️ Redirect to the original URL
- 🗄️ MongoDB Atlas integration
- ✅ URL validation
- 📦 RESTful API architecture
- 🌍 Environment variable configuration
- 🏗️ MVC project structure
- ⚡ Fast and lightweight backend

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| Node.js | Runtime Environment |
| Express.js | Backend Framework |
| MongoDB Atlas | Cloud Database |
| Mongoose | MongoDB ODM |
| Dotenv | Environment Variables |
| NanoID | Unique Short Code Generation |
| Nodemon | Development Server |

---

## 📁 Project Structure

```
CodeAlpha_URLShortener
│
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── services/
├── utils/
├── validators/
│
├── app.js
├── server.js
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

---

## ⚙️ Installation

### 1️⃣ Clone Repository

```bash
git clone https://github.com/manshirai09/CodeAlpha_URLShortener.git
```

### 2️⃣ Navigate to Project

```bash
cd CodeAlpha_URLShortener
```

### 3️⃣ Install Dependencies

```bash
npm install
```

### 4️⃣ Create Environment Variables

Create a `.env` file in the project root.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

BASE_URL=http://localhost:5000
```

### 5️⃣ Start Development Server

```bash
npm run dev
```

---

## 📌 API Endpoints

### Create Short URL

**POST**

```
/api/url/shorten
```

Request Body

```json
{
  "originalUrl": "https://www.google.com"
}
```

---

### Redirect URL

**GET**

```
/:shortCode
```

Example

```
http://localhost:5000/abc123
```

---

## 📦 Dependencies

```text
express
mongoose
dotenv
nanoid
nodemon
```

---

## 📈 Future Improvements

- URL Analytics
- Click Counter
- Custom Short URLs
- URL Expiration
- User Authentication
- Rate Limiting
- QR Code Generation
- Docker Support

---

## 👩‍💻 Author

**Manshi Rai**

- GitHub: https://github.com/manshirai09
- LinkedIn: *https://www.linkedin.com/in/manshi-rai09/*

---

## 📄 License

This project is developed for the **CodeAlpha Backend Development Internship** and is intended for educational and portfolio purposes.

---

## ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub.
