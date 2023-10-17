DROP DATABASE IF EXISTS tusk_db;
CREATE DATABASE tusk_db;

USE tusk_db;

CREATE TABLE users (
   user_id INT AUTO_INCREMENT PRIMARY KEY,
   username VARCHAR(255) NOT NULL,
   email VARCHAR(255) NOT NULL,
   password_hash VARCHAR(255) NOT NULL
);

CREATE TABLE projects (
   project_id INT AUTO_INCREMENT PRIMARY KEY,
   project_name VARCHAR(255) NOT NULL,
   description TEXT,
   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   user_id INT,
   FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

CREATE TABLE tasks (
   task_id INT AUTO_INCREMENT PRIMARY KEY,
   task_name VARCHAR(255) NOT NULL,
   description TEXT,
   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   due_date DATE,
   status VARCHAR(50),
   project_id INT,
   user_id INT,
   FOREIGN KEY (project_id) REFERENCES projects(project_id) ON DELETE CASCADE,
   FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);