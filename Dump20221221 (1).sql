-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: adoptaditos
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `mascotas`
--

DROP TABLE IF EXISTS `mascotas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mascotas` (
  `id` varchar(100) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `raza` varchar(200) NOT NULL,
  `edad` int NOT NULL,
  `tamanio` varchar(200) NOT NULL,
  `zona` varchar(200) NOT NULL,
  `especial` tinyint NOT NULL,
  `sexo` varchar(2) NOT NULL,
  `compatibilidad` varchar(200) NOT NULL,
  `created_at` varchar(45) DEFAULT NULL,
  `updated_at` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mascotas`
--

LOCK TABLES `mascotas` WRITE;
/*!40000 ALTER TABLE `mascotas` DISABLE KEYS */;
INSERT INTO `mascotas` VALUES ('543c2857-5b5a-4e61-b016-bb9ecfdc8a23','Lola','gato',11,'mediano','Flores',0,'F','ninguno','2022-12-22 23:30:34','2022-12-22 23:30:34'),('8b452d05-5c3b-427d-845c-99d71dc7e953','Lola','gato',11,'mediano','Flores',0,'F','ninguno','2022-12-22 23:39:22','2022-12-22 23:39:22');
/*!40000 ALTER TABLE `mascotas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios-adoptantes`
--

DROP TABLE IF EXISTS `usuarios-adoptantes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios-adoptantes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(200) NOT NULL,
  `apellido` varchar(200) NOT NULL,
  `provincia` varchar(200) NOT NULL,
  `localidad` varchar(200) NOT NULL,
  `mail` varchar(200) NOT NULL,
  `telefono` varchar(200) NOT NULL,
  `puntuacion` int DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios-adoptantes`
--

LOCK TABLES `usuarios-adoptantes` WRITE;
/*!40000 ALTER TABLE `usuarios-adoptantes` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuarios-adoptantes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios-refugios`
--

DROP TABLE IF EXISTS `usuarios-refugios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios-refugios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(200) NOT NULL,
  `apellido` varchar(200) NOT NULL,
  `refugio` varchar(200) NOT NULL,
  `provincia` varchar(200) NOT NULL,
  `localidad` varchar(200) NOT NULL,
  `mail` varchar(200) NOT NULL,
  `telefono` varchar(200) NOT NULL,
  `puntuacion` int DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios-refugios`
--

LOCK TABLES `usuarios-refugios` WRITE;
/*!40000 ALTER TABLE `usuarios-refugios` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuarios-refugios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios_adoptantes`
--

DROP TABLE IF EXISTS `usuarios_adoptantes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios_adoptantes` (
  `int` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(200) NOT NULL,
  `apellido` varchar(200) NOT NULL,
  `provincia` varchar(200) NOT NULL,
  `localidad` varchar(200) NOT NULL,
  `mail` varchar(200) NOT NULL,
  `telefono` varchar(200) NOT NULL,
  `puntuacion` int NOT NULL,
  PRIMARY KEY (`int`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios_adoptantes`
--

LOCK TABLES `usuarios_adoptantes` WRITE;
/*!40000 ALTER TABLE `usuarios_adoptantes` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuarios_adoptantes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios_refugios`
--

DROP TABLE IF EXISTS `usuarios_refugios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios_refugios` (
  `id` varchar(200) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `apellido` varchar(200) NOT NULL,
  `refugio` varchar(200) NOT NULL,
  `provincia` varchar(200) NOT NULL,
  `localidad` varchar(200) NOT NULL,
  `mail` varchar(200) NOT NULL,
  `telefono` varchar(200) NOT NULL,
  `puntuacion` int NOT NULL,
  `created_at` varchar(45) DEFAULT NULL,
  `updated_at` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios_refugios`
--

LOCK TABLES `usuarios_refugios` WRITE;
/*!40000 ALTER TABLE `usuarios_refugios` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuarios_refugios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-22 20:58:29
