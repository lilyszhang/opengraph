# opengraph

Playing around with different packages in JavaScript and Python to find best tool for source extraction

#### Python
* [python-opengraph](https://github.com/HenrikOssipoff/python-opengraph/)
* [webpreview](https://github.com/ludbek/webpreview)
* [metadata_parser](https://github.com/jvanasco/metadata_parser)

#### JavaScript
* [open-graph-scraper](https://github.com/jshemas/openGraphScraper)
* [html-metadata](https://github.com/wikimedia/html-metadata)

#### Notes
* Only `open-graph-scraper` can bypass the `HTTP Error 403: Forbidden` that is obtained with many links. For example, [this article](https://health.usnews.com/wellness/health-buzz/articles/2018-01-05/smelling-your-partners-shirt-could-decrease-your-stress-levels-study-says) would not be able to have information extracted using any other library
* A lot of sites just don't have much metadata aside from title
