// popoto.graph.node.CountBox = {x: 16, y: 33, w: 20, h: 19};
popoto.graph.DISABLE_COUNT = true;

var positionPredifinedConstraints = [];
var employeeConstraints = [];
var carConstraints = [];
var skillConstraints = [];

function imageWidth(node, mul) {
    var min = 50;
    var max = 175;
    var size = 125;

    if (node.hasOwnProperty("count")) {
        // size = node.count * 20; // better calculate size here
        size = node.count; // better calculate size here
        if(mul)
            size = size * mul;

        if (size < min) {
            size = min;
        }
        if (size > max) {
            size = max;
        }
    }

    return size;
}

function getImageHeight(node, mul) {
    var min = 50;
    var max = 175;
    var size = 125;

    if (node.hasOwnProperty("count")) {
        // size = node.count * 20; // better calculate size here
        size = node.count; // better calculate size here
        if(mul){
            size = size * mul
        }
        if (size < min) {
            size = min;
        }
        if (size > max) {
            size = max;
        }
    }

    return size;

}


popoto.provider.nodeProviders = {
    "Mitrai": {
        "returnAttributes": ["name"],
        "constraintAttribute": "name",
        "autoExpandRelations": true,
        "getDisplayType": function (node) {
            return popoto.provider.NodeDisplayTypes.IMAGE;
        },
        "getImagePath": function (node) {
            return "./image/common/mitra_2.gif";
        },
        "getImageWidth": function(node){
            return imageWidth(node,80)
        },
        "getImageHeight": function (node) {
            return getImageHeight(node,80);
        }
    },
    "Location": {
        "returnAttributes": ["name"],
        "constraintAttribute": "name",
        "autoExpandRelations": true,
        "getIsTextDisplayed": function (node) {
            return false;
        },
        "getDisplayType": function (node) {
            return popoto.provider.NodeDisplayTypes.IMAGE;
        },
        "getImagePath": function (node) {
            var path = "./image/common/location.png";
            if (node.type === popoto.graph.node.NodeTypes.VALUE) {
                path = "./image/common/" + node.attributes.name + ".png";
            } else {
                if (node.value !== undefined) {
                    path = "./image/common/" + node.value.attributes.name + ".png";
                }
            }
//                path = "./image/employee/test.GIF";
            return path;

        },
        "getImageWidth": function(node){
            return imageWidth(node)
        },
        "getImageHeight": function (node) {
            return getImageHeight(node);
        }

        // "autoExpandRelations": true,
    },
    "Buildings": {
        "returnAttributes": ["name"],
        "constraintAttribute": "name",
        // "autoExpandRelations": true,
        "getIsTextDisplayed": function (node) {
            return false;
        },
        "getDisplayType": function (node) {
            return popoto.provider.NodeDisplayTypes.IMAGE;
        },
        "getImagePath": function (node) {
            return "./image/common/building.png";
        },
        "getImageWidth": function(node){
            return imageWidth(node)
        },
        "getImageHeight": function (node) {
            return getImageHeight(node);
        }
    },
    "Room": {
        "returnAttributes": ["name"],
        "constraintAttribute": "name",
        "autoExpandRelations": true,
        "getDisplayType": function (node) {
            return popoto.provider.NodeDisplayTypes.IMAGE;
        },
        "getImagePath": function (node) {
            return "./image/common/room.png";
        },
        "getImageWidth": function(node){
            return imageWidth(node)
        },
        "getImageHeight": function (node) {
            return getImageHeight(node);
        }
    },
    "Position": {
        "returnAttributes": ["name"],
        "constraintAttribute": "name",
        "getPredefinedConstraints": function (node) {
            return positionPredifinedConstraints;
        },
        "autoExpandRelations": true,
        "getDisplayType": function (node) {
            return popoto.provider.NodeDisplayTypes.IMAGE;
        },
        "getImagePath": function (node) {
            return "./image/common/job.png";
        },
        "getImageWidth": function(node){
            return imageWidth(node)
        },
        "getImageHeight": function (node) {
            return getImageHeight(node);
        }
    },
    "Team": {
        "returnAttributes": ["name"],
        "constraintAttribute": "name",
        "getDisplayType": function (node) {
            return popoto.provider.NodeDisplayTypes.IMAGE;
        },
        "getImagePath": function (node) {
            return "./image/common/team.png";
        },
        "getImageWidth": function(node){
            return imageWidth(node)
        },
        "getImageHeight": function (node) {
            return getImageHeight(node);
        }
    },
    "Employee": {
        "returnAttributes": ["name", "car", "isBusy"],
        "constraintAttribute": "name",
        // "autoExpandRelations": true,
        "getDisplayType": function (node) {
            return popoto.provider.NodeDisplayTypes.IMAGE;
        },
        "getPredefinedConstraints": function (node) {
            return employeeConstraints;
        },
        "getImagePath": function (node) {
            var path = "./image/common/employee_1.png";
            if (node.type === popoto.graph.node.NodeTypes.VALUE) {
                path = "./image/employee/" + node.attributes.name + ".gif"
                if(!UrlExists(path)) {
                    path = "./image/employee/person_green.svg";
                }
            } else {
                if (node.value !== undefined) {
                    path = "./image/employee/" + node.value.attributes.name + ".gif"
                    if(!UrlExists(path)) {
                        path = "./image/employee/person_green.svg";
                    }
                } else {
                    if (node.type === popoto.graph.node.NodeTypes.ROOT) {
                        path = "./image/employee/person_blue.svg";
                    } else {
                        if (node.count == 0) {
                            path = "./image/employee/person_disabled.svg";
                        } else {
                            path = "./image/common/employee_1.png";
                        }
                    }
                }
            }
//                path = "./image/employee/test.GIF";
            return path;
        },
        "getImageWidth": function(node){
            return imageWidth(node)
        },
        "getImageHeight": function (node) {
            return getImageHeight(node);
        },
        "displayResults": function (pResultElmt) {
//                console.log(pResultElmt);
        },
        "getIsTextDisplayed": function (node) {
            return false;
        },

    },
    "Skills": {
        "returnAttributes": ["name"],
        "constraintAttribute": "name",
        "autoExpandRelations": true,
        "getPredefinedConstraints": function (node) {
            return skillConstraints;
        },
        "getDisplayType": function (node) {
            return popoto.provider.NodeDisplayTypes.IMAGE;
        },
        "getImagePath": function (node) {
            return "./image/common/skill_1.png";
        },
        "getImageWidth": function(node){
            return imageWidth(node)
        },
        "getImageHeight": function (node) {
            return getImageHeight(node);
        },
        "getIsTextDisplayed": function (node) {
            return false;
        }
    },
    "Vehicle": {
        "returnAttributes": ["name"],
        "constraintAttribute": "name",
        "autoExpandRelations": true,
        "getDisplayType": function (node) {
            return popoto.provider.NodeDisplayTypes.IMAGE;
        },
        "getImagePath": function (node) {
            return "./image/common/car.png";
        },
        "getImageWidth": function(node){
            return imageWidth(node)
        },
        "getImageHeight": function (node) {
            return getImageHeight(node);
        },
        "getPredefinedConstraints": function (node) {
            return carConstraints;
        },
    },
    "Service": {
        "returnAttributes": ["name"],
        "constraintAttribute": "name",
        "autoExpandRelations": true,
        "getDisplayType": function (node) {
            return popoto.provider.NodeDisplayTypes.IMAGE;
        },
        "getImagePath": function (node) {
            return "./image/common/cloud.png";
        },
        "getImageWidth": function(node){
            return imageWidth(node)
        },
        "getImageHeight": function (node) {
            return getImageHeight(node);
        },
        "getIsTextDisplayed": function (node) {
            return false;
        },
    },
    "Client": {
        "returnAttributes": ["name"],
        "constraintAttribute": "name",
        "autoExpandRelations": true,
        "getDisplayType": function (node) {
            return popoto.provider.NodeDisplayTypes.IMAGE;
        },
        "getImagePath": function (node) {
            return "./image/common/clients.png";
        },
        "getImageWidth": function(node){
            return imageWidth(node)
        },
        "getImageHeight": function (node) {
            return getImageHeight(node);
        },
        "getIsTextDisplayed": function (node) {
            return false;
        },
    }
};


function updateTheGraph(labelName) {
    d3.select("#" + popoto.taxonomy.containerId).selectAll("ul").data([]).exit().remove();
    popoto.taxonomy.createTaxonomyPanel();
    popoto.graph.mainLabel = labelName;
    popoto.tools.reset();
}
