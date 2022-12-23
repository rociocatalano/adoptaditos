CREATE DATABASE  IF NOT EXISTS `adoptaditos` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `adoptaditos`;
-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: adoptaditos
-- ------------------------------------------------------
-- Server version	8.0.28

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
  `usuarios_refugio_id` varchar(200) DEFAULT NULL,
  `usuarios_adoptante_id` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `usuarios_refugios_id_idx` (`usuarios_refugio_id`),
  KEY `usuarios_adoptantes_id_idx` (`usuarios_adoptante_id`),
  CONSTRAINT `usuarios_adoptantes_id` FOREIGN KEY (`usuarios_adoptante_id`) REFERENCES `usuarios_adoptantes` (`id`),
  CONSTRAINT `usuarios_refugios_id` FOREIGN KEY (`usuarios_refugio_id`) REFERENCES `usuarios_refugios` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mascotas`
--

LOCK TABLES `mascotas` WRITE;
/*!40000 ALTER TABLE `mascotas` DISABLE KEYS */;
INSERT INTO `mascotas` VALUES ('2be1b20b-9a76-4293-8f05-2fc4f2bcaeac','ona','perro',5,'mediano','Villa del Parque',0,'F','ninguno',NULL,NULL,NULL,NULL),('43e30522-a125-49c1-8bbd-9826e0e23e6f','Maki','gato',1,'chico','Flores',0,'F','gato',NULL,NULL,NULL,NULL),('543c2857-5b5a-4e61-b016-bb9ecfdc8a23','Stitch','perro',8,'mediano','Devoto',0,'M','perro','2022-12-22 23:30:34','2022-12-22 23:30:34',NULL,NULL),('8b452d05-5c3b-427d-845c-99d71dc7e953','Lola','gato',11,'mediano','Flores',0,'F','ninguno','2022-12-22 23:39:22','2022-12-22 23:39:22',NULL,NULL),('b276144d-1904-4fd2-bd5e-d39bcda3960f','Rick','perro',10,'grande','San Cristobal',0,'M','ninguno',NULL,NULL,NULL,NULL),('de0438ab-8399-4af0-ace4-eb8e4286a507','ona','perro',5,'mediano','Villa del Parque',0,'F','ninguno',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `mascotas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios_adoptantes`
--

DROP TABLE IF EXISTS `usuarios_adoptantes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios_adoptantes` (
  `id` varchar(200) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `apellido` varchar(200) NOT NULL,
  `provincia` varchar(200) NOT NULL,
  `localidad` varchar(200) NOT NULL,
  `mail` varchar(200) NOT NULL,
  `telefono` varchar(200) NOT NULL,
  `puntuacion` int NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios_adoptantes`
--

LOCK TABLES `usuarios_adoptantes` WRITE;
/*!40000 ALTER TABLE `usuarios_adoptantes` DISABLE KEYS */;
INSERT INTO `usuarios_adoptantes` VALUES ('3271865c-c600-417a-a148-43f04c3444e3','Julia','Blanco','Cordoba','La Cumbre','juliablanco@gmail.com','54654212',8,'2022-12-23 16:41:08','2022-12-23 16:41:08'),('54c7b964-9316-40e6-b6a5-e9c876394cc9','Gabriel','Alvarez','Córdoba','Córdoba','gabrielalvarez@gmail.com','65653346',8,'2022-12-23 20:28:49','2022-12-23 21:26:24'),('ecc5f773-550c-484e-985e-674269443e51','Juan','Perez','Santa Fe','Rosario','juanperez@gmail.com','544232158',9,'2022-12-23 21:24:34','2022-12-23 21:24:34'),('f649b540-1506-45a5-aa63-7feae9796057','Mario','Lopez','Santa Fe','Rosario','mariolopez@gmail.com','1564653',7,'2022-12-23 16:43:38','2022-12-23 16:43:38');
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
INSERT INTO `usuarios_refugios` VALUES ('2051bf41-345f-4892-a2f0-65c280ce2b7a','Mariana','Alvarez','Patitas','Córdoba','Córdoba','marianaalvarez@gmail.com','65653346',8,'2022-12-23 15:53:04','2022-12-23 21:22:48'),('ac93eec8-204f-46aa-941e-b1af65f91192','Maria','Perez','El Campito','Córdoba','Córdoba','mariaperez@gmail.com','65653346',8,'2022-12-23 15:53:37','2022-12-23 15:53:37'),('d64567ac-eee0-4021-83a6-775007e1c92f','Maria','Perez','El Campito','Córdoba','Córdoba','mariaperez@gmail.com','65653346',8,'2022-12-23 16:03:36','2022-12-23 16:03:36'),('d8130110-afde-4ffd-96dd-17c9963e37e3','Maria','Perez','El Campito','Córdoba','Córdoba','mariaperez@gmail.com','65653346',8,'2022-12-23 16:40:23','2022-12-23 16:40:23'),('fa175e05-e756-4f7d-a976-084175c69d9e','Ana','Gomez','Patitas','CABA','CABA','anagomez@gmail.com','4545546',7,'2022-12-23 16:42:53','2022-12-23 16:42:53');
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

-- Dump completed on 2022-12-23 18:35:00
