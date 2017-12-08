var width = $('svg').width();
var height = $('svg').height();
var simulation = d3.forceSimulation();
var graph = {nodes:[],links:[]};


    // simulation.force("charge", d3.forceManyBody())
    // simulation.force("link", d3.forceLink().id(function(d) { return d.id; }))

updateForce = () => {
            simulation
        .nodes(graph.nodes)

    simulation.force('center',null)
    simulation.force('collide',null)
    simulation.force('link',null)
    simulation.force('charge',null)

    let code_text = "var simulation = d3.forceSimulation()";
    if(d3.select('#center_check').node().checked){
        let x = d3.select('#center_x_value').node().value;
        let y = d3.select('#center_y_value').node().value;
        simulation.force("center", d3.forceCenter(x,y));
        code_text += '\n' + '\t.force("center", d3.forceCenter('+x+', '+y+'));'
    }

    if(d3.select('#collide_check').node().checked){
        let radius = d3.select('#collide_radius_value').node().value;
        let strength = d3.select('#collide_strength_value').node().value;
        let iterations = d3.select('#collide_iterations_value').node().value;
        simulation.force("collide", d3.forceCollide()
                                            .radius(radius)
                                            .strength(strength)
                                            .iterations(iterations));
        code_text += '\n' + `\t.force("collide", d3.forceCollide()
            .radius(`+radius+`)
            .strength(`+strength+`)
            .iterations(`+iterations+`));`
    }

    if(d3.select('#link_check').node().checked){
        let distance = d3.select('#link_distance_value').node().value;
        let strength = d3.select('#link_strength_value').node().value;
        let iterations = d3.select('#link_iterations_value').node().value;
        simulation.force("link", d3.forceLink()
                                            .id(function(d) { return d.id; })
                                            .distance(distance)
                                            .strength(strength)
                                            .iterations(iterations)
                        )
        // simulation
        // .nodes(graph.nodes)
        // .on("tick", ticked);

        simulation.force("link").links(graph.links);

        code_text += '\n' + `\t.force("link", d3.forceLink()
            .id(function(d) { return d.id; })
            .distance(`+distance+`)
            .strength(`+strength+`)
            .iterations(`+iterations+`));`
    
    }

    if(d3.select('#charge_check').node().checked){
        let theta = d3.select('#charge_theta_value').node().value;
        let strength = d3.select('#charge_strength_value').node().value;
        let min_distance = d3.select('#charge_min_distance_value').node().value;
        let max_distance = d3.select('#charge_max_distance_value').node().value;
        simulation.force("charge", d3.forceManyBody()
                                            .theta(theta)
                                            .strength(strength)
                                            .distanceMin(min_distance)
                                            .distanceMax(max_distance)
                        )
        // .on("tick", ticked);

        // simulation.force("charge").links(graph.links);
        code_text += '\n' + `\t.force("charge", d3.forceManyBody()
            .theta(`+theta+`)
            .strength(`+strength+`)
            .distanceMin(`+min_distance+`)
            .distanceMax(`+max_distance+`));`
    
    }


    $('pre code').text(code_text)
    // .force("link", d3.forceLink().id(function(d) { return d.id; }))
    // .force("charge", d3.forceManyBody())
    // .force("center", d3.forceCenter(width / 2, height / 2));`)

    $(document).ready(function() {
    $('pre code').each(function(i, block) {
        hljs.highlightBlock(block);
    });
    });

    simulation.alpha(1);
    simulation.restart();
}
updateForce();


