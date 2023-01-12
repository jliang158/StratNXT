const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(3001)