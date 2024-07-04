<h2 align="center">
Вычислитель отличий
<br>
</h2>
<div align="center">
«Вычислитель отличий» — программа, определяющая разницу между двумя структурами данных 
</div>
<br>
<div align="center">

[![Actions Status](https://github.com/rubtsovant77/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/rubtsovant77/frontend-project-46/actions)
[![Actions Status](https://github.com/rubtsovant77/frontend-project-46/actions/workflows/nodejs.yml/badge.svg)](https://github.com/rubtsovant77/frontend-project-46/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/4d216794cdc05d7f150d/maintainability)](https://codeclimate.com/github/rubtsovant77/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/4d216794cdc05d7f150d/test_coverage)](https://codeclimate.com/github/rubtsovant77/frontend-project-46/test_coverage)

</div>

## Описание 

Вычислитель отличий – программа, определяющая разницу между двумя структурами данных. Подобный механизм используется при выводе тестов или при автоматическом отслеживании изменений в конфигурационных файлах.

Возможности утилиты:
<ul>
<li>Поддержка разных входных форматов: yaml, json</li>
<li>Генерация отчета в виде plain text, stylish и json</li>
</ul>

## Установка
1. Склонировать репозиторий
```bash
git clone git@github.com:rubtsovant77/frontend-project-46.git
```
2. Перейти в папку с проектом
```bash
cd frontend-project-46
```
3. Выполнить команду make install
```bash
make install
```
<a href="https://asciinema.org/a/ROnMQQ3Gc0Dddgh2c7Y4eXteB" target="_blank"><img src="https://asciinema.org/a/ROnMQQ3Gc0Dddgh2c7Y4eXteB.svg" /></a>

## Применение
```
gendiff -h

gendiff -V

gendiff <path to file1> <path to file2>

gendiff -f plain <path to file1> <path to file2>

gendiff -f json <path to file1> <path to file2>
```
<a href="https://asciinema.org/a/zHE9sDWyH3r0HaVavYHrQjjHC" target="_blank"><img src="https://asciinema.org/a/zHE9sDWyH3r0HaVavYHrQjjHC.svg" /></a>

## Демонстрация работы
<table>
  <tr>
    <th colspan="2">Stylish formatter</th>
  </tr>
  <tr>
    <td style="width: 50%;text-align: center;">format .json</td>
    <td style="width: 50%;text-align: center;">format .yaml</td>
  </tr>
  <tr>
    <td style="width: 50%;">
      <a href="https://asciinema.org/a/wlEDxWAlQ4csUqijQpK7NeQTm" target="_blank"><img src="https://asciinema.org/a/wlEDxWAlQ4csUqijQpK7NeQTm.svg" /></a>
    </td>
    <td style="width: 50%;">
      <a href="https://asciinema.org/a/UktTwFbQvcz3rXLfOcBO1q2LL" target="_blank"><img src="https://asciinema.org/a/UktTwFbQvcz3rXLfOcBO1q2LL.svg" /></a>
    </td>
  </tr>
<table>

<table>
  <tr>
    <th colspan="2">Plain formatter</th>
  </tr>
  <tr>
    <td style="width: 50%;text-align: center;">format .json</td>
    <td style="width: 50%;text-align: center;">format .yaml</td>
  </tr>
  <tr>
    <td style="width: 50%;">
      <a href="https://asciinema.org/a/gV1jUOXrTb2uPn8QwT2uLkdnW" target="_blank"><img src="https://asciinema.org/a/gV1jUOXrTb2uPn8QwT2uLkdnW.svg" /></a>
    </td>
    <td style="width: 50%;">
      <a href="https://asciinema.org/a/4kbZ7TQH4BFwOIUQmavGKD8yi" target="_blank"><img src="https://asciinema.org/a/4kbZ7TQH4BFwOIUQmavGKD8yi.svg" /></a>
    </td>
  </tr>
<table>

<table>
  <tr>
    <th colspan="2">JSON formatter</th>
  </tr>
  <tr>
    <td style="width: 50%;text-align: center;">format .json</td>
    <td style="width: 50%;text-align: center;">format .yaml</td>
  </tr>
  <tr>
    <td style="width: 50%;">
      <a href="https://asciinema.org/a/u64lNDATFpTSshAAdQAME7gsf" target="_blank"><img src="https://asciinema.org/a/u64lNDATFpTSshAAdQAME7gsf.svg" /></a>
    </td>
    <td style="width: 50%;">
      <a href="https://asciinema.org/a/gMgORVKJ2BQmMzulJGvDVZ8mG" target="_blank"><img src="https://asciinema.org/a/gMgORVKJ2BQmMzulJGvDVZ8mG.svg" /></a>
    </td>
  </tr>
<table>