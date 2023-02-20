// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
var nodeNumber = 0; 

var isRouteCreate = false;

$(function () {
    //$(".map").hide();
    var mapElement = $(".map")
    mapElement.off().on("click", function (e) {
        var posX = $(this).offset().left, posY = $(this).offset().top;
        //alert((e.pageX - posX) + ' , ' + (e.pageY - posY));

        var relx = e.pageX - posX;
        var rely = e.pageY - posY;

        var mapWidth = mapElement.width()
        var mapHeight = mapElement.height()

        var relXPercent = (relx) / mapWidth*100
        var relYPercent = (rely) / mapHeight * 100;

        nodeNumber++;
        var nodeClass = "station-" + nodeNumber;
        $(".map-container").append("<div class='node " + nodeClass + "' data-x='500px'><div class='node-content'></div></div>");

        $('.' + nodeClass).css('left', relXPercent +'%');
        $('.' + nodeClass).css('top', relYPercent + '%');

        //var nodes = localStorage.getItem('nodes');
        debugger;
        var nodesString = localStorage.getItem('nodes');


        var nodes;

        if (!nodesString)
            nodes = nodes = {
                nodeList: []
            };
        else nodes = JSON.parse(nodesString)



        var newNode = {
            'nodeId': 1,
            'x': 1,
            'y': 2,
        }

        nodes['nodeList'].push(newNode);


        //nodes = {
        //   nodeList: [
        //        {
        //        'nodeId': 1,
        //        'x': 1,
        //        'y': 2,
        //        }
        //    ]
        //};

        localStorage.setItem('nodes', JSON.stringify(nodes));

    });
});


$(document).ready(function () { });