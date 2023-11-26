class Graph {
    edges: { [key: string]: string[] };
    weights: { [key: string]: number };

    constructor() {
        this.edges = {};
        this.weights = {};
    }

    addEdge(fromNode: string, toNode: string, weight: number) {
        if (!this.edges[fromNode]) {
            this.edges[fromNode] = [];
        }

        if (!this.edges[toNode]) {
            this.edges[toNode] = [];
        }

        this.edges[fromNode].push(toNode);
        this.edges[toNode].push(fromNode);
        this.weights[`${fromNode}-${toNode}`] = weight;
        this.weights[`${toNode}-${fromNode}`] = weight;
    }
}

export default Graph;
