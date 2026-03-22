# 📚 FreelanceTutor

A web-based platform that connects students with freelance tutors. Students can browse and find tutors based on subject expertise, and teachers can discover students looking for help — enabling easy collaboration for academic growth.

> 🚧 **Status: Ongoing Development**

---

## 🖥️ Features

### 👨‍🎓 Students
- Register with personal details (name, email, phone, gender, country, class, profile picture)
- Secure login with session management
- View and update profile
- Browse all available tutors with their subject expertise and qualifications
- View detailed tutor profiles

### 👩‍🏫 Teachers / Tutors
- Register with academic credentials (qualification, subject expertise, bio, verification document)
- Secure login with session management
- View and update profile
- Browse students looking for tutors
- View detailed student profiles

### 🔐 Authentication
- Role-based login (Student / Teacher)
- Password hashing using PHP `password_hash()`
- Session-based access control
- Logout functionality

---

## 🛠️ Tech Stack

| Layer      | Technology                  |
|------------|-----------------------------|
| Frontend   | HTML, CSS, JavaScript       |
| Backend    | PHP (MVC Architecture)      |
| Database   | MySQL / MariaDB             |
| Server     | Apache (XAMPP / WAMP)       |
| DB Tool    | phpMyAdmin                  |

---

## 🗂️ Project Structure

```
FreelanceTutor/
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   ├── database/
│   │   └── web_project.sql
│   └── uploads/
│       ├── students/
│       └── teachers/
├── controller/
│   ├── login_controller.php
│   ├── logout.php
│   ├── student_controller.php
│   └── teacher_controller.php
├── model/
│   ├── db.php
│   ├── student_model.php
│   └── teacher_model.php
└── view/
    ├── header.php
    ├── footer.php
    ├── home.php
    ├── login.php
    ├── student_signup.php
    ├── teacher_signup.php
    ├── studentDashboardInitial.php
    ├── teachersDashboardInitial.php
    ├── viewStudents.php
    ├── viewStudentsProfile.php
    ├── viewTeachers.php
    └── viewTeachersProfile.php
```

---

## ⚙️ Installation & Setup

### Prerequisites
- [XAMPP](https://www.apachefriends.org/) or any Apache + PHP + MySQL stack
- PHP 8.x
- MySQL / MariaDB

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/FreelanceTutor.git
   ```

2. **Move to your server's web root**
   ```bash
   # For XAMPP on Windows
   mv FreelanceTutor C:/xampp/htdocs/FreelanceTutor
   ```

3. **Import the database**
   - Open [phpMyAdmin](http://localhost/phpmyadmin)
   - Create a new database named `web_project`
   - Import `assets/database/web_project.sql`

4. **Configure the database connection**
   - Open `model/db.php`
   - Update the credentials if needed:
     ```php
     $host = "localhost";
     $user = "root";
     $password = "";
     $database = "web_project";
     ```

5. **Run the project**
   - Start Apache & MySQL from the XAMPP Control Panel
   - Visit: `http://localhost/FreelanceTutor/view/home.php`

---

## 📸 Screenshots

> *(Add screenshots of the home page, signup forms, dashboards, and profile pages here)*

---

## 🗃️ Database Schema

### `students` table
| Column           | Type         |
|------------------|--------------|
| student_id       | INT (PK, AI) |
| name             | VARCHAR(100) |
| email            | VARCHAR(100) |
| phone            | VARCHAR(15)  |
| gender           | ENUM         |
| country          | VARCHAR(50)  |
| dob              | DATE         |
| class            | VARCHAR(50)  |
| profile_picture  | VARCHAR(255) |
| password         | VARCHAR(255) |
| created_at       | TIMESTAMP    |

### `teachers` table
| Column                    | Type         |
|---------------------------|--------------|
| teacher_id                | INT (PK, AI) |
| name                      | VARCHAR(100) |
| email                     | VARCHAR(100) |
| phone                     | VARCHAR(15)  |
| gender                    | ENUM         |
| dob                       | DATE         |
| educational_qualification | VARCHAR(100) |
| subject_expert            | VARCHAR(100) |
| bio                       | TEXT         |
| profile_picture           | VARCHAR(255) |
| document                  | VARCHAR(255) |
| password                  | VARCHAR(255) |
| created_at                | TIMESTAMP    |
| updated_at                | TIMESTAMP    |

---

## 🔮 Planned Features

- [ ] Messaging system between students and teachers
- [ ] Booking / scheduling sessions
- [ ] Rating and review system for tutors
- [ ] Search and filter by subject, location, or class level
- [ ] Admin panel for user management
- [ ] Email notifications
- [ ] Improved input sanitization and prepared statements

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repository and submit a pull request.

1. Fork the project
2. Create your feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a pull request

---
