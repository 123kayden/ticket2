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

        $(".map-container").append("<div class='station'></div>");


    });
});


$(document).ready(function () { });