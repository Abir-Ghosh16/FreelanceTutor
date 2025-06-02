-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 30, 2025 at 05:04 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `web_project`
--

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `student_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `gender` enum('Male','Female','Other') DEFAULT NULL,
  `country` varchar(50) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `class` varchar(50) DEFAULT NULL,
  `profile_picture` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`student_id`, `name`, `email`, `phone`, `gender`, `country`, `dob`, `class`, `profile_picture`, `password`, `created_at`) VALUES
(1, 'SUKUMAR', 'abir20021611@gmail.com', '0977555555', 'Male', 'Bangladesh', '2025-05-03', '6', 'uploads/students/1748582139.png', '$2y$10$wgnV1kHroL3zs5O9DmhWEudz22FxuYlXCoK9JARCq2etTJER3Vy0C', '2025-05-30 01:15:39'),
(2, 'aa', 's@h.k', '0977555555', 'Female', 'Japan', '2025-05-31', '6', 'uploads/students/1748582603.png', '$2y$10$.hpBoe.P5zWErf3bei4egeCfSwGL2/YfZNzhgmcen/fJgN7ISrsc2', '2025-05-30 01:23:22'),
(3, 'aa', '22-49194-3@student.aiub.edu', '0977555555', 'Male', 'Bangladesh', '2025-05-21', '6', 'uploads/students/1748583346.png', '$2y$10$xAy3vXc1KFazb/2SHRFOJOX3L3JFpXSzIm4m7M8gA6WF.dkkXDKWm', '2025-05-30 01:35:46'),
(4, 'SUKUMAR', 'g@g.l', '0977555555', 'Male', 'Bangladesh', '2025-05-09', '6', 'uploads/students/1748585767.png', '$2y$10$khvqXiY17x8uGx3kxyBf1eiBmkPPZ2QpT6R80Di3aF.M9W2.YwSYq', '2025-05-30 02:16:06');

-- --------------------------------------------------------

--
-- Table structure for table `teachers`
--

CREATE TABLE `teachers` (
  `teacher_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `gender` enum('Male','Female','Other') DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `educational_qualification` varchar(100) DEFAULT NULL,
  `subject_expert` varchar(100) DEFAULT NULL,
  `profile_picture` varchar(255) DEFAULT NULL,
  `document` varchar(255) DEFAULT NULL,
  `bio` text DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `teachers`
--

INSERT INTO `teachers` (`teacher_id`, `name`, `email`, `phone`, `gender`, `dob`, `educational_qualification`, `subject_expert`, `profile_picture`, `document`, `bio`, `password`, `created_at`, `updated_at`) VALUES
(1, 'SUKUMAR', 'sukumar1971211@gmail.com', '0977555555', 'Female', '2025-05-31', 'ms', 'kk', 'uploads/teachers/1748576950_4982.png', 'uploads/teachers/1748576950_7977.png', 'fff', '$2y$10$VSOa0il2G/7zE1jvvhKUYulfDP6k4dzT8ZacVIox9YIMtTpS7CxYG', '2025-05-29 23:49:11', '2025-05-29 23:49:11'),
(2, 'abir', 'a@k.p', '095584848838', 'Male', '2025-05-14', 'ssss', 'kk', 'assets/uploads/teachers/1748615137_8610.png', 'assets/uploads/teachers/1748615137_6667.png', 'kkdkdddd\r\nddddd\r\ndd\r\nd', '$2y$10$fP0szzxyJHS5Dn9pvNBMZOANG4DLw4dpvrA8Z4BxCvzPsFfpiwdQi', '2025-05-30 10:25:37', '2025-05-30 10:25:37'),
(3, 'abir', 'a@k.l', '0977555555', 'Male', '2025-05-21', 'ssss', 'sssss', 'assets/uploads/teachers/1748616603_9440.png', 'assets/uploads/teachers/1748616603_4822.png', 'lld', '$2y$10$aVFKC847JjqBZgMAQul.NOlYNcOGzW5vz7jsuWJNtNjJinV.aYosS', '2025-05-30 10:50:03', '2025-05-30 10:50:03');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`student_id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `teachers`
--
ALTER TABLE `teachers`
  ADD PRIMARY KEY (`teacher_id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `student_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `teachers`
--
ALTER TABLE `teachers`
  MODIFY `teacher_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
