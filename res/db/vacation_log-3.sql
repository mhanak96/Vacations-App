-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 08 Maj 2022, 16:31
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
-- Struktura tabeli dla tabeli `vacation_log`
--

CREATE TABLE `vacation_log` (
  `application_id` int(11) NOT NULL,
  `id` int(11) NOT NULL,
  `user` varchar(40) NOT NULL,
  `type` varchar(40) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `replacement` varchar(40) NOT NULL,
  `comment` text NOT NULL,
  `status` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `vacation_log`
--

INSERT INTO `vacation_log` (`application_id`, `id`, `user`, `type`, `start_date`, `end_date`, `replacement`, `comment`, `status`) VALUES
(1, 1, 'Janusz Kowalski', 'Zwykły', '2021-02-01', '2021-02-02', 'Arkadiusz Nowak', '', 'Zaakceptowano'),
(2, 1, 'Janusz Kowalski', 'Zwykły', '2021-03-08', '2021-03-11', 'Arkadiusz Nowak', '', 'Zaakceptowane'),
(3, 1, 'Janusz Kowalski', 'L4', '2021-05-10', '2021-05-17', 'Arkadiusz Nowak', '', 'Zaakceptowane'),
(4, 1, 'Janusz Kowalski', 'Na żądanie', '2021-05-02', '2021-05-31', 'Arkadiusz Nowak', '', 'Odrzucono'),
(5, 2, 'Arkadiusz Nowak', 'Zwykły', '2021-07-05', '2021-07-08', 'Janusz Kowalski', '', 'Zaakceptowano'),
(6, 3, 'Danuta Sprytna', 'Zwykły', '2021-01-10', '2021-01-14', 'Sylwia Nowak', '', 'Zaakceptowane'),
(7, 1, 'Janusz Kowalski', 'Bezpłatny', '2021-11-15', '2021-11-16', 'Arkadiusz Nowak', '', 'Zaakceptowane'),
(8, 1, 'Janusz Kowalski', 'Zwykły', '2022-03-15', '2022-03-17', 'Arkadiusz Nowak', '', 'Zaakceptowano'),
(9, 3, 'Danuta Sprytna', 'L4', '2021-04-01', '2021-04-06', 'Joanna Bialkowska', '', 'Oczekuje na akceptacje'),
(10, 4, 'Janina Bogucz', 'Zwykły', '2021-04-27', '2021-04-29', 'Arkadiusz Nowak', '', 'Odrzucono przez Kierownika'),
(11, 4, 'Janina Bogucz', 'Na żądanie', '2021-11-14', '2021-11-15', 'Arkadiusz Nowak', '', 'Odrzucono przez Kierownika'),
(12, 4, 'Janina Bogucz', 'Zwykły', '2022-04-11', '2022-04-13', 'Arkadiusz Nowak', '', 'Odrzucono przez Kierownika'),
(13, 2, 'Arkadiusz Nowak', 'Zwykły', '2022-05-02', '2022-05-04', 'Janina Bogucz', '', 'Zaakceptowano'),
(67, 2, 'Arkadiusz Nowak', 'zwykly', '2022-07-01', '2022-07-07', 'Janina', '', 'Oczekuje na akceptacje HR'),
(69, 2, 'Arkadiusz Nowak', 'zadanie', '2022-02-07', '2022-02-09', 'Janina', '', 'Oczekuje na akceptacje HR'),
(70, 2, 'Arkadiusz Nowak', 'zwykly', '2022-04-01', '2022-04-01', 'Janusz', '', 'Oczekuje na akceptacje HR'),
(71, 2, 'Arkadiusz Nowak', 'zwykly', '2022-02-08', '2022-02-10', 'Janina', '', 'Oczekuje na akceptacje HR'),
(72, 2, 'Arkadiusz Nowak', 'zwykly', '2022-02-01', '2022-02-01', 'Janina', '', 'Oczekuje na akceptacje HR'),
(73, 2, 'Arkadiusz Nowak', 'zwykly', '2022-02-14', '2022-02-14', 'Janusz', '', 'Zaakceptowano'),
(74, 2, 'Arkadiusz Nowak', 'zwykly', '2022-01-15', '2022-01-15', 'Janusz', '', 'Zaakceptowane'),
(75, 2, 'Arkadiusz Nowak', 'zwykly', '2022-01-09', '2022-01-09', 'Janusz', '', 'Zaakceptowane'),
(77, 1, 'Janusz Kowalski', 'zwykly', '2022-01-04', '2022-01-10', 'Arkadiusz', '', 'Odrzucono przez HR'),
(78, 1, 'Janusz Kowalski', 'zwykly', '2022-02-08', '2022-02-08', 'Arkadiusz', '', 'Zaakceptowano'),
(79, 1, 'Janusz Kowalski', 'zwykly', '2022-01-04', '2022-01-10', 'Janina', '', 'Zaakceptowano'),
(80, 3, 'Danuta Sprytna', 'zwykly', '2022-01-31', '2022-02-23', 'w1', '', 'Oczekuje na akceptacje HR'),
(81, 3, 'Danuta Sprytna', 'zwykly', '2022-02-09', '2022-02-23', 'w1', '', 'Oczekuje na akceptacje HR'),
(82, 2, 'Arkadiusz Nowak', 'zwykly', '2022-02-08', '2022-02-08', 'Janina', '', 'Odrzucono przez HR'),
(83, 3, 'Danuta Sprytna', 'zwykly', '2022-01-04', '2022-01-10', 'Sylwia', '', 'Oczekuje na akceptacje HR'),
(84, 3, 'Danuta Sprytna', 'zwykly', '2022-02-16', '2022-02-20', 'Sylwia', '', 'Oczekuje na akceptacje HR'),
(85, 2, 'Arkadiusz Nowak', 'zwykly', '2022-02-01', '2022-02-03', 'Janusz', '', 'Odrzucono przez Kierownika'),
(86, 2, 'Arkadiusz Nowak', 'zwykly', '2022-02-01', '2022-02-01', 'Janusz', '', 'Odrzucono przez HR'),
(87, 2, 'Arkadiusz Nowak', 'zwykly', '2022-02-01', '2022-02-01', 'Janusz', '', 'Odrzucono przez Kierownika'),
(88, 2, 'Arkadiusz Nowak', 'zwykly', '2022-02-01', '2022-02-01', 'Janusz', '', 'Odrzucono przez Kierownika'),
(89, 2, 'Arkadiusz Nowak', 'zwykly', '2022-02-01', '2022-02-01', 'Janusz', '', 'Oczekuje na akceptacje HR'),
(90, 2, 'Arkadiusz Nowak', 'zwykly', '2022-02-01', '2022-02-02', 'Janusz', '', 'Odrzucono przez Kierownika'),
(91, 2, 'Arkadiusz Nowak', 'zwykly', '2022-02-01', '2022-02-01', 'Janusz', '', 'Odrzucono przez Kierownika'),
(92, 2, 'Arkadiusz Nowak', 'zwykly', '2022-02-02', '2022-02-03', 'Janusz', '', 'Odrzucono przez Kierownika'),
(93, 2, 'Arkadiusz Nowak', 'zwykly', '2022-02-01', '2022-02-01', 'Janina', '', 'Odrzucono przez Kierownika'),
(94, 1, 'Janusz Kowalski', 'zwykly', '2022-02-23', '2022-02-23', 'Arkadiusz', '', 'Oczekuje na akceptacje HR'),
(95, 3, 'Danuta Sprytna', 'zwykly', '2022-02-01', '2022-02-03', 'Sylwia', '', 'Oczekuje na akceptacje HR'),
(96, 1, 'Janusz Kowalski', 'zwykly', '2022-02-01', '2022-02-02', 'Arkadiusz', '', 'Oczekuje na akceptacje HR'),
(97, 3, 'Danuta Sprytna', 'zwykly', '2022-02-01', '2022-02-02', 'Sylwia', 'opo', 'Oczekuje na akceptacje HR'),
(98, 3, 'Danuta Sprytna', 'zwykly', '2022-02-01', '2022-02-03', 'Sylwia', '', 'Oczekuje na akceptacje HR'),
(99, 3, 'Danuta Sprytna', 'zwykly', '2022-02-01', '2022-02-01', 'Sylwia', '', 'Oczekuje na akceptacje HR'),
(100, 3, 'Danuta Sprytna', 'zwykly', '2022-02-01', '2022-02-01', 'Sylwia', '', 'Oczekuje na akceptacje HR'),
(101, 3, 'Danuta Sprytna', 'zwykly', '2022-02-01', '2022-02-01', 'Sylwia', '', 'Oczekuje na akceptacje HR'),
(102, 3, 'Danuta Sprytna', 'zwykly', '2022-02-01', '2022-02-01', 'Sylwia', '', 'Oczekuje na akceptacje HR'),
(103, 3, 'Danuta Sprytna', 'zwykly', '2022-02-01', '2022-02-01', 'Sylwia', '', 'Oczekuje na akceptacje HR'),
(104, 3, 'Danuta Sprytna', 'zwykly', '2022-02-01', '2022-02-01', 'Sylwia', '', 'Oczekuje na akceptacje HR'),
(105, 3, 'Danuta Sprytna', 'zwykly', '2022-02-01', '2022-02-01', 'Sylwia', '', 'Oczekuje na akceptacje HR'),
(106, 3, 'Danuta Sprytna', 'zwykly', '2022-02-01', '2022-02-01', 'Sylwia', '', 'Oczekuje na akceptacje HR'),
(107, 3, 'Danuta Sprytna', 'zwykly', '2022-02-01', '2022-02-01', 'Sylwia', '', 'Oczekuje na akceptacje HR'),
(108, 3, 'Danuta Sprytna', 'zwykly', '2022-02-01', '2022-02-01', 'Sylwia', '', 'Oczekuje na akceptacje HR'),
(109, 3, 'Danuta Sprytna', 'zwykly', '2022-02-01', '2022-02-01', 'Sylwia', '', 'Oczekuje na akceptacje HR'),
(110, 3, 'Danuta Sprytna', 'zwykly', '2022-02-01', '2022-02-01', 'Sylwia', '', 'Oczekuje na akceptacje HR'),
(111, 3, 'Danuta Sprytna', 'zwykly', '2022-02-01', '2022-02-01', 'Sylwia', '', 'Oczekuje na akceptacje HR'),
(112, 3, 'Danuta Sprytna', 'zwykly', '2022-02-01', '2022-02-01', 'Sylwia', '', 'Oczekuje na akceptacje HR'),
(113, 3, 'Danuta Sprytna', 'zwykly', '2022-02-01', '2022-02-01', 'Sylwia', '', 'Oczekuje na akceptacje HR'),
(114, 3, 'Danuta Sprytna', 'zwykly', '2022-02-01', '2022-02-01', 'Sylwia', '', 'Zaakceptowane'),
(115, 3, 'Danuta Sprytna', 'zwykly', '2022-02-01', '2022-02-01', 'Sylwia', '', 'Zaakceptowane'),
(116, 3, 'Danuta Sprytna', 'zwykly', '2022-02-01', '2022-02-01', 'Sylwia', '', 'Oczekuje na akceptacje HR'),
(117, 3, 'Danuta Sprytna', 'zwykly', '2022-02-01', '2022-02-01', 'Sylwia', '', 'Oczekuje na akceptacje HR'),
(118, 3, 'Danuta Sprytna', 'zwykly', '2022-02-01', '2022-02-01', 'Sylwia', '', 'Oczekuje na akceptacje HR'),
(119, 3, 'Danuta Sprytna', 'zwykly', '2022-02-01', '2022-02-01', 'Sylwia', '', 'Zaakceptowane'),
(120, 3, 'Danuta Sprytna', 'zwykly', '2022-02-01', '2022-02-01', 'Sylwia', '', 'Oczekuje na akceptacje HR'),
(121, 3, 'Danuta Sprytna', 'zwykly', '2022-02-01', '2022-02-01', 'Sylwia', '', 'Oczekuje na akceptacje HR'),
(122, 3, 'Danuta Sprytna', 'zwykly', '2022-02-01', '2022-02-03', 'Sylwia', '', 'Oczekuje na akceptacje HR'),
(123, 3, 'Danuta Sprytna', 'zwykly', '2022-07-07', '2022-07-07', 'Sylwia', '', 'Oczekuje na akceptacje HR'),
(124, 3, 'Danuta Sprytna', 'zwykly', '2022-08-03', '2022-08-03', 'Sylwia', '', 'Oczekuje na akceptacje HR'),
(125, 3, 'Danuta Sprytna', 'zwykly', '2022-02-01', '2022-02-01', 'Sylwia', '', 'Zaakceptowane'),
(126, 2, 'Arkadiusz Nowak', 'zwykly', '2022-02-01', '2022-02-03', 'Janusz', '', 'Odrzucono przez Kierownika'),
(127, 2, 'Arkadiusz Nowak', 'zwykly', '2022-02-01', '2022-02-07', 'Janusz', '', 'Oczekuje na akceptacje HR'),
(128, 2, 'Arkadiusz Nowak', 'zwykly', '2022-02-24', '2022-02-24', 'Janusz', '', 'Odrzucono przez Kierownika'),
(129, 2, 'Arkadiusz Nowak', 'zwykly', '2022-01-12', '2022-01-12', 'Janusz', '', 'Odrzucono przez Kierownika'),
(130, 2, 'Arkadiusz Nowak', 'zwykly', '2022-02-08', '2022-02-08', 'Janusz', '', 'Odrzucono przez Kierownika'),
(131, 2, 'Arkadiusz Nowak', 'zwykly', '2022-02-14', '2022-02-14', 'Janusz', '', 'Odrzucono przez Kierownika'),
(132, 2, 'Arkadiusz Nowak', 'zwykly', '2022-02-07', '2022-02-07', 'Janusz', '', 'Odrzucono przez Kierownika'),
(133, 2, 'Arkadiusz Nowak', 'zwykly', '2022-02-01', '2022-02-01', 'Janusz', '', 'Odrzucono przez Kierownika'),
(134, 2, 'Arkadiusz Nowak', 'zwykly', '2022-02-08', '2022-02-08', 'Janusz', '', 'Odrzucono przez Kierownika'),
(135, 5, 'Sylwia Nowak', 'zwykly', '2022-02-01', '2022-02-01', 'Danuta', '', 'Oczekuje na akceptacje HR'),
(136, 5, 'Sylwia Nowak', 'zwykly', '2022-02-07', '2022-02-07', 'Danuta', '', 'Oczekuje na akceptacje HR'),
(137, 5, 'Sylwia Nowak', 'zwykly', '2022-02-15', '2022-02-15', 'Danuta', '', 'Oczekuje na akceptacje HR'),
(138, 5, 'Sylwia Nowak', 'zwykly', '2022-02-01', '2022-02-01', 'Danuta', '', 'Oczekuje na akceptacje HR'),
(139, 2, 'Arkadiusz Nowak', 'zwykly', '2022-01-04', '2022-01-04', 'Janusz', '', 'Odrzucono przez Kierownika'),
(140, 1, 'Janusz Kowalski', 'zwykly', '2022-02-24', '2022-02-24', 'Arkadiusz', '', 'Oczekuje na akceptacje HR'),
(141, 1, 'Janusz Kowalski', 'zwykly', '2022-10-01', '2022-10-01', 'Janina', '', 'Oczekuje na akceptacje HR'),
(142, 1, 'Janusz Kowalski', 'zwykly', '2022-10-01', '2022-10-01', 'Arkadiusz', '', 'Oczekuje na akceptacje HR'),
(143, 2, 'Arkadiusz Nowak', 'zwykly', '2022-08-05', '2022-08-05', 'Janusz', '', 'Odrzucono przez Kierownika'),
(144, 2, 'Arkadiusz Nowak', 'zwykly', '2022-10-04', '2022-10-04', 'Janusz', '', 'Odrzucono przez Kierownika'),
(145, 1, 'Janusz Kowalski', 'zwykly', '2022-02-07', '2022-02-07', 'Arkadiusz', '', 'Oczekuje na akceptacje HR'),
(146, 1, 'Janusz Kowalski', 'zwykly', '2022-02-25', '2022-02-25', 'Arkadiusz', '', 'Oczekuje na akceptacje HR'),
(147, 1, 'Janusz Kowalski', 'zwykly', '2022-05-11', '2022-05-11', 'Arkadiusz', '', 'Oczekuje na akceptacje HR'),
(148, 1, 'Janusz Kowalski', 'zwykly', '2022-02-26', '2022-02-26', 'Janina', '', 'Oczekuje na akceptacje HR'),
(149, 1, 'Janusz Kowalski', 'zwykly', '2022-09-01', '2022-09-01', 'Janina', '', 'Oczekuje na akceptacje HR'),
(150, 2, 'Arkadiusz Nowak', 'zwykly', '2022-02-01', '2022-02-07', 'Janusz', '', 'Odrzucono przez Kierownika'),
(151, 2, 'Arkadiusz Nowak', 'zwykly', '2022-02-01', '2022-02-03', 'Janusz', '', 'Odrzucono przez Kierownika'),
(152, 2, 'Arkadiusz Nowak', 'zwykly', '2022-02-01', '2022-02-01', 'Janusz', '', 'Odrzucono przez Kierownika'),
(153, 2, 'Arkadiusz Nowak', 'zwykly', '2022-02-15', '2022-02-15', 'Janusz', '', 'Odrzucono przez Kierownika'),
(154, 2, 'Arkadiusz Nowak', 'zwykly', '2022-02-01', '2022-02-01', 'Janusz', '', 'Odrzucono przez Kierownika'),
(155, 2, 'Arkadiusz Nowak', 'zwykly', '2022-02-07', '2022-02-07', 'Janusz', '', 'Odrzucono przez Kierownika'),
(156, 2, 'Arkadiusz Nowak', 'zwykly', '2022-02-21', '2022-02-21', 'Janusz', '', 'Odrzucono przez Kierownika'),
(157, 2, 'Arkadiusz Nowak', 'zwykly', '2022-02-14', '2022-02-14', 'Janusz', '', 'Odrzucono przez Kierownika'),
(158, 2, 'Arkadiusz Nowak', 'zwykly', '2022-02-28', '2022-02-28', 'Janusz', '', 'Odrzucono przez Kierownika'),
(159, 2, 'Arkadiusz Nowak', 'zwykly', '2022-02-18', '2022-02-18', 'Janusz', '', 'Odrzucono przez Kierownika'),
(160, 2, 'Arkadiusz Nowak', 'zwykly', '2022-02-24', '2022-02-24', 'Janusz', '', 'Odrzucono przez Kierownika'),
(161, 2, 'Arkadiusz Nowak', 'zwykly', '2022-02-22', '2022-02-22', 'Janusz', '', 'Odrzucono przez Kierownika'),
(162, 2, 'Arkadiusz Nowak', 'zwykly', '2022-02-07', '2022-02-09', 'Janusz', '', 'Odrzucono przez Kierownika'),
(163, 2, 'Arkadiusz Nowak', 'zwykly', '2022-02-21', '2022-02-23', 'Janusz', '', 'Odrzucono przez Kierownika'),
(164, 2, 'Arkadiusz Nowak', 'zwykly', '2022-02-09', '2022-02-09', 'Janusz', '', 'Odrzucono przez Kierownika'),
(165, 2, 'Arkadiusz Nowak', 'zwykly', '2022-02-01', '2022-02-03', 'Janusz', '', 'Odrzucono przez Kierownika'),
(166, 2, 'Arkadiusz Nowak', 'zwykly', '2022-02-14', '2022-02-16', 'Janusz', '', 'Odrzucono przez Kierownika'),
(167, 2, 'Arkadiusz Nowak', 'zwykly', '2022-04-04', '2022-04-07', 'Janusz', '', 'Odrzucono przez Kierownika'),
(168, 2, 'Arkadiusz Nowak', 'zwykly', '2022-04-20', '2022-04-20', 'Janusz', '', 'Odrzucono przez Kierownika'),
(169, 2, 'Arkadiusz Nowak', 'zwykly', '2022-06-15', '2022-06-17', 'Janusz', '', 'Odrzucono przez Kierownika'),
(170, 2, 'Arkadiusz Nowak', 'zwykly', '2022-07-11', '2022-07-12', 'Janusz', '', 'Odrzucono przez Kierownika'),
(171, 2, 'Arkadiusz Nowak', 'zwykly', '2022-07-18', '2022-07-18', 'Janusz', '', 'Odrzucono przez Kierownika'),
(172, 2, 'Arkadiusz Nowak', 'zwykly', '2022-04-29', '2022-05-03', 'Janusz', '', 'Odrzucono przez HR'),
(173, 14, 'Jan Paragraf', 'zwykly', '2022-02-14', '2022-02-15', '', '', 'Oczekuje na akceptacje HR'),
(174, 1, 'Janusz Kowalski', 'zwykly', '2022-02-15', '2022-02-15', 'Arkadiusz', '', 'Oczekuje na akceptacje HR'),
(175, 14, 'Jan Paragraf', 'zwykly', '2022-02-07', '2022-02-08', '', '', 'Oczekuje na akceptacje HR'),
(176, 16, 'Grażyna Bonczyk', 'zwykly', '2022-02-07', '2022-02-07', '', '', 'Oczekuje na akceptacje'),
(177, 16, 'Grażyna Bonczyk', 'zwykly', '2022-02-22', '2022-02-22', '', '', 'Oczekuje na akceptacje');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `vacation_log`
--
ALTER TABLE `vacation_log`
  ADD PRIMARY KEY (`application_id`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `vacation_log`
--
ALTER TABLE `vacation_log`
  MODIFY `application_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=178;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
