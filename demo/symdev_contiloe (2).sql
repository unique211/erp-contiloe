-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 13, 2019 at 04:00 PM
-- Server version: 5.7.25
-- PHP Version: 7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `symdev_contiloe`
--
CREATE DATABASE IF NOT EXISTS `symdev_contiloe` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `symdev_contiloe`;

-- --------------------------------------------------------

--
-- Table structure for table `actualexpense`
--

CREATE TABLE `actualexpense` (
  `id` int(11) NOT NULL,
  `aid` int(11) NOT NULL,
  `expenseid` int(11) NOT NULL,
  `narration` varchar(255) NOT NULL,
  `qty` int(11) NOT NULL,
  `rate` double(10,2) NOT NULL,
  `unit` int(11) NOT NULL,
  `plannedamt` decimal(10,2) NOT NULL,
  `supplerid` int(11) NOT NULL,
  `referenceno` int(11) NOT NULL,
  `status` int(1) NOT NULL DEFAULT '1',
  `invoiceno` varchar(11) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `actualexpense`
--

INSERT INTO `actualexpense` (`id`, `aid`, `expenseid`, `narration`, `qty`, `rate`, `unit`, `plannedamt`, `supplerid`, `referenceno`, `status`, `invoiceno`, `date`) VALUES
(2, 0, 5, '0', 0, 0.00, 0, '0.00', 0, 0, 1, '', '0000-00-00'),
(4, 0, 7, '0', 0, 0.00, 0, '0.00', 0, 0, 1, '', '0000-00-00'),
(5, 0, 8, '0', 0, 0.00, 0, '0.00', 0, 0, 1, '', '0000-00-00'),
(6, 0, 9, '0', 0, 0.00, 0, '4000.00', 0, 0, 1, '', '0000-00-00'),
(7, 0, 10, '0', 0, 0.00, 0, '0.00', 0, 0, 1, '', '0000-00-00'),
(9, 0, 13, '0', 0, 0.00, 0, '0.00', 0, 0, 1, '', '0000-00-00');

-- --------------------------------------------------------

--
-- Table structure for table `actualscenedetails`
--

CREATE TABLE `actualscenedetails` (
  `id` int(11) NOT NULL,
  `aid` int(11) NOT NULL,
  `scenno` varchar(11) NOT NULL,
  `description` varchar(255) NOT NULL,
  `effect` varchar(255) NOT NULL,
  `sublocation` varchar(255) NOT NULL,
  `charecterid` varchar(100) NOT NULL,
  `planfotage` varchar(255) NOT NULL,
  `actualfotage` varchar(255) NOT NULL,
  `remark` varchar(255) NOT NULL,
  `status` int(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `actualscenedetails`
--

INSERT INTO `actualscenedetails` (`id`, `aid`, `scenno`, `description`, `effect`, `sublocation`, `charecterid`, `planfotage`, `actualfotage`, `remark`, `status`) VALUES
(1, 1, '  EP 283/2+', 'SHANI KA KRODH SHANT HO JATA HAI OR WO BHI SHAADI KE LIYE RAAJI HO JATA HAI MANDA SE….. SHANI AND MANDA SURYALOK ME ENTRY KR RAHE HAI…', 'DAY/EXT\n', 'CHROMA/ CORRIDOR', '81,82', '0', '', '', 1);

-- --------------------------------------------------------

--
-- Table structure for table `actualschedual`
--

CREATE TABLE `actualschedual` (
  `id` int(11) NOT NULL,
  `date` date NOT NULL,
  `projectid` int(11) NOT NULL,
  `unitno` int(11) NOT NULL,
  `location` varchar(255) NOT NULL,
  `shifttimefrom` varchar(255) NOT NULL,
  `shifttimeto` varchar(255) NOT NULL,
  `projectfotage` int(11) NOT NULL,
  `camera` int(11) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1',
  `requirement` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `actualschedual`
--

INSERT INTO `actualschedual` (`id`, `date`, `projectid`, `unitno`, `location`, `shifttimefrom`, `shifttimeto`, `projectfotage`, `camera`, `status`, `requirement`) VALUES
(1, '2019-04-01', 1, 1, 'Saniya Studio', '22:00:00', '10:00:00', 0, 2, 1, '');

-- --------------------------------------------------------

--
-- Table structure for table `artist_schedule`
--

CREATE TABLE `artist_schedule` (
  `id` int(11) NOT NULL,
  `date` date NOT NULL,
  `projectid` int(1) NOT NULL,
  `locationid` int(1) NOT NULL,
  `profotage` varchar(255) NOT NULL,
  `shiftfrom` varchar(255) NOT NULL,
  `shiftto` varchar(255) NOT NULL,
  `unit` int(11) NOT NULL,
  `camera` int(11) NOT NULL,
  `requirement` varchar(255) NOT NULL,
  `status` int(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `artist_schedule`
--

INSERT INTO `artist_schedule` (`id`, `date`, `projectid`, `locationid`, `profotage`, `shiftfrom`, `shiftto`, `unit`, `camera`, `requirement`, `status`) VALUES
(7, '2019-04-01', 1, 1, '00:15:00', '22:00:00', '10:00:00', 1, 2, '', 1);

-- --------------------------------------------------------

--
-- Table structure for table `callsheet`
--

CREATE TABLE `callsheet` (
  `id` int(11) NOT NULL,
  `aid` int(11) NOT NULL,
  `peopletypeid` int(11) NOT NULL,
  `characterid` int(11) NOT NULL,
  `peopleid` int(11) NOT NULL,
  `fromshift` varchar(255) NOT NULL,
  `toshift` varchar(255) NOT NULL,
  `duration` varchar(255) NOT NULL,
  `remark` varchar(255) NOT NULL,
  `status` int(1) NOT NULL DEFAULT '1'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `callsheet`
--

INSERT INTO `callsheet` (`id`, `aid`, `peopletypeid`, `characterid`, `peopleid`, `fromshift`, `toshift`, `duration`, `remark`, `status`) VALUES
(409, 7, 0, 79, 135, '', '', '', '', 1),
(410, 7, 0, 81, 145, '08:30:00', '22:00:00', '08:30:00', '', 1),
(408, 7, 0, 44, 96, '10:00:00', '22:00:00', '10:00:00', '', 1),
(407, 7, 0, 44, 94, '10:00:00', '22:00:00', '10:00:00', '', 1),
(406, 7, 0, 44, 95, '10:00:00', '22:00:00', '10:00:00', '', 1),
(405, 7, 0, 44, 93, '10:00:00', '22:00:00', '10:00:00', '', 1),
(404, 7, 0, 49, 113, '10:00:00', '22:00:00', '10:00:00', '', 1),
(403, 7, 0, 49, 112, '10:00:00', '22:00:00', '10:00:00', '', 1),
(402, 7, 0, 49, 111, '10:00:00', '22:00:00', '10:00:00', '', 1),
(401, 7, 0, 50, 114, '10:00:00', '22:00:00', '10:00:00', '', 1),
(400, 7, 0, 50, 120, '10:00:00', '22:00:00', '10:00:00', '', 1),
(399, 7, 0, 50, 115, '10:00:00', '22:00:00', '10:00:00', '', 1),
(398, 7, 0, 62, 86, '10:00:00', '22:00:00', '10:00:00', '', 1),
(397, 7, 0, 64, 51, '10:00:00', '22:00:00', '10:00:00', '', 1),
(396, 7, 0, 63, 79, '10:00:00', '22:00:00', '10:00:00', '', 1),
(395, 7, 0, 35, 68, '10:00:00', '22:00:00', '10:00:00', '', 1),
(394, 7, 0, 63, 45, '10:00:00', '22:00:00', '10:00:00', '', 1),
(393, 7, 0, 36, 55, '10:00:00', '22:00:00', '10:00:00', '', 1),
(392, 7, 0, 33, 77, '10:00:00', '22:00:00', '10:00:00', '', 1),
(391, 7, 0, 33, 67, '10:00:00', '22:00:00', '10:00:00', '', 1),
(390, 7, 0, 33, 76, '10:00:00', '22:00:00', '10:00:00', '', 1),
(389, 7, 0, 33, 74, '10:00:00', '22:00:00', '10:00:00', '', 1),
(388, 7, 0, 33, 75, '10:00:00', '22:00:00', '10:00:00', '', 1),
(387, 7, 0, 33, 66, '10:00:00', '22:00:00', '10:00:00', '', 1),
(386, 7, 0, 33, 66, '10:00:00', '22:00:00', '10:00:00', '', 1),
(385, 7, 0, 59, 128, '10:00:00', '22:00:00', '10:00:00', '', 1),
(384, 7, 0, 65, 108, '10:00:00', '22:00:00', '10:00:00', '', 1),
(383, 7, 0, 48, 107, '10:00:00', '22:00:00', '10:00:00', '', 1),
(382, 7, 0, 60, 129, '10:00:00', '22:00:00', '10:00:00', '', 1),
(381, 7, 0, 66, 78, '10:00:00', '22:00:00', '10:00:00', '', 1),
(380, 7, 0, 67, 131, '10:00:00', '22:00:00', '10:00:00', '', 1),
(379, 7, 0, 46, 104, '10:00:00', '22:00:00', '10:00:00', '', 1),
(378, 7, 0, 68, 101, '10:00:00', '22:00:00', '10:00:00', '', 1),
(377, 7, 0, 50, 116, '10:00:00', '22:00:00', '10:00:00', '', 1),
(375, 7, 0, 50, 117, '10:00:00', '22:00:00', '10:00:00', '', 1),
(376, 7, 0, 50, 118, '10:00:00', '22:00:00', '10:00:00', '', 1),
(374, 7, 0, 50, 119, '10:00:00', '22:00:00', '10:00:00', '', 1),
(373, 7, 0, 44, 97, '10:00:00', '22:00:00', '10:00:00', '', 1),
(372, 7, 0, 44, 98, '10:00:00', '22:00:00', '10:00:00', '', 1),
(371, 7, 0, 70, 92, '10:00:00', '22:00:00', '10:00:00', '', 1),
(370, 7, 0, 58, 125, '10:00:00', '22:00:00', '10:00:00', '', 1),
(369, 7, 0, 71, 92, '10:00:00', '22:00:00', '10:00:00', '', 1),
(368, 7, 0, 64, 87, '10:00:00', '22:00:00', '10:00:00', '', 1),
(367, 7, 0, 41, 89, '10:00:00', '22:00:00', '10:00:00', '', 1),
(366, 7, 0, 37, 81, '10:00:00', '22:00:00', '10:00:00', '', 1),
(365, 7, 0, 72, 100, '10:00:00', '22:00:00', '10:00:00', '', 1),
(364, 7, 0, 51, 122, '10:00:00', '22:00:00', '10:00:00', '', 1),
(363, 7, 0, 39, 84, '10:00:00', '22:00:00', '10:00:00', '', 1),
(362, 7, 0, 28, 59, '10:00:00', '22:00:00', '10:00:00', '', 1),
(361, 7, 0, 42, 88, '10:00:00', '22:00:00', '10:00:00', '', 1),
(360, 7, 0, 45, 103, '10:00:00', '22:00:00', '10:00:00', '', 1),
(357, 7, 0, 76, 132, '', '', '', '', 1),
(358, 7, 0, 75, 127, '10:00:00', '22:00:00', '10:00:00', '', 1),
(359, 7, 0, 45, 102, '10:00:00', '22:00:00', '10:00:00', '', 1),
(356, 7, 0, 77, 133, '', '', '', '', 1),
(355, 7, 0, 78, 134, '', '', '', '', 1),
(354, 7, 0, 82, 143, '08:30:00', '22:00:00', '08:30:00', '', 1),
(411, 7, 0, 85, 149, '', '', '', '', 1);

-- --------------------------------------------------------

--
-- Table structure for table `character_master`
--

CREATE TABLE `character_master` (
  `id` int(11) NOT NULL,
  `projectid` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `peopletype` int(11) NOT NULL,
  `status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `character_master`
--

INSERT INTO `character_master` (`id`, `projectid`, `name`, `peopletype`, `status`) VALUES
(27, 1, 'LOCATION HIRE', 2, 1),
(28, 1, 'LOCATION STAFF', 2, 1),
(29, 1, 'TOLL CHARGES', 2, 1),
(30, 1, 'GODOWN RENT', 2, 1),
(31, 1, 'VAHICLE HIRE', 2, 1),
(32, 1, 'CREATIVE', 2, 1),
(33, 1, 'ASST DIRECTOR', 2, 1),
(35, 1, 'POST PRODUCTION', 2, 1),
(36, 1, 'CASTING DIRECTOR', 2, 1),
(37, 1, 'HAIR DRESSER', 2, 1),
(38, 1, 'ELECTRICIAN', 2, 1),
(39, 1, 'STUDIO MANAGER', 2, 1),
(40, 1, 'CREATIVE DIRECTOR', 2, 1),
(41, 1, 'MAKEUP MAN', 2, 1),
(42, 1, 'PROPERTY INCHARGE', 2, 1),
(43, 1, 'SECURITY GUARD', 2, 1),
(44, 1, 'SPOT BOY', 2, 1),
(45, 1, 'SWEEPER', 2, 1),
(46, 1, 'AUDITOR', 2, 1),
(47, 1, 'CASHIER', 2, 1),
(48, 1, 'PRODUCTION CONTROLLER', 2, 1),
(49, 1, 'CRANE ATTD', 2, 1),
(50, 1, 'LIGHT MAN', 2, 1),
(51, 1, 'DATA TRANSFER', 2, 1),
(52, 1, 'FLOOR ATTD', 2, 1),
(53, 1, 'OFF LINE EDITOR', 3, 1),
(54, 1, 'ON LINE EDITOR', 2, 1),
(55, 1, 'SEETING WORKER', 2, 1),
(56, 1, 'REASEARCHER', 2, 1),
(57, 1, 'MOKAP ARTIST', 2, 1),
(58, 1, 'ASST ART DIRECTOR', 2, 1),
(59, 1, 'HEAD OF PRODUCTION', 2, 1),
(60, 1, 'PRODUCTION MANAGER', 2, 1),
(61, 1, 'SCRIPT SUPERVISOR', 2, 1),
(62, 1, 'CREATIVE DIRECTOR', 2, 1),
(63, 1, 'CREATIVE HEAD', 2, 1),
(64, 1, 'ASST CREATIVE', 2, 1),
(65, 1, 'EXECUTIVE PRODUCER', 2, 1),
(66, 1, 'PRODUCTION RUNNER', 2, 1),
(67, 1, 'PRODUCTION ACCOUNTANT ', 2, 1),
(68, 1, 'COSTUME SYLIST', 2, 1),
(69, 1, 'LIGHTMAN INCHARGE', 2, 1),
(70, 1, 'ART DIRECTOR', 2, 1),
(71, 1, 'ART TEAM', 2, 1),
(72, 1, 'DRESSMAN', 2, 1),
(73, 1, 'STORM FAN ATTD.', 2, 1),
(74, 1, 'DRIVER', 2, 1),
(75, 1, 'MOCAP ARTIST', 2, 1),
(76, 1, 'PARVATI', 1, 1),
(77, 1, 'MANDODARI', 1, 1),
(78, 1, 'SHIV', 1, 1),
(79, 1, 'RAVAN', 1, 1),
(80, 2, 'SCRIPT SUPERVISOR', 2, 1),
(81, 1, 'SHANI', 1, 1),
(82, 1, 'MANDA', 1, 1),
(83, 1, 'SURYADEV', 1, 1),
(84, 1, 'SANGYA', 1, 1),
(85, 1, 'GANESHA', 1, 1),
(86, 1, 'CAMERA MAN (MAIN )', 2, 1),
(87, 1, 'CAMERA MAN ( CLASH )', 2, 1),
(88, 1, 'CAMERA MAN (OPERATIVE )', 2, 1),
(89, 1, 'CAMERA MAN (2 UNIT CLASH)', 2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `company_management`
--

CREATE TABLE `company_management` (
  `id` int(11) NOT NULL,
  `company_name` varchar(50) NOT NULL,
  `address` varchar(150) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `gst` varchar(20) NOT NULL,
  `pan` varchar(20) NOT NULL,
  `bank` varchar(30) NOT NULL,
  `branch` varchar(50) NOT NULL,
  `ac_no` varchar(20) NOT NULL,
  `ifsc` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `company_management`
--

INSERT INTO `company_management` (`id`, `company_name`, `address`, `email`, `phone`, `gst`, `pan`, `bank`, `branch`, `ac_no`, `ifsc`) VALUES
(5, 'Contiloe Production Pvt. Ltd.', 'Mumbai', 'a@a.com', '9867696515', 'a', 'a', 'a', 'a', 'a', 'a');

-- --------------------------------------------------------

--
-- Table structure for table `currentmaterial_master`
--

CREATE TABLE `currentmaterial_master` (
  `id` int(11) NOT NULL,
  `sid` int(11) NOT NULL,
  `proid` int(11) NOT NULL,
  `serviceid` int(11) NOT NULL,
  `rate` decimal(10,2) NOT NULL,
  `perunit` int(11) NOT NULL,
  `remark` varchar(255) NOT NULL,
  `status` int(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `currentmaterial_master`
--

INSERT INTO `currentmaterial_master` (`id`, `sid`, `proid`, `serviceid`, `rate`, `perunit`, `remark`, `status`) VALUES
(19, 3, 1, 1, '2000.00', 4, '', 1),
(20, 4, 1, 2, '1000.00', 1, '', 1);

-- --------------------------------------------------------

--
-- Table structure for table `document_master`
--

CREATE TABLE `document_master` (
  `id` int(11) NOT NULL,
  `pid` int(11) NOT NULL,
  `doctype` int(11) NOT NULL,
  `description` varchar(255) NOT NULL,
  `fielname` varchar(255) NOT NULL,
  `status` int(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `expensesbudget`
--

CREATE TABLE `expensesbudget` (
  `id` int(11) NOT NULL,
  `budid` int(11) NOT NULL,
  `excategory` int(11) NOT NULL,
  `expensesid` int(11) NOT NULL,
  `unit` int(11) NOT NULL,
  `qty` int(11) NOT NULL,
  `rate` int(11) NOT NULL,
  `perunit` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `expensesbudget`
--

INSERT INTO `expensesbudget` (`id`, `budid`, `excategory`, `expensesid`, `unit`, `qty`, `rate`, `perunit`) VALUES
(637, 6, 1500, 4, 0, 0, 0, 1),
(638, 6, 2, 6, 1, 1, 25000, 2),
(639, 6, 3, 7, 0, 0, 0, 1),
(640, 6, 4, 8, 0, 0, 0, 1),
(641, 6, 2520, 9, 0, 0, 0, 1),
(642, 6, 6, 10, 0, 0, 0, 1),
(643, 6, 4502, 11, 2, 13, 3540, 1),
(644, 6, 8, 13, 0, 0, 0, 1),
(645, 6, 1100, 14, 2, 13, 11500, 1),
(646, 6, 4310, 15, 1, 1, 20000, 2),
(647, 6, 1200, 16, 0, 0, 0, 1),
(648, 6, 1400, 17, 1, 29, 8100, 1),
(649, 6, 1600, 18, 1, 5, 5000, 1),
(650, 6, 4200, 19, 1, 1, 50000, 2),
(651, 6, 1600, 20, 0, 0, 0, 1),
(652, 6, 1700, 21, 1, 1, 50000, 2),
(653, 6, 1800, 22, 1, 1, 150000, 2),
(654, 6, 1900, 23, 1, 1, 25000, 2),
(655, 6, 2000, 24, 1, 29, 4000, 1),
(656, 6, 2100, 25, 1, 1, 60000, 2),
(657, 6, 2200, 26, 1, 29, 15045, 1),
(658, 6, 2515, 27, 1, 1, 100000, 2),
(659, 6, 2400, 28, 1, 29, 16300, 1),
(660, 6, 2410, 29, 2, 13, 1770, 1),
(661, 6, 2620, 30, 2, 13, 2200, 1),
(662, 6, 2610, 31, 2, 13, 1500, 1),
(663, 6, 2600, 32, 2, 13, 7500, 1),
(664, 6, 4300, 33, 1, 1, 20000, 2),
(665, 6, 4401, 34, 1, 29, 2600, 1),
(666, 6, 4412, 35, 1, 29, 2700, 1),
(667, 6, 4090, 36, 2, 13, 1000, 1),
(668, 6, 4410, 37, 2, 8, 800, 1),
(669, 6, 4050, 38, 2, 13, 5915, 1),
(670, 6, 4060, 39, 2, 13, 2366, 1),
(671, 6, 4040, 40, 2, 13, 3225, 1),
(672, 6, 4030, 41, 2, 13, 2150, 1),
(673, 6, 4414, 42, 0, 0, 0, 1),
(674, 6, 4000, 43, 2, 13, 2400, 1),
(675, 6, 4020, 44, 2, 13, 2200, 1),
(676, 6, 1410, 45, 2, 13, 6750, 1),
(677, 6, 2010, 46, 2, 13, 1500, 1),
(678, 6, 2210, 47, 2, 13, 6195, 1),
(679, 6, 2510, 48, 2, 13, 13500, 1),
(680, 6, 4020, 49, 2, 13, 2600, 1),
(681, 6, 4080, 50, 2, 13, 2700, 1),
(682, 6, 1000, 51, 1, 1, 100000, 2);

-- --------------------------------------------------------

--
-- Table structure for table `expensesgroup`
--

CREATE TABLE `expensesgroup` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `expensesgroup`
--

INSERT INTO `expensesgroup` (`id`, `name`, `status`) VALUES
(1, 'Rent', 1),
(2, 'Hiring', 1),
(3, 'Property', 1);

-- --------------------------------------------------------

--
-- Table structure for table `expenses_master`
--

CREATE TABLE `expenses_master` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `code` varchar(255) NOT NULL,
  `status` int(1) NOT NULL,
  `exgroupid` int(11) NOT NULL,
  `unit` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `expenses_master`
--

INSERT INTO `expenses_master` (`id`, `name`, `code`, `status`, `exgroupid`, `unit`) VALUES
(4, 'LIGHT HIRE', '1500', 1, 2, 1),
(6, 'LOCATION HIRE', '2', 1, 1, 2),
(7, 'GODOWN HIRE', '3', 1, 2, 1),
(8, 'TARAPA HIRE', '4', 1, 1, 1),
(9, 'GENERATOR HIRE', '2520', 1, 2, 1),
(10, 'SECURITY GUARDS', '6', 1, 1, 1),
(11, 'VEHICLE HIRE', '4502', 1, 2, 1),
(13, 'FCP MACHINE HIRE', '8', 1, 2, 1),
(14, 'CAMERA HIRE', '1100', 1, 2, 1),
(15, 'FUSED BULB', '4310', 1, 2, 2),
(16, 'JIMMY JIB / STEADY CAM HIRE', '1200', 1, 2, 1),
(17, 'JUNIOR ARTIST', '1400', 1, 2, 1),
(18, 'VANITY VANS', '1600', 1, 2, 1),
(19, 'COSTUME &amp; JEWELRY HIRE ', '4200', 1, 2, 2),
(20, 'COSTUME & JEWELRY PURCHASE', '1600', 1, 2, 1),
(21, 'PRODUCTION &amp; LIGHT MATERIAL PURCHASE', '1700', 1, 2, 2),
(22, 'SETTING PROPERTY PURCHASE', '1800', 1, 2, 2),
(23, 'ANIMAL', '1900', 1, 2, 2),
(24, 'PRODUCTION MISC EXP', '2000', 1, 2, 1),
(25, 'WATER CHARGES', '2100', 1, 3, 2),
(26, 'FOOD EXPENSE', '2200', 1, 2, 1),
(27, 'ELECTRICITY CHARGES', '2515', 1, 2, 2),
(28, 'DIESEL & PETROL CHARGES', '2400', 1, 2, 1),
(29, 'AUTO FARE FOR RUNNER / SPOT / MISC', '2410', 1, 2, 1),
(30, 'CAMERA TRANSPORT', '2620', 1, 2, 1),
(31, 'FOOD TRANSPORT CHARGES', '2610', 1, 2, 1),
(32, 'TEMPO CHARGES', '2600', 1, 2, 1),
(33, 'LOADING - UNLOADING CHARGES', '4300', 1, 2, 2),
(34, 'HAIR DRESSER CHARGES', '4401', 1, 2, 1),
(35, 'SOUND RECORDIST WITH BOOM MAN CHARGES', '4412', 1, 2, 1),
(36, 'ASSISTANT DIRECTOR', '4090', 1, 2, 1),
(37, 'STILL PHOTOGRAPHER CHARGES', '4410', 1, 2, 1),
(38, 'LIGHT MAN CHARGES', '4050', 1, 2, 1),
(39, 'ROSTRUM / CRANE / PANTHER / TROLLY ATTND CHARGES', '4060', 1, 2, 1),
(40, 'SPOT BOY CHARGES', '4040', 1, 2, 1),
(41, 'SETTING WORKER WAGES', '4030', 1, 2, 1),
(42, 'ASSISTANT ART DIRECTOR ', '4414', 1, 2, 1),
(43, 'MAKEUP MAN', '4000', 1, 2, 1),
(44, 'DRESS MAN WAGES ', '4020', 1, 2, 1),
(45, 'JUNIOR ARTIST UNIT 2', '1410', 1, 2, 1),
(46, 'PRODUCTION MISC EXP - UNIT 2', '2010', 1, 1, 1),
(47, 'FOOD EXPENSE UNIT 2', '2210', 1, 1, 1),
(48, 'DIESEL & PETROL CHARGES - UNIT 2', '2510', 1, 1, 1),
(49, 'HAIR DRESSER CHARGES - UNIT 2', '4020', 1, 1, 1),
(50, 'SOUND RECORDIST WITH BOOM MAN CHARGES - UNIT 2', '4080', 1, 1, 1),
(51, 'FIGHTER &amp; SP. EFFECT', '1000', 1, 2, 2),
(53, 'DIRECTOR', '1', 1, 1, 1),
(54, 'MAIN CAMERA MAN - UNIT 1', '2', 1, 1, 1),
(55, 'CLASH CAMERA MAN - UNIT 2', '2', 1, 1, 1),
(56, 'OPERATIVE CAMERA MAN', '2', 1, 1, 1),
(57, 'CLASH CAMERA MAN - UNIT 1', '2', 1, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `lis_artist`
--

CREATE TABLE `lis_artist` (
  `id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL,
  `proid` int(11) NOT NULL,
  `pid` int(11) NOT NULL,
  `effecitivedate` date NOT NULL,
  `rate` decimal(10,0) NOT NULL,
  `perunit` int(11) NOT NULL,
  `overtime` decimal(10,0) NOT NULL,
  `type` varchar(255) NOT NULL,
  `status` int(1) NOT NULL DEFAULT '1',
  `leavingdate` date NOT NULL,
  `creditday` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `lis_artist`
--

INSERT INTO `lis_artist` (`id`, `role_id`, `proid`, `pid`, `effecitivedate`, `rate`, `perunit`, `overtime`, `type`, `status`, `leavingdate`, `creditday`) VALUES
(28, 15, 0, 1, '2019-02-15', '14000', 1, '0', 'artist', 1, '0000-00-00', 0),
(29, 20, 0, 1, '2019-02-01', '80000', 2, '0', 'production', 1, '0000-00-00', 0),
(30, 22, 0, 1, '0000-00-00', '16000', 3, '0', 'episodic', 1, '0000-00-00', 0),
(996, 76, 1, 132, '2019-03-01', '31500', 1, '2500', 'artist', 1, '0000-00-00', 0),
(997, 77, 1, 133, '2019-03-01', '6000', 1, '500', 'artist', 1, '0000-00-00', 0),
(998, 78, 1, 134, '2019-03-01', '45000', 1, '3750', 'artist', 1, '0000-00-00', 0),
(999, 79, 1, 135, '2019-03-01', '16000', 1, '1333', 'artist', 1, '0000-00-00', 0),
(1000, 81, 1, 145, '2019-04-01', '10000', 1, '686', 'artist', 1, '2019-04-30', 75),
(1001, 82, 1, 143, '2019-04-01', '6000', 1, '462', 'artist', 1, '2019-04-30', 75),
(1002, 85, 1, 149, '2019-04-01', '3000', 1, '231', 'artist', 1, '2019-04-30', 75),
(1003, 50, 1, 115, '2019-03-01', '24725', 2, '0', 'production', 1, '0000-00-00', 25),
(1004, 62, 1, 86, '2019-03-01', '375000', 2, '0', 'production', 1, '0000-00-00', 0),
(1005, 64, 1, 51, '2019-03-01', '25000', 2, '0', 'production', 1, '0000-00-00', 0),
(1006, 63, 1, 79, '2019-03-01', '75000', 2, '0', 'production', 1, '0000-00-00', 0),
(1007, 35, 1, 68, '2019-03-01', '220000', 2, '0', 'production', 1, '0000-00-00', 0),
(1008, 63, 1, 45, '2019-03-01', '90000', 2, '0', 'production', 1, '0000-00-00', 0),
(1009, 36, 1, 55, '2019-03-01', '60000', 2, '0', 'production', 1, '0000-00-00', 0),
(1010, 33, 1, 77, '2019-03-01', '25000', 2, '0', 'production', 1, '0000-00-00', 0),
(1011, 33, 1, 74, '2019-03-01', '15000', 2, '0', 'production', 1, '0000-00-00', 0),
(1012, 33, 1, 67, '2019-03-01', '30000', 2, '0', 'production', 1, '0000-00-00', 0),
(1013, 33, 1, 76, '2019-03-01', '45000', 2, '0', 'production', 1, '0000-00-00', 0),
(1014, 33, 1, 75, '2019-03-01', '25000', 2, '0', 'production', 1, '0000-00-00', 0),
(1015, 33, 1, 66, '2019-03-01', '80000', 2, '0', 'production', 1, '0000-00-00', 0),
(1016, 33, 1, 66, '2019-03-01', '15000', 2, '0', 'production', 1, '0000-00-00', 0),
(1017, 59, 1, 128, '2019-03-01', '200000', 2, '0', 'production', 1, '0000-00-00', 0),
(1018, 65, 1, 108, '2019-03-01', '70000', 2, '0', 'production', 1, '0000-00-00', 0),
(1019, 48, 1, 107, '2019-03-01', '70000', 2, '0', 'production', 1, '0000-00-00', 0),
(1020, 60, 1, 129, '2019-03-01', '45000', 2, '0', 'production', 1, '0000-00-00', 0),
(1021, 66, 1, 78, '2019-03-01', '22000', 2, '0', 'production', 1, '0000-00-00', 0),
(1022, 67, 1, 131, '2019-03-01', '47500', 2, '0', 'production', 1, '0000-00-00', 0),
(1023, 46, 1, 104, '2019-03-01', '24000', 2, '0', 'production', 1, '0000-00-00', 0),
(1024, 68, 1, 101, '2019-03-01', '50000', 2, '0', 'production', 1, '0000-00-00', 0),
(1025, 50, 1, 116, '2019-03-01', '24725', 2, '0', 'production', 1, '0000-00-00', 0),
(1026, 50, 1, 117, '2019-03-01', '24725', 2, '0', 'production', 1, '0000-00-00', 0),
(1027, 50, 1, 118, '2019-03-01', '24725', 2, '0', 'production', 1, '0000-00-00', 0),
(1028, 50, 1, 119, '2019-03-01', '24725', 2, '0', 'production', 1, '0000-00-00', 0),
(1029, 50, 1, 120, '2019-03-01', '24725', 2, '0', 'production', 1, '0000-00-00', 0),
(1030, 50, 1, 114, '2019-03-01', '24725', 2, '0', 'production', 1, '0000-00-00', 0),
(1031, 49, 1, 111, '2019-03-01', '26875', 2, '0', 'production', 1, '0000-00-00', 0),
(1032, 49, 1, 112, '2019-03-01', '24725', 2, '0', 'production', 1, '0000-00-00', 0),
(1033, 49, 1, 113, '2019-03-01', '24725', 2, '0', 'production', 1, '0000-00-00', 0),
(1034, 44, 1, 93, '2019-03-01', '22575', 2, '0', 'production', 1, '0000-00-00', 0),
(1035, 44, 1, 94, '2019-03-01', '21500', 2, '0', 'production', 1, '0000-00-00', 0),
(1036, 44, 1, 95, '2019-03-01', '21500', 2, '0', 'production', 1, '0000-00-00', 0),
(1037, 44, 1, 96, '2019-03-01', '21500', 2, '0', 'production', 1, '0000-00-00', 0),
(1038, 44, 1, 97, '2019-03-01', '21500', 2, '0', 'production', 1, '0000-00-00', 0),
(1039, 44, 1, 98, '2019-03-01', '21500', 2, '0', 'production', 1, '0000-00-00', 0),
(1040, 70, 1, 92, '2019-03-01', '75000', 2, '0', 'production', 1, '0000-00-00', 0),
(1041, 58, 1, 125, '2019-03-01', '55000', 2, '0', 'production', 1, '0000-00-00', 0),
(1042, 71, 1, 92, '2019-03-01', '158000', 2, '0', 'production', 1, '0000-00-00', 0),
(1043, 64, 1, 87, '2019-03-01', '20000', 2, '0', 'production', 1, '0000-00-00', 0),
(1044, 41, 1, 89, '2019-03-01', '150000', 2, '0', 'production', 1, '0000-00-00', 0),
(1045, 37, 1, 81, '2019-03-01', '38000', 2, '0', 'production', 1, '0000-00-00', 0),
(1046, 72, 1, 100, '2019-03-01', '237000', 2, '0', 'production', 1, '0000-00-00', 0),
(1047, 51, 1, 122, '2019-03-01', '11000', 2, '0', 'production', 1, '0000-00-00', 0),
(1048, 39, 1, 84, '2019-03-01', '13000', 2, '0', 'production', 1, '0000-00-00', 0),
(1049, 28, 1, 59, '2019-03-01', '37500', 2, '0', 'production', 1, '0000-00-00', 0),
(1050, 42, 1, 88, '2019-03-01', '15000', 2, '0', 'production', 1, '0000-00-00', 0),
(1051, 45, 1, 103, '2019-03-01', '9000', 1, '0', 'production', 1, '0000-00-00', 0),
(1052, 45, 1, 102, '2019-03-01', '9000', 2, '0', 'production', 1, '0000-00-00', 0),
(1053, 75, 1, 127, '2019-03-01', '3800', 1, '0', 'production', 1, '0000-00-00', 0);

-- --------------------------------------------------------

--
-- Table structure for table `location_master`
--

CREATE TABLE `location_master` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `location_master`
--

INSERT INTO `location_master` (`id`, `name`, `status`) VALUES
(1, 'Saniya Studio', 1),
(2, 'Bhajanlal Studio', 1);

-- --------------------------------------------------------

--
-- Table structure for table `monthly_expense`
--

CREATE TABLE `monthly_expense` (
  `id` int(11) NOT NULL,
  `projectid` int(11) NOT NULL,
  `expensesid` int(11) NOT NULL,
  `vendorname` varchar(255) NOT NULL,
  `amount` decimal(10,2) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `monthy_budget`
--

CREATE TABLE `monthy_budget` (
  `id` int(11) NOT NULL,
  `projectid` int(11) NOT NULL,
  `month` varchar(100) NOT NULL,
  `year` varchar(100) NOT NULL,
  `episodicplan` int(11) NOT NULL,
  `planfotage1` varchar(255) NOT NULL,
  `planfotage2` varchar(255) NOT NULL,
  `planfotage3` varchar(255) NOT NULL,
  `artistunit1` decimal(10,2) NOT NULL,
  `artistunit2` decimal(10,2) NOT NULL,
  `artistunit3` decimal(10,2) NOT NULL,
  `prounit1` decimal(10,2) NOT NULL,
  `prounit2` decimal(10,2) NOT NULL,
  `prounit3` decimal(10,2) NOT NULL,
  `adminunit1` decimal(10,2) NOT NULL,
  `adminunit2` decimal(10,2) NOT NULL,
  `adminunit3` decimal(10,2) NOT NULL,
  `episicunit1` decimal(10,2) NOT NULL,
  `episicunit2` decimal(10,2) NOT NULL,
  `episicunit3` decimal(10,2) NOT NULL,
  `monthyunit1` decimal(10,2) NOT NULL,
  `monthyunit2` decimal(10,2) NOT NULL,
  `monthyunit3` decimal(10,2) NOT NULL,
  `min1` int(11) NOT NULL,
  `min2` int(11) NOT NULL,
  `min3` int(11) NOT NULL,
  `sec1` int(11) NOT NULL,
  `sec2` int(11) NOT NULL,
  `sec3` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `monthy_budget`
--

INSERT INTO `monthy_budget` (`id`, `projectid`, `month`, `year`, `episodicplan`, `planfotage1`, `planfotage2`, `planfotage3`, `artistunit1`, `artistunit2`, `artistunit3`, `prounit1`, `prounit2`, `prounit3`, `adminunit1`, `adminunit2`, `adminunit3`, `episicunit1`, `episicunit2`, `episicunit3`, `monthyunit1`, `monthyunit2`, `monthyunit3`, `min1`, `min2`, `min3`, `sec1`, `sec2`, `sec3`) VALUES
(6, 1, 'April', '2019', 32, '29', '13', '0', '2320000.00', '715000.00', '0.00', '0.00', '0.00', '0.00', '0.00', '0.00', '0.00', '17060696.00', '0.00', '0.00', '2038605.00', '1053043.00', '0.00', 19, 15, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `payable_master`
--

CREATE TABLE `payable_master` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `peopleattdance`
--

CREATE TABLE `peopleattdance` (
  `id` int(11) NOT NULL,
  `aid` int(11) NOT NULL,
  `peopletypeid` int(11) NOT NULL,
  `charecterid` int(11) NOT NULL,
  `peopleid` int(11) NOT NULL,
  `fromshifttime` varchar(255) NOT NULL,
  `toshifttime` varchar(255) NOT NULL,
  `actualfromtime` varchar(255) NOT NULL,
  `actualtotime` varchar(255) NOT NULL,
  `duration` varchar(100) NOT NULL,
  `extrahour` varchar(11) NOT NULL,
  `remarks` varchar(255) NOT NULL,
  `status` int(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `peopleattdance`
--

INSERT INTO `peopleattdance` (`id`, `aid`, `peopletypeid`, `charecterid`, `peopleid`, `fromshifttime`, `toshifttime`, `actualfromtime`, `actualtotime`, `duration`, `extrahour`, `remarks`, `status`) VALUES
(5, 0, 1, 78, 134, '08:30', '21:00', '09:00', '23:30', '0:0', '0', '', 1),
(6, 1, 0, 79, 135, '', '', '', '', '', '', '', 1),
(7, 1, 0, 81, 145, '08:30:00', '22:00:00', '', '', '', '', '', 1),
(8, 1, 0, 44, 96, '10:00:00', '22:00:00', '', '', '', '', '', 1),
(9, 1, 0, 44, 94, '10:00:00', '22:00:00', '', '', '', '', '', 1),
(10, 1, 0, 44, 95, '10:00:00', '22:00:00', '', '', '', '', '', 1),
(11, 1, 0, 44, 93, '10:00:00', '22:00:00', '', '', '', '', '', 1),
(12, 1, 0, 49, 113, '10:00:00', '22:00:00', '', '', '', '', '', 1),
(13, 1, 0, 49, 112, '10:00:00', '22:00:00', '', '', '', '', '', 1),
(14, 1, 0, 49, 111, '10:00:00', '22:00:00', '', '', '', '', '', 1),
(15, 1, 0, 50, 114, '10:00:00', '22:00:00', '', '', '', '', '', 1),
(16, 1, 0, 50, 120, '10:00:00', '22:00:00', '', '', '', '', '', 1),
(17, 1, 0, 50, 115, '10:00:00', '22:00:00', '', '', '', '', '', 1),
(18, 1, 0, 62, 86, '10:00:00', '22:00:00', '', '', '', '', '', 1),
(19, 1, 0, 64, 51, '10:00:00', '22:00:00', '', '', '', '', '', 1),
(20, 1, 0, 63, 79, '10:00:00', '22:00:00', '', '', '', '', '', 1),
(21, 1, 0, 35, 68, '10:00:00', '22:00:00', '', '', '', '', '', 1),
(22, 1, 0, 63, 45, '10:00:00', '22:00:00', '', '', '', '', '', 1),
(23, 1, 0, 36, 55, '10:00:00', '22:00:00', '', '', '', '', '', 1),
(24, 1, 0, 33, 77, '10:00:00', '22:00:00', '', '', '', '', '', 1),
(25, 1, 0, 33, 67, '10:00:00', '22:00:00', '', '', '', '', '', 1),
(26, 1, 0, 33, 76, '10:00:00', '22:00:00', '', '', '', '', '', 1),
(27, 1, 0, 33, 74, '10:00:00', '22:00:00', '', '', '', '', '', 1),
(28, 1, 0, 33, 75, '10:00:00', '22:00:00', '', '', '', '', '', 1),
(29, 1, 0, 33, 66, '10:00:00', '22:00:00', '', '', '', '', '', 1),
(30, 1, 0, 33, 66, '10:00:00', '22:00:00', '', '', '', '', '', 1),
(31, 1, 0, 59, 128, '10:00:00', '22:00:00', '', '', '', '', '', 1),
(32, 1, 0, 65, 108, '10:00:00', '22:00:00', '', '', '', '', '', 1),
(33, 1, 0, 48, 107, '10:00:00', '22:00:00', '', '', '', '', '', 1),
(34, 1, 0, 60, 129, '10:00:00', '22:00:00', '', '', '', '', '', 1),
(35, 1, 0, 66, 78, '10:00:00', '22:00:00', '', '', '', '', '', 1),
(36, 1, 0, 67, 131, '10:00:00', '22:00:00', '', '', '', '', '', 1),
(37, 1, 0, 46, 104, '10:00:00', '22:00:00', '', '', '', '', '', 1),
(38, 1, 0, 68, 101, '10:00:00', '22:00:00', '', '', '', '', '', 1),
(39, 1, 0, 50, 116, '10:00:00', '22:00:00', '', '', '', '', '', 1),
(40, 1, 0, 50, 117, '10:00:00', '22:00:00', '', '', '', '', '', 1),
(41, 1, 0, 50, 118, '10:00:00', '22:00:00', '', '', '', '', '', 1),
(42, 1, 0, 50, 119, '10:00:00', '22:00:00', '', '', '', '', '', 1),
(43, 1, 0, 44, 97, '10:00:00', '22:00:00', '', '', '', '', '', 1),
(44, 1, 0, 44, 98, '10:00:00', '22:00:00', '', '', '', '', '', 1),
(45, 1, 0, 70, 92, '10:00:00', '22:00:00', '', '', '', '', '', 1),
(46, 1, 0, 58, 125, '10:00:00', '22:00:00', '', '', '', '', '', 1),
(47, 1, 0, 71, 92, '10:00:00', '22:00:00', '', '', '', '', '', 1),
(48, 1, 0, 64, 87, '10:00:00', '22:00:00', '', '', '', '', '', 1),
(49, 1, 0, 41, 89, '10:00:00', '22:00:00', '', '', '', '', '', 1),
(50, 1, 0, 37, 81, '10:00:00', '22:00:00', '', '', '', '', '', 1),
(51, 1, 0, 72, 100, '10:00:00', '22:00:00', '', '', '', '', '', 1),
(52, 1, 0, 51, 122, '10:00:00', '22:00:00', '', '', '', '', '', 1),
(53, 1, 0, 39, 84, '10:00:00', '22:00:00', '', '', '', '', '', 1),
(54, 1, 0, 28, 59, '10:00:00', '22:00:00', '', '', '', '', '', 1),
(55, 1, 0, 42, 88, '10:00:00', '22:00:00', '', '', '', '', '', 1),
(56, 1, 0, 45, 103, '10:00:00', '22:00:00', '', '', '', '', '', 1),
(57, 1, 0, 76, 132, '', '', '', '', '', '', '', 1),
(58, 1, 0, 75, 127, '10:00:00', '22:00:00', '', '', '', '', '', 1),
(59, 1, 0, 45, 102, '10:00:00', '22:00:00', '', '', '', '', '', 1),
(60, 1, 0, 77, 133, '', '', '', '', '', '', '', 1),
(61, 1, 0, 78, 134, '', '', '', '', '', '', '', 1),
(62, 1, 0, 82, 143, '08:30:00', '22:00:00', '', '', '', '', '', 1),
(63, 1, 0, 85, 149, '', '', '', '', '', '', '', 1);

-- --------------------------------------------------------

--
-- Table structure for table `peoplerole_master`
--

CREATE TABLE `peoplerole_master` (
  `id` int(11) NOT NULL,
  `description` varchar(255) NOT NULL,
  `status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `peopletype_master`
--

CREATE TABLE `peopletype_master` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `peopletype_master`
--

INSERT INTO `peopletype_master` (`id`, `name`, `status`) VALUES
(1, 'Artist', 1),
(2, 'Production', 1),
(3, 'Episodic', 1),
(4, 'Admin Staff', 1);

-- --------------------------------------------------------

--
-- Table structure for table `people_master`
--

CREATE TABLE `people_master` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `ptypeid` int(11) NOT NULL,
  `mobileno1` decimal(10,0) NOT NULL,
  `mobileno2` decimal(10,0) NOT NULL,
  `address` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `gstno` varchar(255) NOT NULL,
  `remark` varchar(255) NOT NULL,
  `status` int(1) NOT NULL DEFAULT '1',
  `rate_per_month` decimal(10,0) NOT NULL,
  `official_working_hour` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `people_master`
--

INSERT INTO `people_master` (`id`, `name`, `ptypeid`, `mobileno1`, `mobileno2`, `address`, `email`, `gstno`, `remark`, `status`, `rate_per_month`, `official_working_hour`) VALUES
(32, 'Blue Aum Productions', 3, '0', '0', '', '', '', '', 1, '0', '21:06'),
(33, 'Vikash Pareekh', 3, '0', '0', '', '', '', '', 1, '0', '21:07'),
(34, 'Amazinations', 3, '0', '0', '', '', '', '', 1, '0', '21:09'),
(35, 'Charmaine Joseph', 3, '0', '0', '', '', '', '', 1, '0', '21:09'),
(36, 'Anjalika Gupta', 3, '0', '0', '', '', '', '', 1, '0', '21:10'),
(37, 'Niraj Prabhakar', 3, '0', '0', '', '', '', '', 1, '0', '21:10'),
(38, 'Brij Mohan Pandey', 3, '0', '0', '', '', '', '', 1, '0', '21:11'),
(39, 'Himanshu Tyagi', 3, '0', '0', '', '', '', '', 1, '0', '21:11'),
(40, 'Manikya Raju Uppaluri', 3, '0', '0', '', '', '', '', 1, '0', '21:12'),
(43, 'Amitabh Raina', 2, '0', '0', '', '', '', '', 1, '0', '13:00'),
(44, 'Riddhi Chitrodha', 3, '0', '0', '', '', '', '', 1, '0', '21:40'),
(45, 'Rakesh Chhabra', 2, '0', '0', '', '', '', '', 1, '0', '13:00'),
(46, 'Oishipriya Ghosh', 2, '0', '0', '', '', '', '', 1, '0', '13:00'),
(47, 'Rajesh Patel ', 2, '0', '0', '', '', '', '', 1, '0', '13:00'),
(50, 'Guriya Kumari', 2, '0', '0', '', '', '', '', 1, '0', '13:00'),
(51, 'Vikash Patel', 2, '0', '0', '', '', '', '', 1, '0', '13:00'),
(52, 'Rakesh Chhabra', 2, '0', '0', '', '', '', '', 1, '0', '00:00'),
(55, 'Shakti Singh', 2, '0', '0', '', '', '', '', 1, '0', '00:00'),
(56, 'Vaibhav Chauhan', 2, '0', '0', '', '', '', '', 1, '0', '13:00'),
(57, 'Artisan Studio', 2, '0', '0', '', '', '', '', 1, '0', '00:00'),
(58, 'MOTHER NATURE STTUDIOS', 2, '0', '0', '', '', '', '', 1, '0', '22:21'),
(59, 'SHASHIKANT MANDVE', 2, '0', '0', '', '', '', '', 1, '0', '22:22'),
(60, 'NITIN TRAVELS', 2, '0', '0', '', '', '', '', 1, '0', '22:22'),
(61, 'INDERJEET BAWRA', 3, '0', '0', '', '', '', '', 1, '0', '22:23'),
(62, 'F.K CORPORATION ', 2, '0', '0', '', '', '', '', 1, '0', '22:23'),
(63, 'FEROZ MOHD YUNUS KHAN', 2, '0', '0', '', '', '', '', 1, '0', '22:24'),
(64, 'DEEPAK JAISWAL', 2, '0', '0', '', '', '', '', 1, '0', '22:24'),
(65, 'VIKASH PATEL', 2, '0', '0', '', '', '', '', 1, '0', '22:25'),
(66, 'VISHAL KUMAR', 2, '0', '0', '', '', '', '', 1, '0', '22:26'),
(67, 'VINAY KUMAR', 2, '0', '0', '', '', '', '', 1, '0', '22:26'),
(68, 'MAHESH DEVRUKHAKAR', 2, '0', '0', '', '', '', '', 1, '0', '22:26'),
(69, 'SHAKTI SINGH', 2, '0', '0', '', '', '', '', 1, '0', '22:26'),
(70, 'MHATRE TRAVELS', 2, '0', '0', '', '', '', '', 1, '0', '22:27'),
(71, 'RUPESH ANANTA BHAGALI', 2, '0', '0', '', '', '', '', 1, '0', '22:27'),
(72, 'NITIN TRAVELS', 2, '0', '0', '', '', '', '', 1, '0', '22:27'),
(73, 'VIKASH KUMAR', 2, '0', '0', '', '', '', '', 1, '0', '22:29'),
(74, 'GAURAV PALIWAL', 2, '0', '0', '', '', '', '', 1, '0', '22:29'),
(75, 'DATTATRAY KHALSE', 2, '0', '0', '', '', '', '', 1, '0', '22:30'),
(76, 'SHYAMAKANT PANDEY', 2, '0', '0', '', '', '', '', 1, '0', '22:30'),
(77, 'AMIT SINGH', 2, '0', '0', '', '', '', '', 1, '0', '22:31'),
(78, 'MEHBOOB ALI ABDUL GANI ADVI', 2, '0', '0', '', '', '', '', 1, '0', '22:31'),
(79, 'MARIAM MUJAWER', 2, '0', '0', '', '', '', '', 1, '0', '22:31'),
(80, 'NARENDER GARIA', 2, '0', '0', '', '', '', '', 1, '0', '22:36'),
(81, 'NIRMALA ASHOK JANGAM', 2, '0', '0', '', '', '', '', 1, '0', '22:38'),
(82, 'AMIT KUMAR GAUTAM', 2, '0', '0', '', '', '', '', 1, '0', '22:38'),
(83, 'ROHIT SONI', 2, '0', '0', '', '', '', '', 1, '0', '22:39'),
(84, 'PRAKASH TIWARI', 2, '0', '0', '', '', '', '', 1, '0', '22:39'),
(85, 'RAKESH CHHABRA', 2, '0', '0', '', '', '', '', 1, '0', '22:39'),
(86, 'RAVI ASHOK MEHTA', 2, '0', '0', '', '', '', '', 1, '0', '22:40'),
(87, 'RAHUL YADAV', 2, '0', '0', '', '', '', '', 1, '0', '22:40'),
(88, 'MANOHAR NISHAD', 2, '0', '0', '', '', '', '', 1, '0', '22:40'),
(89, 'KACHA DIPABEN ISWAR LAL', 2, '0', '0', '', '', '', '', 1, '0', '22:41'),
(90, 'R.V. GENERATOR', 2, '0', '0', '', '', '', '', 1, '0', '22:41'),
(91, 'CAPITAL SECURITY MANAGEMENT SERVICES', 2, '0', '0', '', '', '', '', 1, '0', '22:41'),
(92, 'SANDESH GONDHALEKAR', 2, '0', '0', '', '', '', '', 1, '0', '22:43'),
(93, 'DILIP PRASAD YADAV', 2, '0', '0', '', '', '', '', 1, '0', '22:43'),
(94, 'AJAY YADAV', 2, '0', '0', '', '', '', '', 1, '0', '22:43'),
(95, 'SATYENDRA RAI', 2, '0', '0', '', '', '', '', 1, '0', '22:43'),
(96, 'KUSH KUMAR YADAV', 2, '0', '0', '', '', '', '', 1, '0', '22:43'),
(97, 'PAWAN KUMAR PATHAK', 2, '0', '0', '', '', '', '', 1, '0', '22:44'),
(98, 'VINOD YADAV', 2, '0', '0', '', '', '', '', 1, '0', '22:44'),
(99, 'SHRINIVAS VENKATY KUDUDALA', 2, '0', '0', '', '', '', '', 1, '0', '22:47'),
(100, 'TSH STYLING', 2, '0', '0', '', '', '', '', 1, '0', '22:48'),
(101, 'HABIBA KHATOON', 2, '0', '0', '', '', '', '', 1, '0', '22:48'),
(102, 'VAISHALI V. KALIYE', 2, '0', '0', '', '', '', '', 1, '0', '22:48'),
(103, 'AKKABAI BHATU RATHOD ', 2, '0', '0', '', '', '', '', 1, '0', '22:49'),
(104, 'RAJESH VISHWAKARMA', 2, '0', '0', '', '', '', '', 1, '0', '22:49'),
(105, 'MANISH JAISWAL', 2, '0', '0', '', '', '', '', 1, '0', '22:49'),
(106, 'M ILYAS SHAIKH', 2, '0', '0', '', '', '', '', 1, '0', '22:50'),
(107, 'VIRAL PUNJANI', 2, '0', '0', '', '', '', '', 1, '0', '22:50'),
(108, 'SHAILENDRA V SINGH', 2, '0', '0', '', '', '', '', 1, '0', '22:51'),
(109, 'IQBAL AHMED SHAIKH', 2, '0', '0', '', '', '', '', 1, '0', '22:51'),
(110, 'VED PRAKASH RAI', 2, '0', '0', '', '', '', '', 1, '0', '22:51'),
(111, 'RUPESH YADAV', 2, '0', '0', '', '', '', '', 1, '0', '22:52'),
(112, 'DEEPU YADAV', 2, '0', '0', '', '', '', '', 1, '0', '22:52'),
(113, 'RANJEET YADAV', 2, '0', '0', '', '', '', '', 1, '0', '22:52'),
(114, 'ASHUTOSH KUMAR CHAUBEY', 2, '0', '0', '', '', '', '', 1, '0', '22:54'),
(115, 'ARUN KUMAR PRASAD', 2, '0', '0', '', '', '', '', 1, '0', '22:54'),
(116, 'RAM DARESH PRASAD', 2, '0', '0', '', '', '', '', 1, '0', '22:54'),
(117, 'RANJEET D RAI', 2, '0', '0', '', '', '', '', 1, '0', '22:55'),
(118, 'JITENDRA KUMAR SADA', 2, '0', '0', '', '', '', '', 1, '0', '22:55'),
(119, 'MAHENDRA PRATAP YADAV', 2, '0', '0', '', '', '', '', 1, '0', '22:55'),
(120, 'DIPESH YADAV', 2, '0', '0', '', '', '', '', 1, '0', '22:55'),
(121, 'AJAY KUMAR CHAUBEY', 2, '0', '0', '', '', '', '', 1, '0', '22:55'),
(122, 'SHRIYA MATKAR', 2, '0', '0', '', '', '', '', 1, '0', '22:56'),
(123, 'JAYKANT YADAV', 2, '0', '0', '', '', '', '', 1, '0', '22:56'),
(124, 'K RAJGOPALAN', 3, '0', '0', '', '', '', '', 1, '0', '22:58'),
(125, 'JIMESH PARMAR', 2, '0', '0', '', '', '', '', 1, '0', '22:58'),
(126, 'RAM SWARTH MEHTA', 2, '0', '0', '', '', '', '', 1, '0', '22:58'),
(127, 'TABREZ R. KHAN', 2, '0', '0', '', '', '', '', 1, '0', '22:59'),
(128, 'ABHISHEK SINHA', 2, '0', '0', '', '', '', '', 1, '0', '23:00'),
(129, 'DINESH KUMAR SINGH', 2, '0', '0', '', '', '', '', 1, '0', '23:00'),
(130, 'ASHISH NARANG', 2, '0', '0', '', '', '', '', 1, '0', '20:06'),
(131, 'PIYUSH KANTELIYA', 2, '0', '0', '', '', '', '', 1, '0', '21:06'),
(132, 'AKANKSHA PURI', 1, '0', '0', '', '', '', '', 1, '0', '13:00'),
(133, 'POOJA SAHU', 1, '0', '0', '', '', '', '', 1, '0', '13:00'),
(134, 'VIVEK PANWAR', 1, '0', '0', '', '', '', '', 1, '0', '13:00'),
(135, 'PARAS CHHABDA', 1, '0', '0', '', '', '', '', 1, '0', '13:00'),
(136, 'MANOJ JAISWAL', 1, '0', '0', '', '', '', '', 1, '0', '14:39'),
(137, 'BASANT BHATT', 1, '0', '0', '', '', '', '', 1, '0', '14:40'),
(139, 'RAJESH', 1, '0', '0', '', '', '', '', 1, '0', '15:27'),
(140, 'PANKAJ MISHRA', 2, '0', '0', '', '', '', '', 1, '0', '18:09'),
(141, 'RISHI SHRIVASTAVA', 2, '9619974884', '0', 'FLAT-702, 2A VIJAY VISHAL SOCIETY,ANAND NAGAR, JOGESHWARI WEST MUMBAI-400102\n', '', 'CHIPS4884H', '', 1, '0', '18:23'),
(142, 'AISHWARYA RAJ', 1, '0', '0', '', '', '', '', 1, '0', '15:50'),
(143, 'KAMAL SHARMA', 1, '0', '0', '', '', '', '', 1, '0', '15:50'),
(144, 'VIREN SINGH', 1, '0', '0', '', '', '', '', 1, '0', '15:51'),
(145, 'DEVENDRA MISHRA', 1, '0', '0', '', '', '', '', 1, '0', '15:52'),
(146, 'PRAKASH BAROT', 2, '0', '0', '', '', '', '', 1, '0', '16:06'),
(147, 'VIKAS KUMAR', 2, '0', '0', '', '', '', '', 1, '0', '16:08'),
(148, 'AVINASH WAGHMARE', 2, '0', '0', '', '', '', '', 1, '0', '16:09'),
(149, 'RAJESH BAWANKAR', 1, '0', '0', '', '', '', '', 1, '0', '19:38'),
(150, 'CHIRANJI VYAS', 2, '0', '0', '', '', '', '', 1, '0', '20:06');

-- --------------------------------------------------------

--
-- Table structure for table `plannedexpenses`
--

CREATE TABLE `plannedexpenses` (
  `id` int(11) NOT NULL,
  `aid` int(11) NOT NULL,
  `expensiveid` int(11) NOT NULL,
  `narration` varchar(255) NOT NULL,
  `qty` int(11) NOT NULL,
  `rate` int(11) NOT NULL,
  `unit` int(11) NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  `status` int(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `plannedexpenses`
--

INSERT INTO `plannedexpenses` (`id`, `aid`, `expensiveid`, `narration`, `qty`, `rate`, `unit`, `amount`, `status`) VALUES
(504, 7, 4, '', 0, 0, 0, '0.00', 1),
(505, 7, 7, '', 0, 0, 0, '0.00', 1),
(506, 7, 8, '', 0, 0, 0, '0.00', 1),
(507, 7, 9, '', 0, 0, 0, '0.00', 1),
(508, 7, 10, '', 0, 0, 0, '0.00', 1),
(509, 7, 11, '', 0, 0, 0, '0.00', 1),
(510, 7, 13, '', 0, 0, 0, '0.00', 1),
(511, 7, 14, '', 0, 0, 0, '0.00', 1),
(512, 7, 16, '', 0, 0, 0, '0.00', 1),
(513, 7, 17, '', 0, 0, 0, '0.00', 1),
(514, 7, 18, '', 0, 0, 0, '0.00', 1),
(515, 7, 20, '', 0, 0, 0, '0.00', 1),
(516, 7, 24, '', 1, 2000, 0, '2000.00', 1),
(517, 7, 26, '', 0, 0, 0, '0.00', 1),
(518, 7, 28, '', 1, 5000, 0, '5000.00', 1),
(519, 7, 29, '', 0, 0, 0, '0.00', 1),
(520, 7, 30, '', 0, 0, 0, '0.00', 1),
(521, 7, 31, '', 0, 0, 0, '0.00', 1),
(522, 7, 32, '', 5, 1000, 0, '5000.00', 1),
(523, 7, 34, '', 2, 1200, 0, '2400.00', 1),
(524, 7, 35, '', 1, 2700, 0, '2700.00', 1),
(525, 7, 36, '', 0, 0, 0, '0.00', 1),
(526, 7, 37, '', 0, 0, 0, '0.00', 1),
(527, 7, 38, '', 0, 0, 0, '0.00', 1),
(528, 7, 39, '', 0, 0, 0, '0.00', 1),
(529, 7, 40, '', 0, 0, 0, '0.00', 1),
(530, 7, 41, '', 0, 0, 0, '0.00', 1),
(531, 7, 42, '', 0, 0, 0, '0.00', 1),
(532, 7, 43, '', 2, 1200, 0, '2400.00', 1),
(533, 7, 44, '', 0, 0, 0, '0.00', 1),
(534, 7, 45, '', 0, 0, 0, '0.00', 1),
(535, 7, 46, '', 0, 0, 0, '0.00', 1),
(536, 7, 47, '', 0, 0, 0, '0.00', 1),
(537, 7, 48, '', 0, 0, 0, '0.00', 1),
(538, 7, 49, '', 0, 0, 0, '0.00', 1),
(539, 7, 50, '', 0, 0, 0, '0.00', 1),
(540, 7, 53, '', 0, 0, 0, '0.00', 1),
(541, 7, 54, '', 0, 0, 0, '0.00', 1),
(542, 7, 55, '', 0, 0, 0, '0.00', 1),
(543, 7, 56, '', 0, 0, 0, '0.00', 1),
(544, 7, 57, '', 0, 0, 0, '0.00', 1),
(545, 7, 6, '', 0, 0, 0, '0.00', 1),
(546, 7, 15, '', 0, 0, 0, '0.00', 1),
(547, 7, 19, '', 0, 0, 0, '0.00', 1),
(548, 7, 21, '', 0, 0, 0, '0.00', 1),
(549, 7, 22, '', 0, 0, 0, '0.00', 1),
(550, 7, 23, '', 0, 0, 0, '0.00', 1),
(551, 7, 25, '', 25, 50, 0, '1250.00', 1),
(552, 7, 27, '', 0, 0, 0, '0.00', 1),
(553, 7, 33, '', 0, 0, 0, '0.00', 1),
(554, 7, 51, '', 0, 0, 0, '0.00', 1),
(555, 7, 58, '', 0, 0, 0, '0.00', 1);

-- --------------------------------------------------------

--
-- Table structure for table `production_staff_budget`
--

CREATE TABLE `production_staff_budget` (
  `id` int(11) NOT NULL,
  `budid` int(11) NOT NULL,
  `peopleid` int(11) NOT NULL,
  `roleid` int(11) NOT NULL,
  `qty` int(11) NOT NULL,
  `rate` int(11) NOT NULL,
  `perunit` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `projectdocument`
--

CREATE TABLE `projectdocument` (
  `id` int(11) NOT NULL,
  `proid` int(11) NOT NULL,
  `typedoc` int(11) NOT NULL,
  `description` varchar(255) NOT NULL,
  `filename` varchar(255) NOT NULL,
  `status` int(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `projectdocument`
--

INSERT INTO `projectdocument` (`id`, `proid`, `typedoc`, `description`, `filename`, `status`) VALUES
(9, 2, 1, 'abc', 'IMG-20190308-WA0107.jpg', 1),
(13, 1, 1, 'Camera Equipment Supplier', 'd2h-Recommended-Packs1.pdf', 1);

-- --------------------------------------------------------

--
-- Table structure for table `project_master`
--

CREATE TABLE `project_master` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `channelname` varchar(255) NOT NULL,
  `schedule` varchar(40) NOT NULL,
  `director` varchar(255) NOT NULL,
  `dop` varchar(255) NOT NULL,
  `date` date NOT NULL,
  `remark` varchar(255) NOT NULL,
  `status` int(1) NOT NULL DEFAULT '1',
  `weight_age` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `project_master`
--

INSERT INTO `project_master` (`id`, `name`, `channelname`, `schedule`, `director`, `dop`, `date`, `remark`, `status`, `weight_age`) VALUES
(1, 'Vighnaharta Ganesha', 'Sony', 'Mon to Thu', '', '', '2017-08-22', 'a', 1, 0),
(2, 'Tenali Rama', 'SAB TV', 'Mon To Fri - 8:00pm - 8:30pm', 'D1', 'DOP1', '2017-07-11', '', 1, 10);

-- --------------------------------------------------------

--
-- Table structure for table `role_master`
--

CREATE TABLE `role_master` (
  `id` int(11) NOT NULL,
  `name` varchar(25) NOT NULL,
  `status` int(1) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `role_master`
--

INSERT INTO `role_master` (`id`, `name`, `status`, `date`) VALUES
(4, 'Admin', 1, '2018-09-25'),
(5, 'User', 1, '2018-09-25'),
(6, 'Operater', 1, '2018-09-25');

-- --------------------------------------------------------

--
-- Table structure for table `scenewisedetails`
--

CREATE TABLE `scenewisedetails` (
  `id` int(11) NOT NULL,
  `asid` int(11) NOT NULL,
  `screenno` varchar(11) NOT NULL,
  `description` varchar(255) NOT NULL,
  `effect` varchar(255) NOT NULL,
  `sublocation` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `planfotage` int(11) NOT NULL,
  `status` int(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `scenewisedetails`
--

INSERT INTO `scenewisedetails` (`id`, `asid`, `screenno`, `description`, `effect`, `sublocation`, `name`, `planfotage`, `status`) VALUES
(9, 7, '  EP 283/2+', 'SHANI KA KRODH SHANT HO JATA HAI OR WO BHI SHAADI KE LIYE RAAJI HO JATA HAI MANDA SE….. SHANI AND MANDA SURYALOK ME ENTRY KR RAHE HAI…', 'DAY/EXT\n', 'CHROMA/ CORRIDOR', '81,82', 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `service_master`
--

CREATE TABLE `service_master` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `service_master`
--

INSERT INTO `service_master` (`id`, `name`, `status`) VALUES
(1, 'service1', 1),
(2, 'service 2', 1);

-- --------------------------------------------------------

--
-- Table structure for table `suppilerdocument`
--

CREATE TABLE `suppilerdocument` (
  `id` int(11) NOT NULL,
  `sid` int(11) NOT NULL,
  `doctype` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `filename` varchar(255) NOT NULL,
  `status` int(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `suppiler_category`
--

CREATE TABLE `suppiler_category` (
  `id` int(11) NOT NULL,
  `description` varchar(255) NOT NULL,
  `status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `suppiler_category`
--

INSERT INTO `suppiler_category` (`id`, `description`, `status`) VALUES
(1, 'Food Supplier', 1),
(2, 'Artist Supplier', 1),
(3, 'Camera Equipment Supplier', 1),
(4, 'Electric Equipment Supplier', 1),
(5, 'Furniture Supplier', 1),
(6, 'Car hire', 1);

-- --------------------------------------------------------

--
-- Table structure for table `suppiler_master`
--

CREATE TABLE `suppiler_master` (
  `id` int(11) NOT NULL,
  `companyname` varchar(255) NOT NULL,
  `mobile1` decimal(10,0) NOT NULL,
  `mobile2` decimal(10,0) NOT NULL,
  `contactperson` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `gstno` varchar(255) NOT NULL,
  `category` int(11) NOT NULL,
  `address` varchar(255) NOT NULL,
  `remark` varchar(255) NOT NULL,
  `status` int(1) NOT NULL DEFAULT '1',
  `credit_days` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `suppiler_master`
--

INSERT INTO `suppiler_master` (`id`, `companyname`, `mobile1`, `mobile2`, `contactperson`, `email`, `gstno`, `category`, `address`, `remark`, `status`, `credit_days`) VALUES
(3, 'Jai hanuman', '9930092334', '0', 'patil', '', '', 1, '', '', 1, 20),
(4, 'sabbir casting', '0', '0', '', '', '', 2, '', '', 1, 0),
(5, 'RAJESH ENTERPRISES', '0', '0', 'Rajesh', '', '', 5, '', '', 1, 60);

-- --------------------------------------------------------

--
-- Table structure for table `unitofmeasurement`
--

CREATE TABLE `unitofmeasurement` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `unitofmeasurement`
--

INSERT INTO `unitofmeasurement` (`id`, `name`, `status`) VALUES
(1, 'Per Day', 1),
(2, 'Per Month', 1),
(3, 'Per Episode', 1),
(4, 'Per Person', 1),
(5, 'Per Piece', 1);

-- --------------------------------------------------------

--
-- Table structure for table `user_master`
--

CREATE TABLE `user_master` (
  `id` int(11) NOT NULL,
  `user_name` varchar(50) NOT NULL,
  `user_id` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone` varchar(10) NOT NULL,
  `mobile` varchar(10) NOT NULL,
  `password` varchar(25) NOT NULL,
  `doj` date NOT NULL,
  `role` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_master`
--

INSERT INTO `user_master` (`id`, `user_name`, `user_id`, `email`, `phone`, `mobile`, `password`, `doj`, `role`) VALUES
(1, 'piyush', 'piyush', 'piyush@contiloe.in', '', '', '123456', '2019-01-01', 5),
(2, 'admin', 'admin', '', '', '', 'admin', '2019-04-02', 4);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `actualexpense`
--
ALTER TABLE `actualexpense`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `actualscenedetails`
--
ALTER TABLE `actualscenedetails`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `actualschedual`
--
ALTER TABLE `actualschedual`
  ADD PRIMARY KEY (`id`,`date`,`projectid`,`unitno`);

--
-- Indexes for table `artist_schedule`
--
ALTER TABLE `artist_schedule`
  ADD PRIMARY KEY (`id`,`date`,`projectid`,`unit`);

--
-- Indexes for table `callsheet`
--
ALTER TABLE `callsheet`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `character_master`
--
ALTER TABLE `character_master`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `company_management`
--
ALTER TABLE `company_management`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `currentmaterial_master`
--
ALTER TABLE `currentmaterial_master`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `document_master`
--
ALTER TABLE `document_master`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `expensesbudget`
--
ALTER TABLE `expensesbudget`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `expensesgroup`
--
ALTER TABLE `expensesgroup`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `expenses_master`
--
ALTER TABLE `expenses_master`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `lis_artist`
--
ALTER TABLE `lis_artist`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `location_master`
--
ALTER TABLE `location_master`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `monthly_expense`
--
ALTER TABLE `monthly_expense`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `monthy_budget`
--
ALTER TABLE `monthy_budget`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `payable_master`
--
ALTER TABLE `payable_master`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `peopleattdance`
--
ALTER TABLE `peopleattdance`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `peoplerole_master`
--
ALTER TABLE `peoplerole_master`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `peopletype_master`
--
ALTER TABLE `peopletype_master`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `people_master`
--
ALTER TABLE `people_master`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `plannedexpenses`
--
ALTER TABLE `plannedexpenses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `production_staff_budget`
--
ALTER TABLE `production_staff_budget`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `projectdocument`
--
ALTER TABLE `projectdocument`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `project_master`
--
ALTER TABLE `project_master`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `role_master`
--
ALTER TABLE `role_master`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `scenewisedetails`
--
ALTER TABLE `scenewisedetails`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `service_master`
--
ALTER TABLE `service_master`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `suppilerdocument`
--
ALTER TABLE `suppilerdocument`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `suppiler_category`
--
ALTER TABLE `suppiler_category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `suppiler_master`
--
ALTER TABLE `suppiler_master`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `unitofmeasurement`
--
ALTER TABLE `unitofmeasurement`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_master`
--
ALTER TABLE `user_master`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `actualexpense`
--
ALTER TABLE `actualexpense`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `actualscenedetails`
--
ALTER TABLE `actualscenedetails`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `actualschedual`
--
ALTER TABLE `actualschedual`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `artist_schedule`
--
ALTER TABLE `artist_schedule`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `callsheet`
--
ALTER TABLE `callsheet`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=412;

--
-- AUTO_INCREMENT for table `character_master`
--
ALTER TABLE `character_master`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=90;

--
-- AUTO_INCREMENT for table `company_management`
--
ALTER TABLE `company_management`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `currentmaterial_master`
--
ALTER TABLE `currentmaterial_master`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `document_master`
--
ALTER TABLE `document_master`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `expensesbudget`
--
ALTER TABLE `expensesbudget`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=683;

--
-- AUTO_INCREMENT for table `expensesgroup`
--
ALTER TABLE `expensesgroup`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `expenses_master`
--
ALTER TABLE `expenses_master`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;

--
-- AUTO_INCREMENT for table `lis_artist`
--
ALTER TABLE `lis_artist`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1054;

--
-- AUTO_INCREMENT for table `location_master`
--
ALTER TABLE `location_master`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `monthly_expense`
--
ALTER TABLE `monthly_expense`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `monthy_budget`
--
ALTER TABLE `monthy_budget`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `payable_master`
--
ALTER TABLE `payable_master`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `peopleattdance`
--
ALTER TABLE `peopleattdance`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;

--
-- AUTO_INCREMENT for table `peoplerole_master`
--
ALTER TABLE `peoplerole_master`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `peopletype_master`
--
ALTER TABLE `peopletype_master`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `people_master`
--
ALTER TABLE `people_master`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=151;

--
-- AUTO_INCREMENT for table `plannedexpenses`
--
ALTER TABLE `plannedexpenses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=556;

--
-- AUTO_INCREMENT for table `production_staff_budget`
--
ALTER TABLE `production_staff_budget`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `projectdocument`
--
ALTER TABLE `projectdocument`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `project_master`
--
ALTER TABLE `project_master`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `role_master`
--
ALTER TABLE `role_master`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `scenewisedetails`
--
ALTER TABLE `scenewisedetails`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `service_master`
--
ALTER TABLE `service_master`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `suppilerdocument`
--
ALTER TABLE `suppilerdocument`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `suppiler_category`
--
ALTER TABLE `suppiler_category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `suppiler_master`
--
ALTER TABLE `suppiler_master`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `unitofmeasurement`
--
ALTER TABLE `unitofmeasurement`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `user_master`
--
ALTER TABLE `user_master`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
