function nMetadata(nSample) {
    d3.json("./Resources/samples.json").then((data) => {
        var metadata = data.metadata;
        //console.log(metadata);

        var resultsArray = metadata.filter(function(data){
            return data.id == nSample;
        });

        //console.log(resultsArray);     
        var results = resultsArray[0];

        var panel = d3.select("#sample-metadata");
        panel.html("");

        Object.entries(results).forEach(function([k,v]) {
            panel.append("h6").text(`${k}:${v}`);
        });
    });
}

function nCharts(nSample){
    d3.json("./Resources/samples.json").then(function(data){
        var samples = data.samples;
        //console.log(samples);

        var resultsArray = samples.filter(function(data){
            return data.id === nSample;
        })

        var result = resultsArray[0];
        
        var otu_ids = result.otu_ids;
        var otu_labels = result.otu_labels;
        var sample_values = result.sample_values;
        //console.log(otu_ids);
        //console.log(otu_labels);
        //console.log(sample_values);

        var bgLayout = {
            title: "Top Cultures Found",
            margin: {t: 100, l:200}
        };

        var bgData = [
            {
                y: otu_ids.slice(0,10).map(value => `otu ${value}`).reverse(),
                x: sample_values.slice(0,10).reverse(),
                type: "bar",
                orientation: "h"
            }
        ];

        Plotly.newPlot("bar",bgData,bgLayout);

        var bcLayout = {
            title: "Cultures Per Sample", 
            xaxis: {title:"OTU IDs"},
            margin: {t:100}
        }

        var bcData = [
            {
                x: otu_ids,
                y: sample_values,
                text: otu_labels,
                mode: "markers",
                marker: {
                    size: sample_values,
                    color: otu_ids,
                }
            }
        ];

        Plotly.newPlot("bubbles",bcData, bcLayout);
    });
}


function init(){
    var selector = d3.select("#selDataset");

    d3.json("./Resources/samples.json").then(function(data){
    
        var sampNames = data.names;
        //console.log(sampNames);

        sampNames.forEach(function(name) {
            selector.append('option').text(name).property('value',name);
        })

        var sample = sampNames[0];
        nCharts(sample);
        nMetadata(sample);
    });
}

function optionChanged(nSample){
    nCharts(nSample);
    nMetadata(nSample);
};

init()