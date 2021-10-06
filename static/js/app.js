
d3.json("Resources/samples.json").then(function(d){
    
   var samples = d.samples[0].sample_values;
// var ids = Object.values(samples[0].otu_ids);
// var labels = Object.values(samples[0].otu_labels); 
    console.log(samples);
        });

// Create an array of each country's numbers



// function myFunc(data) {
//     console.log(data);
// }

// d3.json('samples.json', function (data) {
//     var json = data['samples'];
//     myFunc(json);});



// // Create an array of music provider labels
// // var labels = Object.keys(data.us);
// console.log(samples)