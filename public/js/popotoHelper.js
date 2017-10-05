popoto.provider.nodeProviders = {
    "Position": {
        "returnAttributes": ["name"],
        "constraintAttribute": "name",
//            "autoExpandRelations": true,
        "getPredefinedConstraints": function (node) {
            return positionPredifinedConstraints;
        },
    },
    "Team": {
        "returnAttributes": ["name"],
        "constraintAttribute": "name",
//            "autoExpandRelations": true,
    },
    "Team": {
        "returnAttributes": ["name"],
        "constraintAttribute": "name",
//            "autoExpandRelations": true,
    },
    "Employee": {
        "returnAttributes": ["name"],
        "constraintAttribute": "name",
        "autoExpandRelations": true,
        "getDisplayType": function (node) {
            return popoto.provider.NodeDisplayTypes.IMAGE;
        },
        "getImagePath": function (node) {
            var path;
            if (node.type === popoto.graph.node.NodeTypes.VALUE) {
                path = "persons/" + node.attributes.name + ".jpg";
            } else {
                if (node.value !== undefined) {
                    path = "persons/" + node.value.attributes.name + ".jpg";
                } else {
                    if (node.type === popoto.graph.node.NodeTypes.ROOT) {
                        path = "persons/person_blue.svg";
                    } else {
                        if (node.count == 0) {
                            path = "persons/person_disabled.svg";
                        } else {
                            path = "persons/person_green.svg";
                        }``
                    }
                }
            }
            path = "person_blue.svg";
            return path;
        },
        "getImageWidth": function (node) {
            var min = 50;
            var max = 175;
            var size = 125;

            if (node.hasOwnProperty("count")) {
                size = node.count * 20; // better calculate size here

                if (size < min) {
                    size = min;
                }
                if (size > max) {
                    size = max;
                }
            }

            return size;
        },
        "getImageHeight": function (node) {
            var min = 50;
            var max = 175;
            var size = 125;

            if (node.hasOwnProperty("count")) {
                size = node.count * 20; // better calculate size here

                if (size < min) {
                    size = min;
                }
                if (size > max) {
                    size = max;
                }
            }

            return size;
        },
        "displayResults": function (pResultElmt) {
//                console.log(pResultElmt);
        }
    },
    "Skills": {
        "returnAttributes": ["name"],
        "constraintAttribute": "name",
        "autoExpandRelations": true
    },
    "Vehicle": {
        "returnAttributes": ["name"],
        "constraintAttribute": "name",
        "autoExpandRelations": true
    }
};
