var url = 'https://health.usnews.com/wellness/health-buzz/articles/2018-01-05/smelling-your-partners-shirt-could-decrease-your-stress-levels-study-says'

const ogs = require('open-graph-scraper'); //this can bypass the 403 errors
ogs({'url': url}, function (error, results) {
    console.log('\n\nOpen Graph Scraper');
    console.log(results['data']['ogTitle']);
    console.log(results['data']['ogDescription']);
    console.log(results['data']['ogSiteName']);
    console.log(results['data']['ogImage']);
})

const scrape = require('html-metadata');
scrape(url, function(error, metadata) {
    console.log ('HTML Metadata')
    console.log(metadata)
})
