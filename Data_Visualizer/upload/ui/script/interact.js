
        document.getElementById('addDataButton').addEventListener('click', function () {
            document.getElementById('dataFile').click();
        });
    
        document.getElementById('addFunctionButton').addEventListener('click', function () {
            addPredefinedFunction();
        });
    
        document.getElementById('deleteFunctionButton').addEventListener('click', function () {
            document.getElementById('functionInput').value = '';
        });
    
        document.getElementById('runFunctionButton').addEventListener('click', function () {
            var functionInput = document.getElementById('functionInput').value;
    
            // Hide input and buttons
            document.getElementById('functionInput').style.display = 'none';
            document.getElementById('addDataButton').style.display = 'none';
            document.getElementById('addFunctionButton').style.display = 'none';
            document.getElementById('deleteFunctionButton').style.display = 'none';
            document.getElementById('runFunctionButton').style.display = 'none';
    
            // Show map container
            document.getElementById('mapContainer').style.display = 'block';
    
            // Call the function to initialize your map
            initializeMap();
        });
    
        document.getElementById('dataFile').addEventListener('change', function () {
            var fileInput = document.getElementById('dataFile');
            var file = fileInput.files[0];
    
            if (file && file.name.endsWith('.csv')) {
                var reader = new FileReader();
    
                reader.onload = function (e) {
                    // Display or process the contents of the CSV file here ( will be prob not used )
                    var csvContent = e.target.result;
                    alert('Data uploaded successfully!\n\nCSV Content:\n' + csvContent);
                };
    
                reader.readAsText(file);
            } else {
                alert('Please select a valid CSV file.');
            }
        });
    
        function addPredefinedFunction() {
            var predefinedFunction = "d(p,q)=sqrt {(q_{1}-p_{1})^{2}+(q_{2}-p_{2})^{2}}";
            var currentInput = document.getElementById('functionInput').value;
    
            if (currentInput) {
                document.getElementById('functionInput').value += '\n' + predefinedFunction;
            } else {
                document.getElementById('functionInput').value = predefinedFunction;
            }
        }

        function initializeMap() {
            var x_offset = 10;
            var y_offset = 10;

            var x_offset= 10;
    var y_offset= 10;
    
    // Function to generate a scaled y coordinate
    function generate_y(){
        var max_y_value = 900000.0;
        var y_coord = 0;
        return y_coord = Math.random() *  max_y_value + y_offset;
    }

     // Function to generate a scaled x coordinate
    function generate_x(){
        var max_x_value = 900000.0;
        var x_coord = 0;
        return x_coord = Math.random() *  max_x_value + x_offset;
    }

    //initialize
    var data = [];
    var y_coord = 0;
    var x_coord = 0;

    const width = 1500;
    const height = 800;

    var currentZoomLevel = 1.0;
    
    //########### dummy functions for generating data and filling data array #############

    //fill data array
    for (let i = 0; i < 2000; i++) {
        y_coord = generate_y();
        x_coord = generate_x();
        data.push([i, x_coord, y_coord]);
    }


    // Declare the y (vertical position) scale.
    const y = d3.scaleLinear()
        .domain([0, 900000]) //Zahlenbereich den Achse abbildet
        .range([0, 790]); // "Länder Achse in Pixeln"

    // Declare the x (horizontal position) scale.
    const x = d3.scaleLinear()
        .domain([0, 900000]) //Zahlenbereich den Achse abbildet
        .range([0, 1000]); //"Länder Achse in Pixeln"


    //initialize svg
    //const svg = d3.create("svg")
    const svg = d3.select("#chartContainer").append("svg")
        .attr("width", width)
        .attr("height", height)
        //.attr("viewBox", [0, 0, width, height]);
        .on("mousemove", function() {
            var mouseCoords = d3.pointer(event);
            infoMouse.select("text").text("Mouse coordinates: " + mouseCoords[0] + ", " + mouseCoords[1]);
        });

     // Add the x-axis.
    var xAxis = svg.append("g")
        .attr("transform", `translate(0,5)`)
        .call(d3.axisBottom(x));

    // Add the y-axis.
    var yAxis = svg.append("g")
        .attr("transform", `translate(0,5)`)
        .call(d3.axisRight(y));

    
    // Add dots to plot 
    svg.selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", function(d) {return d[1]; })
        .attr("cy", function(d) {return d[2]; })
        .attr("r", 2);


    // Create a zoom behavior function
    var zoom = d3.zoom()
        .scaleExtent([0,200])
        .on("zoom", handleZoom);

    // Define the event handler function for zoom
    function handleZoom(event) {
        
        //variable to store current zoom level 
        currentZoomLevel = event.transform.k;
        infoZoom.select("text").text("Zoom: "+ currentZoomLevel.toFixed(5));
        
        //Enable the rescaling of the axes
        var newX = event.transform.rescaleX(x);
        var newY = event.transform.rescaleY(y);

        // Get the new domains of the x and y scales
        var newDomainX = newX.domain();
        var newDomainY = newY.domain();
  
        // Print the new domains to the console
        //console.log("New domain of x axis: " + newDomainX);
        //console.log("New domain of y axis: " + newDomainY);

        
        // update axes with these new boundaries
        xAxis.call(d3.axisBottom(newX))
        yAxis.call(d3.axisRight(newY))

        //console.log(newX)
        //console.log(newY)

        //attach the dynamic text of Coords to InfoScalingText svg
        //scaled with .ToFixed() method to shorten the whole float
        infoScalingX.select("text").text("Xmin: " + newDomainX[0].toFixed(3) + ", Xmax: " + newDomainX[1].toFixed(3));
        infoScalingY.select("text").text("Ymin: " + newDomainY[0].toFixed(3) + ", Ymax: " + newDomainY[1].toFixed(3));

        // gives and draws new position of drawn circles
        svg.selectAll("circle")
            .attr('cx', function(d) {return newX(d[1])})
            .attr('cy', function(d) {return newY(d[2])});
        
        //svg.attr("transform", event.transform);
    }

  
    
    
    var info_height = 30;
    var info_width = 300;
    //var info_x_position = 1000;
    
    
    
    // Append a new SVG element to the existing SVG
    var infoZoom = svg.append("svg")
        .attr("width", info_width)
        .attr("height", info_height)
        .style("background-color", "white")
        .attr("transform", `translate(1030,5)`)
    
        //frame for infoZoom SVG
        infoZoom.append("rect")
            .attr("x", 0)
            .attr("y", 0)
            .attr("width", info_width)
            .attr("height", info_height)
            //.style("fill", "none")
            .style("fill", "white")
            .style("stroke", "black")
            .style("stroke-width", "1px")
            //.style("opacity", 1);

    //appends text area to Zoom SVG
    var InfoZoomText = infoZoom.append("text")
        .attr("x", 5)
        .attr("y", 20)
        .text("Zoom:" + currentZoomLevel.toFixed(5)) // toFixed(x) rounds to x decimal places
        //.attr("transform", `translate(0,0)`);

    // Append a new SVG element to the existing SVG
    var infoMouse = svg.append("svg")
        .attr("width", info_width)
        .attr("height", info_height)
        .style("background-color", "white")
        .attr("transform", `translate(1030,35)`)

        //frame for infoMouse SVG
        infoMouse.append("rect")
            .attr("x", 0)
            .attr("y", 0)
            .attr("width", info_width)
            .attr("height", info_height)
            //.style("fill", "none")
            .style("fill", "white")
            .style("stroke", "black")
            .style("stroke-width", "1px")
            //.style("opacity", 1);

    //appends text area to MouseInfo SVG
    var InfoMouseText = infoMouse.append("text")
        .attr("x", 5)
        .attr("y", 20)
        //.text("Zoom:" + currentZoomLevel.toFixed(5)) // toFixed(x) rounds to x decimal places
        //.attr("transform", `translate(0,0)`);

    // Append a new SVG element to the existing SVG
    var infoScalingX = svg.append("svg")
        .attr("width", info_width)
        .attr("height", info_height)
        .style("background-color", "white")
        .attr("transform", `translate(1030,65)`)

        //frame for infoMouse SVG
        infoScalingX.append("rect")
            .attr("x", 0)
            .attr("y", 0)
            .attr("width", info_width)
            .attr("height", info_height)
            //.style("fill", "none")
            .style("fill", "white")
            .style("stroke", "black")
            .style("stroke-width", "1px")
            //.style("opacity", 1);

    //appends text area to MouseInfo SVG
    var InfoScaling_X_Text = infoScalingX.append("text")
        .attr("x", 5)
        .attr("y", 20)
        .text("Xmin: " + 0 + ", Xmax: " + 900000.0);
        //.text("Coords")

// Append a new SVG element to the existing SVG
    var infoScalingY = svg.append("svg")
            .attr("width", info_width)
            .attr("height", info_height)
            .style("background-color", "white")
            .attr("transform", `translate(1030,95)`)

        //frame for infoMouse SVG
        infoScalingY.append("rect")
            .attr("x", 0)
            .attr("y", 0)
            .attr("width", info_width)
            .attr("height", info_height)
            //.style("fill", "none")
            .style("fill", "white")
            .style("stroke", "black")
            .style("stroke-width", "1px")
            //.style("opacity", 1);

    //appends text area to MouseInfo SVG
    var InfoScaling_Y_Text = infoScalingY.append("text")
        .attr("x", 5)
        .attr("y", 20)
        .text("Ymin: " + 0 + ", Ymax: " + 900000.0);
        //.text("Coords")
        

      // Attach the zoom behavior to the SVG element
      svg.call(zoom);
      
        }