---
layout: single
title: " From Digital Historical Source to Leaflet Maps "
excerpt_separator: "<!--more-->"
categories:
  - Lorimer
tags:
  - Maps
  - QGIS
---

## From Digital Historical Source to Leaflet Maps 

**By Liyan Ibrahim**

Visualizing historical data is a great method of portraying important historical information  to the general public. It not only allows us to create a visual narrative of the data we have but also helps historians and researchers understand the data they produce by seeing it.  Visualization, although it introduces new interpretative challenges, is quite powerful for generating new hypotheses and important research questions within that field. In our case, the historical data came from the annotation of the Geographical and Statistical section of[Lorimer's](https://archive.org/details/in.ernet.dli.2015.206963) Gazetteer of the Persian Gulf, Oman and Central Arabia. Therefore, developing a workflow for  navigating between the platforms used for annotation and  mapping  was an important part of this project.

Recogito was a platform that was used to perform the semantic annotation of people and places, and it has the option of downloading the relevant annotations of the text file dump in the form of a CSV file. This CSV file was enriched with coordinates by means of a lookup with the relevant national data dumps coming from GeoNames. Once we had a list of places with their corresponding geocoordinates. The map-making process could begin. Thinking about the historical relevance of the maps we were making required the team to study the content produced and evaluate the historical importance of some attributes mentioned in Lorimer's articles as well as how this could be reflected in a Leaflet map hostable in GitHub pages with open source basemaps. Once the important attributes were identified for the  geocoded places in question we used  Antconc to find the quantity of each attribute in each place name.

Once we had the basis of the maps, further customization was needed in order to best portray the historical context of each map. Customizing the symbology of the maps depended on analyzing the most important attributes in the datasets. For example, some required the manipulation of the symbol used in terms of colors, size or type of symbol. Others required the use of the “Rule-based” or “Classification” symbology which allowed us to change the style of the points based on a certain rule or classification of a certain column.

Once the visuals of the maps were finalized, we used the qgis2web plugin for QGIS to design and create the Leaflet maps following the [GitHub Pages](https://pages.github.com/) tutorial by Taylor Hixson. Exporting gave us the option to further adjust other functionalities of the map such as the zoom extent and the pop-up box. The pop-up box could also be edited after exporting, by modifications directly in  the index.html file.

One major issue we faced was that some functionalities that QGIS facilitates in its standalone version could not be completely transferred over to a web map. An example would be the style aspect in which the size of the point on the map would be determined by a certain attribute. This was challenging since we had to rethink and evaluate the visual representation of some maps in the sense of getting the same point across through a different style supported by qgis2web. For one map, we opted for completely removing that aspect of the visual representation and presenting this numerical attribute in the pop-up box. For another, a solution was to use the “Graduated” symbology to represent grouped sizes as different shades of the same color. 
