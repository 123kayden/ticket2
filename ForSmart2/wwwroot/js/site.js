// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


var isRouteCreate = false;

$(function () {
    //$(".map").hide();

    $(".map").off().on("click", function (e) {
        var posX = $(this).offset().left, posY = $(this).offset().top;
        //alert((e.pageX - posX) + ' , ' + (e.pageY - posY));

        var relx = e.pageX - posX;
        var rely = e.pageY - posY;

        var stationNumber = 1;
        var stationClass = "station-" + stationNumber;

        $(".map-container").append("<div class='station " + stationClass + "' data-x='500px'></div>");

        $('.' + stationClass).css('left', relx+'px');
        $('.' + stationClass).css('top', rely+'px');
    });
});


$(document).ready(function () { });