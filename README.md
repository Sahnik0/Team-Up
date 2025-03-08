
---

### **Updated README.md**  


# 🚀 Team-Up The Ultimate Coding Partner Finder

Hackathon Team Builder is a **web application** that helps college students form **effective teams** for hackathons and group projects. It enables **skill-based matching**, efficient **scheduling**, and **seamless collaboration** between team members, fostering a welcoming environment for both beginners and experienced individuals.  

---

## 🎯 Features  

### ✅ **1. Skill-Based Matching**  
🔹 Users create profiles highlighting their skills (e.g., **Web Dev, Design, Product Management**).  
🔹 A **smart matching system** suggests teammates with **complementary skills**.  

### ✅ **2. Scheduling Coordination**  
📅 Shared **calendar** and **availability indicators** to align schedules.  

### ✅ **3. Networking Beyond Friend Circles**  
🔍 Discover teammates **outside immediate social circles** with **search & filter options**.  

### ✅ **4. Role Guidance**  
🔸 **AI-driven recommendations** for team roles based on project requirements.  
🔸 **Templates & resources** for dividing responsibilities.  

### ✅ **5. Support for Beginners**  
💡 Icebreakers & **introduction templates** for easy onboarding.  
🔗 Opportunities to **connect with experienced peers**.  

### ✅ **6. Collaboration Tools**  
💬 **Real-time chat**, **project boards**, and **file sharing** for seamless teamwork.  

---

## 📷 UI Preview  

![Team Builder UI 1](https://github.com/Sahnik0/Team-Up/blob/5ee2ff82681fb08723e175db6fd3783b9a12b6c2/WhatsApp%20Image%202025-01-26%20at%2021.21.49_0095e22f.jpg)  


![Team Builder UI 2](https://github.com/Sahnik0/Team-Up/blob/d3a5af315e6510d96187a6452d18adaea59a6e9a/WhatsApp%20Image%202025-01-26%20at%2021.22.27_9a591684.jpg)  


![Team Builder UI 3](https://github.com/Sahnik0/Team-Up/blob/493fa5e6d0aa5b7bf732860e3954901545e65f08/WhatsApp%20Image%202025-01-26%20at%2021.22.54_fae6dd5a.jpg)  


---

## 🛠️ Technical Features  

### 🔹 **Authentication**  
- 🔑 Google Login integration via **Firebase Authentication**.  

### 🔹 **Database**  
- ⚡ **Firestore** for real-time data management.  
- 🔐 **Security rules** for controlled access & data protection.  

### 🔹 **AI-Powered Recommendations (Optional)**  
- 🤖 AI-powered **teammate matching** based on skills & availability.  

---

## 🚀 Installation  

### **Prerequisites**  
- 📌 Node.js (>= 16.0)  
- 🔥 Firebase account & project  

### **Steps to Run Locally**  
1️⃣ Clone the repository:  
   ```bash
   git clone https://github.com/Sahnik0/Team-Up.git
   cd project
   ```  
2️⃣ Install dependencies:  
   ```bash
   npm install
   npm install -g firebase-tools
   npm install firebase
   npm i --save-dev @types/react-helmet
   ```  
3️⃣ Set up Firebase:  
   - Create a **Firebase project**.  
   - Enable **Firestore & Authentication (Google provider)**.  
   - Add Firebase config in `src/lib/firebase.ts`:  

   ```typescript
   import { initializeApp } from 'firebase/app';
   import { getAuth, GoogleAuthProvider } from 'firebase/auth';
   import { getFirestore } from 'firebase/firestore';

   const firebaseConfig = {
     apiKey: "<YOUR_API_KEY>",
     authDomain: "<YOUR_AUTH_DOMAIN>",
     projectId: "<YOUR_PROJECT_ID>",
     storageBucket: "<YOUR_STORAGE_BUCKET>",
     messagingSenderId: "<YOUR_MESSAGING_SENDER_ID>",
     appId: "<YOUR_APP_ID>",
     measurementId: "<YOUR_MEASUREMENT_ID>"
   };

   const app = initializeApp(firebaseConfig);
   export const auth = getAuth(app);
   export const googleProvider = new GoogleAuthProvider();
   export const db = getFirestore(app);
   ```

4️⃣ Create an env file:  
   ```env
   VITE_FIREBASE_API_KEY="<YOUR_API_KEY>"
   VITE_FIREBASE_AUTH_DOMAIN="<YOUR_AUTH_DOMAIN>"
   VITE_FIREBASE_PROJECT_ID="<YOUR_PROJECT_ID>"
   VITE_FIREBASE_STORAGE_BUCKET="<YOUR_STORAGE_BUCKET>"
   VITE_FIREBASE_MESSAGING_SENDER_ID="<YOUR_MESSAGE_SENDER_ID>"
   VITE_FIREBASE_APP_ID="<YOUR_APP_ID>"
   VITE_FIREBASE_MEASUREMENT_ID="<YOUR_MEASUREMENT_ID>"
   ```

4️⃣ Start the development server:  
   ```bash
   npm run dev
   ```  
5️⃣ Open in browser:  
   ```plaintext
   http://localhost:5173
   ```

---

## 🚀 Deployment  

### **Firebase Deployment Steps**  
1️⃣ Build the project:  
   ```bash
   npm run build
   ```  
2️⃣ Deploy to Firebase:  
   ```bash
   firebase deploy
   ```  

---

## 🔐 Firestore Security Rules  

```firestore
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && request.auth.uid == userId;
    }

    match /teams/{teamId} {
      allow read: if request.auth != null && resource.data.members.hasAny([request.auth.uid]);
      allow create: if request.auth != null && request.resource.data.members.hasAny([request.auth.uid]);
    }

    match /messages/{messageId} {
      allow read: if request.auth != null;
      allow create: if request.auth != null &&
        exists(/databases/$(database)/documents/teams/$(request.resource.data.teamId)) &&
        get(/databases/$(database)/documents/teams/$(request.resource.data.teamId)).data.members.hasAny([request.auth.uid]);
    }

    match /teamRequests/{requestId} {
      allow read: if request.auth != null && (
        resource.data.senderId == request.auth.uid ||
        resource.data.receiverId == request.auth.uid
      );
      allow create: if request.auth != null && request.resource.data.senderId == request.auth.uid;
      allow update: if request.auth != null && resource.data.receiverId == request.auth.uid;
    }
  }
}
```

---

## 👥 Contributors  

 

<table>
  <tr>
    <td align="center"><a href="https://github.com/Sahnik0"><img src="https://github.com/Sahnik0.png" width="100px;" alt=""/><br /><sub><b>Sahnik Biswas</b></sub></a></td>
    <td align="center"><a href="https://github.com/sanks011"><img src="https://github.com/sanks011.png" width="100px;" alt=""/><br /><sub><b>Sankalpa Sarkar</b></sub></a></td>
     <td align="center"><a href="https://github.com/Shreyas0017"><img src="https://github.com/Shreyas0017.png" width="100px;" alt=""/><br /><sub><b>Shreyas Saha</b></sub></a></td>
  </tr>
</table>  

---

## 📜 License  

📄 This project is licensed under the **MIT License**. See the `LICENSE` file for details.  

---

## 📩 Contact  

For queries or feedback, reach out to:  
- 📛 **Sahnik Biswas**  
- ✉️ **Email:** [tb123983@gmail.com](tb123983@gmail.com)  
- 🔗 **GitHub:** [Sahnik Biswas](https://github.com/Sahnik0)  

---

💡 **Join the project and help build the future of hackathon team collaboration!** 🚀  
