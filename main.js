import Graph from "./graph/graph";
import readGeoJsonAndPopulateGraph from "./utils/utils";
const newGraph = new Graph();
readGeoJsonAndPopulateGraph("./paths.geojson", newGraph);
