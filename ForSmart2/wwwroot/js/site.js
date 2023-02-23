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

        var nodesString = localStorage.getItem('nodes');


        var nodes;

        if (!nodesString)
            nodes = nodes = {
                nodeList: []
            };
        else nodes = JSON.parse(nodesString)


        var newNode = {
            'nodeId': nodeNumber,
            'x': relXPercent,
            'y': relYPercent,
        }

        nodes['nodeList'].push(newNode);


        localStorage.setItem('nodes', JSON.stringify(nodes));

    });



    $("#load-nodes").off().on("click", function (e) {
        var nodesString = localStorage.getItem('nodes');
        var nodes;

        if (!nodesString)
            nodes = nodes = {
                nodeList: []
            };
        else nodes = JSON.parse(nodesString)

        nodes.nodeList.forEach(function (val, i) {
            nodeNumber = Math.max(nodeNumber, parseInt(val['nodeId']))
            var nodeClass = "station-" + val['nodeId'];
            $(".map-container").append("<div class='node " + nodeClass + "' data-x='500px'><div class='node-content'></div></div>");

            $('.' + nodeClass).css('left', val['x'] + '%');
            $('.' + nodeClass).css('top', val['y'] + '%');
        });



    });
});


$(document).ready(function () { });