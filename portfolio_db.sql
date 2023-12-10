-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- 主机： localhost:8889
-- 生成日期： 2023-12-10 22:52:29
-- 服务器版本： 5.7.39
-- PHP 版本： 8.2.0

SET FOREIGN_KEY_CHECKS=0;
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： portfolio_db
--

-- --------------------------------------------------------

--
-- 表的结构 tbl_contact
--

CREATE TABLE tbl_contact (
  contact_id int(10) UNSIGNED NOT NULL,
  firstname varchar(100) NOT NULL,
  lastname varchar(100) NOT NULL,
  email varchar(100) DEFAULT NULL,
  comments varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 tbl_media
--

CREATE TABLE tbl_media (
  media_id int(10) UNSIGNED NOT NULL,
  file_name varchar(300) DEFAULT NULL,
  project_id int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 tbl_projects
--

CREATE TABLE tbl_projects (
  project_id int(10) UNSIGNED NOT NULL,
  title varchar(300) NOT NULL,
  date_created date NOT NULL,
  github_url varchar(300) NOT NULL,
  description varchar(1000) NOT NULL,
  problem_statement varchar(1000) NOT NULL,
  users varchar(300) NOT NULL,
  moodboard varchar(2000) NOT NULL,
  scope_constraints varchar(2000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转储表的索引
--

--
-- 表的索引 tbl_contact
--
ALTER TABLE tbl_contact
  ADD PRIMARY KEY (contact_id);

--
-- 表的索引 tbl_media
--
ALTER TABLE tbl_media
  ADD PRIMARY KEY (media_id),
  ADD KEY project_id (project_id);

--
-- 表的索引 tbl_projects
--
ALTER TABLE tbl_projects
  ADD PRIMARY KEY (project_id);

--
-- 限制导出的表
--

--
-- 限制表 tbl_media
--
ALTER TABLE tbl_media
  ADD CONSTRAINT tbl_media_ibfk_1 FOREIGN KEY (project_id) REFERENCES porfolio_db.Projects_table (project_id);
SET FOREIGN_KEY_CHECKS=1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
