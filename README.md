# Campus Connect - College ERP Portal

**Campus Connect** is a frontend-based college ERP system designed to centralize and streamline core academic interactions between students and faculty. This platform addresses communication fragmentation by providing a unified web-based hub for real-time information access and academic management.

---

## 🚀 Project Overview
In many university environments, academic processes—such as tracking faculty locations, office hours, and assignment submissions—often rely on disconnected or manual systems. This fragmentation leads to inefficiency and missed deadlines. **Campus Connect** fills this gap by focusing on a lightweight, high-utility interface for the most frequent daily interactions to improve usability and adoption.

### Key Modules
* **Student Module:** Features a personalized dashboard, searchable faculty directory (including cabin locations and office hours), assignment submission portals, and grade viewing.
* **Faculty Module:** Includes profile management for office hours and cabin locations, assignment creation, and online grading interfaces to provide marks.

---

## 🛠️ Tech Stack
* **Frontend:** HTML5, CSS3 (Tailwind CSS), and JavaScript.
* **Design:** Inter font family for a professional, high-utility interface.
* **Architecture:** Role-based access control for Students and Faculty.
* **Methodology:** Agile development focusing on iterative cycles and sprints.

---

## ✨ Features
* **Dynamic Role Selection:** A centralized login page (index.html) that shifts between Student and Faculty portals based on user choice.
* **Faculty Directory:** An easily searchable and filterable directory for faculty information, including cabin locations and office hours.
* **Assignment Management:** Streamlined portal for assignment creation (faculty side) and submission (student side).
* **Test/Exam Schedule:** Dedicated module to view upcoming internal tests and mid-term exam schedules.
* **Personalized Dashboard:** A clean overview for students showing pending assignments, urgent deadlines, and recent grades.

---

## 📂 Project Structure
The project is organized within the `Source_Code` directory to separate UI from logic:
* `index.html`: The entry point featuring dynamic role selection and a Cyan-themed authentication UI.
* `student_portal.html`: The main dashboard for students (Faculty Directory, Assignments, Tests).
* `faculty_portal.html`: The administrative interface for faculty (Assignment Creation, Grading).
* `style.css`: Shared professional styles and custom UI polish.
* `script_student.js`: Core logic for data handling, filtering, and dynamic rendering.

---

## 🔮 Future Scope
As outlined in the project roadmap, future iterations will implement full backend services:
* **Backend Services:** Implementation of Node.js and Express.js for REST API endpoints.
* **Database Integration:** Firestore (Firebase) or PostgreSQL for persistent data storage.
* **Authentication:** Secure user sessions using Firebase Authentication or JWT.
* **Deployment:** Hosting on cloud-based platforms like Vercel or Firebase.

---

## 👥 Contributors
* **Rajat Kumar**
* **Rajat Singh**
* **Rohan Bohra**

**Project Guide:** Ms. Shruti Aggarwal  
**Course:** Mini Project (BCC351)