function send(value) {
    console.log('api ai has been called');
    var text = value;
    $.ajax({
        type: "POST",
        url: baseUrl + "query?v=20150910",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        headers: {
            "Authorization": "Bearer " + accessToken
        },
        data: JSON.stringify({ query: text, lang: "en", sessionId: "somerandomthing" }),
        success: function(data) {
            console.log('api.ai response', data);
            resolveIntent(data);
        },
        error: function() {
            console.log('api.ai error response', data);
        }
    });
//        setResponse("Loading...");
}

function resolveIntent(data) {
    if(data.result.metadata.intentName == "interview_schedule") {
        positionPredifinedConstraints = ["$identifier.name IN [\"" + data.result.parameters.positions + "\",\"TL\"]"];
    }

    d3.select("#" + popoto.taxonomy.containerId).selectAll("ul").data([]).exit().remove();
    popoto.taxonomy.createTaxonomyPanel();
    popoto.tools.reset();
}