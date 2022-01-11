let g = new Graph();
g.addNode("A");g.addNode("B");g.addNode("C");g.addNode("D");g.addNode("E");g.addNode("F");g.addNode("G");g.addNode("H");g.addNode("CH");

g.addEdge("A", "B", 1);g.addEdge("A", "E", 3);g.addEdge("B", "E", 2);g.addEdge("C", "F", 1);g.addEdge("E", "D", 2);g.addEdge("F", "H", 2);g.addEdge("E", "H", 3);g.addEdge("H", "CH", 1);g.addEdge("B", "F", 2);g.addEdge("B", "C", 4);

console.log(g.floydWarshallAlgorithm());
function floydWarshallAlgorithm() {
    let d = {};
    while(d=0){;
        for (let i = 0; i < this.nodes.length; i++) {
            d[this.nodes[i]] = {};
            this.edges[this.nodes[i]].forEach(e => (d[this.nodes[i]][e.node] = e.weight));
            this.nodes.forEach(n => {
                if (d[this.nodes[i]][n] == undefined)
                    d[this.nodes[i]][n] = Infinity;
                if (this.nodes[i] === n) d[this.nodes[i]][n] = 0;
            });
        }
    }
    this.nodes.forEach(i => {
        this.nodes.forEach(j => {
            this.nodes.forEach(k => {
                if (d[i][k] + d[k][j] < d[i][j])
                    d[i][j] = d[i][k] + d[k][j];
            });
        });
    });
    return d;
}