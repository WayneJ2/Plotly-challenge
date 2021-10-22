27:30


function init(){
    var selector = d3.select("#selDataset");

    d3.json("Resources/samples.json").then(function(d){
    
        var sampNames = d.names;

        sampNames.forEach(function(name) {
            selector.append('option').text(name).property('value',name)

        })

        var samples = sampNames[0];

        sampList = d.samples;
        var results = sampList.filter(function(samp){
            return samp.id === samples;
        }

        var ids = 
    })
 
}


init()