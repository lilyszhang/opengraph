var url = 'https://health.usnews.com/wellness/health-buzz/articles/2018-01-05/smelling-your-partners-shirt-could-decrease-your-stress-levels-study-says'

var isUrl = require('is-url')

const ogs = require('open-graph-scraper'); //this can bypass the 403 errors
// ogs({'url': url}, function (error, results) {
//     console.log('\n\nOpen Graph Scraper');
    // console.log(results);
    // console.log(results['data']['ogTitle']);
    // console.log(results['data']['ogDescription']);
    // console.log(results['data']['ogSiteName']);
    // console.log(results['data']['ogImage']);
// })

// const scrape = require('html-metadata');
// scrape(url, function(error, metadata) {
//     console.log ('HTML Metadata')
//     console.log(metadata)
// })

// read sources from csv
var column = ['source']
require('csv-to-array')({
    file: 'sources.csv',
    columns: column
}, function (err, array) {
    var count = 0
    for (var i=0; i<array.length; i++) {
        var source = array[i]['source']
        if (isUrl(source)) {
            ogs({'url': source, 'timeout': 10000}, function (error, results) {
                if (results['success'] == true) {
                    console.log(source);
                    console.log('Title: ' + results['data']['ogTitle']);
                    console.log('Description: ' + results['data']['ogDescription']);
                    console.log('Site Name: ' + results['data']['ogSiteName']);
                    console.log('Image: ' + results['data']['ogImage']);
                }
                else {
                    console.log(source);
                    console.log(results);
                }
                console.log('\n');

            })
        }
    }
})

// check if a string is a URL
function checkUrl(url) {
        var request = false;
        if (window.XMLHttpRequest) {
                request = new XMLHttpRequest;
        } else if (window.ActiveXObject) {
                request = new ActiveXObject("Microsoft.XMLHttp");
        }

        if (request) {
                request.open("GET", url);
                if (request.status == 200) { return true; }
        }

        return false;
}
