import * as fs from "fs";
// Function to read and parse GeoJSON data
function readGeoJsonAndPopulateGraph(filename, graph) {
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        const geoData = JSON.parse(data);
        if (geoData && geoData.features) {
            for (const feature of geoData.features) {
                if (feature.geometry.type === 'LineString') {
                    const coordinates = feature.geometry.coordinates;
                    for (let i = 0; i < coordinates.length - 1; i++) {
                        const fromNode = `${coordinates[i][0]},${coordinates[i][1]}`;
                        const toNode = `${coordinates[i + 1][0]},${coordinates[i + 1][1]}`;
                        const weight = 1; // You might want to calculate weight based on distance or other factors
                        graph.addEdge(fromNode, toNode, weight);
                    }
                }
            }
        }
        // Print the constructed graph
        console.log('Edges:', graph.edges);
        console.log('Weights:', graph.weights);
    });
}
export default readGeoJsonAndPopulateGraph;
