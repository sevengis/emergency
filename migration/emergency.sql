-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 25, 2018 at 09:45 AM
-- Server version: 10.1.32-MariaDB
-- PHP Version: 5.6.36

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `emergency`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `category_id` int(11) NOT NULL,
  `category_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`category_id`, `category_name`) VALUES
(3, 'kebakaran'),
(4, 'longsor');

-- --------------------------------------------------------

--
-- Table structure for table `info_point`
--

CREATE TABLE `info_point` (
  `info_point_id` int(11) NOT NULL,
  `info_point_category` int(11) DEFAULT NULL,
  `info_point_name` text,
  `info_point_description` text,
  `info_point_lat` varchar(255) DEFAULT NULL,
  `info_point_lng` varchar(255) DEFAULT NULL,
  `info_point_status` varchar(255) DEFAULT NULL,
  `info_point_file` varchar(255) DEFAULT NULL,
  `info_point_created_at` datetime DEFAULT NULL,
  `info_point_created_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `info_point`
--

INSERT INTO `info_point` (`info_point_id`, `info_point_category`, `info_point_name`, `info_point_description`, `info_point_lat`, `info_point_lng`, `info_point_status`, `info_point_file`, `info_point_created_at`, `info_point_created_by`) VALUES
(7, 3, 'djfhsk', 'hjks', '-6.2280544285098065', '106.68808437048949', 'VERIFIED', '1527128627.png', '2019-05-24 09:23:47', 4),
(8, 4, 'test', 'dkfjs', '-6.2279194611443325', '106.68458922687944', 'VERIFIED', '1527149633.jpg', '2018-05-24 15:13:54', 4),
(9, 3, 'Kebakaran di rumah A', 'Detail halaman', '-6.551775799999999', '106.62913040000001', 'VERIFIED', '1527158191.jpg', '2018-05-24 17:36:31', 4),
(10, 3, 'Kebakaran di rumah A', 'Detail halaman', '-6.551775799999999', '106.62913040000001', 'NEW', '1527158191.jpg', '2018-05-24 17:36:31', 4),
(11, 3, 'Kebakaran di rumah A', 'Detail halaman', '-6.551775799999999', '106.62913040000001', 'NEW', '15271581911.jpg', '2018-05-24 17:36:31', 4);

-- --------------------------------------------------------

--
-- Table structure for table `service_point`
--

CREATE TABLE `service_point` (
  `service_point_id` int(11) NOT NULL,
  `service_point_category` int(11) DEFAULT NULL,
  `service_point_name` text,
  `service_point_description` text,
  `service_point_lat` varchar(255) DEFAULT NULL,
  `service_point_lng` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `service_point`
--

INSERT INTO `service_point` (`service_point_id`, `service_point_category`, `service_point_name`, `service_point_description`, `service_point_lat`, `service_point_lng`) VALUES
(1, 2, 'Service Point 12', 'Jalan dfkjsdlkf', '-6.2303072381645395', '106.68924696337865'),
(2, 2, 'test', 'test', '-6.228839969496114', '106.68949329245163'),
(3, 2, 'dkfjs', 'djfksl', '-6.228851672640833', '106.69279432297128'),
(4, 2, 'dkfjs', 'djfksl', '-6.228851672640833', '106.69279432297128'),
(5, 2, 'fs', 'dfks', '-6.227412188276906', '106.69014087829066'),
(6, 2, 'kkl', 'dkfjw', '-6.227896293719614', '106.68855875477686');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `user_full_name` varchar(255) DEFAULT NULL,
  `user_role` varchar(255) DEFAULT NULL,
  `user_password` varchar(255) DEFAULT NULL,
  `user_email` varchar(255) DEFAULT NULL,
  `user_phone` varchar(255) DEFAULT NULL,
  `user_address` text,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `user_full_name`, `user_role`, `user_password`, `user_email`, `user_phone`, `user_address`, `created_at`, `updated_at`) VALUES
(4, 'wijayaa', 'user', '7c4a8d09ca3762af61e59520943dc26494f8941b', 'wijaya@gmail.com', '0892344234', 'Jalan Delima', '2018-05-24 02:41:19', '2018-05-24 02:41:19'),
(6, 'Haris Yutri', 'admin', '7c4a8d09ca3762af61e59520943dc26494f8941b', 'yutriharis@gmail.com', '089453545', 'Jalan delima', '2018-05-24 02:36:21', '2018-05-24 02:36:21'),
(7, 'test', 'user', '7c4a8d09ca3762af61e59520943dc26494f8941b', 'test@gmail.com', '089454354', 'jalan delima', '2018-05-24 02:46:36', '2018-05-24 02:46:36'),
(9, 'officer', 'officer', '7c4a8d09ca3762af61e59520943dc26494f8941b', 'officer@gmail.com', '123456', '123456', '2018-05-24 15:43:20', '2018-05-24 15:43:20'),
(10, 'widodo', 'admin', '20eabe5d64b0e216796e834f52d61fd0b70332fc', 'blawa77@gmail.com', '087770088977', 'bogor', '2018-05-24 15:38:56', '2018-05-24 15:38:56');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `info_point`
--
ALTER TABLE `info_point`
  ADD PRIMARY KEY (`info_point_id`);

--
-- Indexes for table `service_point`
--
ALTER TABLE `service_point`
  ADD PRIMARY KEY (`service_point_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `info_point`
--
ALTER TABLE `info_point`
  MODIFY `info_point_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `service_point`
--
ALTER TABLE `service_point`
  MODIFY `service_point_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
