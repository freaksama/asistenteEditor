/*
 Navicat Premium Data Transfer

 Source Server         : Localhost
 Source Server Type    : MySQL
 Source Server Version : 80100
 Source Host           : localhost:3306
 Source Schema         : books

 Target Server Type    : MySQL
 Target Server Version : 80100
 File Encoding         : 65001

 Date: 12/05/2024 13:34:25
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for libros
-- ----------------------------
DROP TABLE IF EXISTS `libros`;
CREATE TABLE `libros` (
  `id_libro` int NOT NULL AUTO_INCREMENT,
  `nombre_libro` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `descripcion` varchar(512) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `genero` varchar(32) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `etiquetas` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `id_usuario` int DEFAULT NULL,
  `fecha_reg` datetime DEFAULT NULL,
  `fecha_mod` datetime DEFAULT NULL,
  `activo` varchar(1) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id_libro`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- ----------------------------
-- Table structure for sagas
-- ----------------------------
DROP TABLE IF EXISTS `sagas`;
CREATE TABLE `sagas` (
  `id_saga` int NOT NULL AUTO_INCREMENT,
  `nombre_saga` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `id_usuario` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `activo` varchar(1) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id_saga`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- ----------------------------
-- Table structure for usuarios
-- ----------------------------
DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE `usuarios` (
  `id_usuario` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(32) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `apellidos` varchar(32) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `correo` varchar(128) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `alias` varchar(32) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `fecha_reg` datetime DEFAULT NULL,
  `fecha_mod` datetime DEFAULT NULL,
  `activo` varchar(1) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

SET FOREIGN_KEY_CHECKS = 1;
