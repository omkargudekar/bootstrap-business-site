Frontend Files
---------------

Inside 'public' folder



How to run
--------------

npm install

npm install mysql

npm install -g nodemon

nodemon bin/www


MySQL Dump
-----------------
CREATE DATABASE  IF NOT EXISTS `cmpe280` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `cmpe280`;
-- MySQL dump 10.13  Distrib 5.6.19, for osx10.7 (i386)
--
-- Host: localhost    Database: cmpe280
-- ------------------------------------------------------
-- Server version	5.6.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `download_request`
--

DROP TABLE IF EXISTS `download_request`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `download_request` (
  `download_id` int(11) NOT NULL AUTO_INCREMENT,
  `fname` varchar(255) DEFAULT NULL,
  `lname` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`download_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `download_request`
--

LOCK TABLES `download_request` WRITE;
/*!40000 ALTER TABLE `download_request` DISABLE KEYS */;
INSERT INTO `download_request` VALUES (1,'Omkar','Gudekar','omkar.gudekar@sjsu.edu'),(2,'Sagar','Bendale','sagar.bendale@gmail.com'),(3,'Harsh','Malewar','harsh.malewar@gmail.com'),(4,'Siddharth','Warang','sid.war@gmail.com'),(5,'omkar','gudekar','omkargudekar@gmail.com'),(6,'sagar','bendale','sagar.bendale@gmail.com');
/*!40000 ALTER TABLE `download_request` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'cmpe280'
--

--
-- Dumping routines for database 'cmpe280'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-11-01  2:43:45
