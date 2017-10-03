d3.select("#filter-button").on("click", function (d) {
    filterData();
});
d3.select("#filter-form").on("submit", function () {
    d3.event.preventDefault();
    filterData();
    return false;
});

function filterData() {
    var value = d3.select("#constraint")[0][0].value;
    inputValue = value;
    // positionPredifinedConstraints = [value];
    console.log('input value is', inputValue);

    send(inputValue);
    // Recreate taxonomies panel
    // d3.select("#" + popoto.taxonomy.containerId).selectAll("ul").data([]).exit().remove();
    // popoto.taxonomy.createTaxonomyPanel();
    // popoto.tools.reset();
}