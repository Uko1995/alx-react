import $ from 'jquery';
import _ from 'lodash';

$(document)(function() {
    $('body').append('<p>Holberton Dashboard</p>');
    $('body').append('<p>Dashboard data for the students</p>');
    $('body').append('<button>Click here to get started</button>');
    $('body').append('<p id="count"></p>');
    $('body').append('<p>Copyright - Holberton School</p>');
});

function updateCounter() {
    let count = $('#count').html() || 0;
    $('#count').html(`${parseInt(count) + 1} clicks on the button`);
}

$('button').on('click', _.debounce(updateCounter), 500, {
    'leading': true,
    'trailing': false
});