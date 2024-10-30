import $ from 'jquery';
import './header.css';

$(document).ready(function() {
    $('body').append('<header><div id="logo"></div></header>');
    $('body').append('<header><h1>Holberton Dashboard</h1></header>');
});

console.log('Init header');