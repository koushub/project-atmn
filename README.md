# ॐ Project Atmn (अत्मन्)

[![Live Site](https://img.shields.io/badge/Live-Deployment-orange?style=for-the-badge&logo=render)](https://app.project-atmn.in/)

> **Experience the Ashtavakra Gita every morning.** One profound verse on non-duality delivered to your inbox daily.

**Project Atmn** is a full-stack "Wisdom-as-a-Service" platform that delivers the non-dual teachings of the **Ashtavakra Gita** directly to seekers' inboxes every morning. It combines a high-performance React frontend with a robust Node.js/MongoDB backend and an automated cron-job delivery system.

## ✨ Features

* **Daily Wisdom Engine**: An automated `node-cron` job that sends a sequential verse every morning at 6:00 AM IST.
* **Trilingual Content**: Each email includes the original Sanskrit Shloka, a Hindi translation, and an English interpretation.
* **Interactive Book Reader**: A dedicated `/read` route featuring a distraction-free, embedded reader with support for multiple regional languages via Archive.org.
* **Custom Domain Integration**: Fully configured for production with custom subdomains (`app.project-atmn.in`) and SSL encryption.
* **Modern UI/UX**: A responsive, mobile-first design built with Tailwind CSS, featuring smooth scroll navigation and branded loading states.

## 🚀 Tech Stack

| Layer | Technology |
| --- | --- |
| **Frontend** | React.js, Tailwind CSS, Lucide React, Framer Motion |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB Atlas (Mongoose ODM) |
| **Email** | Resend API (Transactional) |
| **Infrastructure** | Render (Web Services), GoDaddy (DNS Management) |

## 🛠️ Installation & Setup

### Prerequisites

* Node.js (v18+)
* MongoDB Atlas Account
* Resend API Key

### Backend Setup

1. Clone the repository and navigate to the backend folder.
2. Install dependencies:
```bash
npm install

```


3. Create a `.env` file and add the following:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
RESEND_API_KEY=your_resend_api_key
BACKEND_URL=https://project-atmn-backend.onrender.com

```


4. Start the server:
```bash
npm start

```



### Frontend Setup

1. Navigate to the frontend folder.
2. Install dependencies:
```bash
npm install

```


3. Start the development server:
```bash
npm run dev

```



## 📧 Automation Logic

The heart of the project is the `dailyEmail.job.js`. It performs the following steps every day:

1. Queries the MongoDB `Subscribers` collection for all users with `isActive: true`.
2. Identifies the `currentVerse` for each user.
3. Fetches the subsequent verse data (Sanskrit/Hindi/English).
4. Dispatches a personalized email via the Resend API.
5. Increments the user's `currentVerse` in the database to prepare for the next day.

## 📖 License

This project is a **Seva Project**—distributed freely for the benefit of all seekers.

---

**Developed with ❤️ by Koushubh Yadav**
