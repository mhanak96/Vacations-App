-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 03 Cze 2022, 21:24
-- Wersja serwera: 10.4.21-MariaDB
-- Wersja PHP: 7.3.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `application`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `vacation_data`
--

CREATE TABLE `vacation_data` (
  `id` int(20) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `second_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `departament` varchar(255) NOT NULL,
  `vacation_total` int(20) NOT NULL,
  `vacation_on` tinyint(1) NOT NULL,
  `job_title` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `vacation_data`
--

INSERT INTO `vacation_data` (`id`, `first_name`, `second_name`, `email`, `password`, `role`, `departament`, `vacation_total`, `vacation_on`, `job_title`) VALUES
(1, 'Janusz', 'Kowalski', 'jkowalski@wp.pl', 'abc', 'Kierownik', 'Produkcja', 16, 11, 'Dyrektor Produkcji'),
(2, 'Arkadiusz', 'Nowak', 'arkadiusznowak@wp.pl', 'def', 'Pracownik', 'Produkcja', 7, 86, 'specjalista ds. produkcji'),
(3, 'Danuta', 'Sprytna', 'dsprytna@wp.pl', 'ghi', 'HR', 'HR', 20, 8, 'Kierownik kadr'),
(4, 'Janina', 'Bogucz', 'jbogucz@wp.pl', '123', 'Pracownik', 'Produkcja', 23, 2, 'Starszy referent'),
(5, 'Sylwia', 'Nowak', 'snowak@wp.pl', 'jkl', 'HR', 'HR', 14, 8, 'specjalista ds. Kadr'),
(13, 'Hernyk', 'Koszel', 'popop@wp.pl', 'def', 'Pracownik', 'Produkcja', 20, 30, 'opop'),
(14, 'Jan', 'Paragraf', 'jp@wp.pl', 'abc', 'Kierownik', 'Prawny', 16, 14, 'Radca Prawny'),
(15, 'Jakub', 'Jurewicz', 'jj@wp.pl', 'abc', 'Pracownik', 'Prawny', 15, 5, 'specjalista ds. prawnych'),
(16, 'Grażyna', 'Bonczyk', 'gb@wp.pl', 'abc', 'Pracownik', 'Księgowość', 10, 5, 'specjalista ds. księgowości');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