setUpdates = () => {

    // Center
    d3.select('#center_check').on('click',updateForce);
    d3.select('#center_x_value').on('input',()=>{
        d3.select('#center_x').node().value = d3.select('#center_x_value').node().value;
        updateForce();
    });
    d3.select('#center_x').on('input',()=>{
        d3.select('#center_x_value').node().value = d3.select('#center_x').node().value;
        updateForce();
    });
    d3.select('#center_y_value').on('input',()=>{
        d3.select('#center_y').node().value = d3.select('#center_y_value').node().value;
        updateForce();
    });
    d3.select('#center_y').on('input',()=>{
        d3.select('#center_y_value').node().value = d3.select('#center_y').node().value;
        updateForce();
    });

    // Collide
    d3.select('#collide_check').on('click',updateForce);
    d3.select('#collide_radius_value').on('input',()=>{
        d3.select('#collide_radius').node().value = d3.select('#collide_radius_value').node().value;
        updateForce();
    });
    d3.select('#collide_radius').on('input',()=>{
        d3.select('#collide_radius_value').node().value = d3.select('#collide_radius').node().value;
        updateForce();
    });
    d3.select('#collide_strength_value').on('input',()=>{
        d3.select('#collide_strength').node().value = d3.select('#collide_strength_value').node().value;
        updateForce();
    });
    d3.select('#collide_strength').on('input',()=>{
        d3.select('#collide_strength_value').node().value = d3.select('#collide_strength').node().value;
        updateForce();
    });
    d3.select('#collide_iterations_value').on('input',()=>{
        d3.select('#collide_iterations').node().value = d3.select('#collide_iterations_value').node().value;
        updateForce();
    });
    d3.select('#collide_iterations').on('input',()=>{
        d3.select('#collide_iterations_value').node().value = d3.select('#collide_iterations').node().value;
        updateForce();
    });


    // Link
    d3.select('#link_check').on('click',updateForce);
    d3.select('#link_distance_value').on('input',()=>{
        d3.select('#link_distance').node().value = d3.select('#link_distance_value').node().value;
        updateForce();
    });
    d3.select('#link_distance').on('input',()=>{
        d3.select('#link_distance_value').node().value = d3.select('#link_distance').node().value;
        updateForce();
    });
    d3.select('#link_strength_value').on('input',()=>{
        d3.select('#link_strength').node().value = d3.select('#link_strength_value').node().value;
        updateForce();
    });
    d3.select('#link_strength').on('input',()=>{
        d3.select('#link_strength_value').node().value = d3.select('#link_strength').node().value;
        updateForce();
    });
    d3.select('#link_iterations_value').on('input',()=>{
        d3.select('#link_iterations').node().value = d3.select('#link_iterations_value').node().value;
        updateForce();
    });
    d3.select('#link_iterations').on('input',()=>{
        d3.select('#link_iterations_value').node().value = d3.select('#link_iterations').node().value;
        updateForce();
    });


    // Charge
    d3.select('#charge_check').on('click',updateForce);
    d3.select('#charge_theta_value').on('input',()=>{
        d3.select('#charge_theta').node().value = d3.select('#charge_theta_value').node().value;
        updateForce();
    });
    d3.select('#charge_theta').on('input',()=>{
        d3.select('#charge_theta_value').node().value = d3.select('#charge_theta').node().value;
        updateForce();
    });
    d3.select('#charge_strength_value').on('input',()=>{
        d3.select('#charge_strength').node().value = d3.select('#charge_strength_value').node().value;
        updateForce();
    });
    d3.select('#charge_strength').on('input',()=>{
        d3.select('#charge_strength_value').node().value = d3.select('#charge_strength').node().value;
        updateForce();
    });
    d3.select('#charge_min_distance_value').on('input',()=>{
        d3.select('#charge_min_distance').node().value = d3.select('#charge_min_distance_value').node().value;
        updateForce();
    });
    d3.select('#charge_min_distance').on('input',()=>{
        d3.select('#charge_min_distance_value').node().value = d3.select('#charge_min_distance').node().value;
        updateForce();
    });
    d3.select('#charge_max_distance_value').on('input',()=>{
        d3.select('#charge_max_distance').node().value = d3.select('#charge_max_distance_value').node().value;
        updateForce();
    });
    d3.select('#charge_max_distance').on('input',()=>{
        d3.select('#charge_max_distance_value').node().value = d3.select('#charge_max_distance').node().value;
        updateForce();
    });

}
setUpdates();

updateGraph = () => {
    simulation.alpha(1);
    graph = d3.select('#graph-input').text()
    graph = JSON.parse(graph);
    console.log(graph)

    var svg = d3.select("svg"),
    width = $('svg').width();
    height = $('svg').height();

    svg.selectAll('g').remove();



var color = d3.scaleOrdinal(d3.schemeCategory10);


    var link = svg.append("g")
        .attr("class", "links")
    .selectAll("line")
    .data(graph.links)
    .enter().append("line")
        .attr("stroke-width", function(d) { return Math.sqrt(d.value); });

    var node = svg.append("g")
        .attr("class", "nodes")
    .selectAll("circle")
    .data(graph.nodes)
    .enter().append("circle")
        .attr("r", 5)
        .attr("fill", function(d) { return color(d.group); })
        .call(d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended));

    node.append("title")
        .text(function(d) { return d.id; });

    simulation
        .on("tick", ticked);


    function ticked() {
    link
        .attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    node
        .attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; });
    }

function dragstarted(d) {
    if (!d3.event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
}

function dragged(d) {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
}

function dragended(d) {
    if (!d3.event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
}
updateForce();
}
updateGraph();
