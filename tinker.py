from metadata_parser import MetadataParser
from opengraph import OpenGraph
import webpreview

url = 'https://health.usnews.com/wellness/health-buzz/articles/2018-01-05/smelling-your-partners-shirt-could-decrease-your-stress-levels-study-says'
page = MetadataParser(url=url)
print page.metadata
print page.get_metadata('title')

og = OpenGraph(url=url)
print og

wb = webpreview.OpenGraph(url, ['og:title', 'og:description'])
print wb.title
print wb.description
