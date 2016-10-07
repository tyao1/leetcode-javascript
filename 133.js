/**
 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */

/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
var nodeMap;
var helper = function(graph) {
    if (!graph) return graph;
    if (!nodeMap.has(graph)) {
        var newGraph = new UndirectedGraphNode(graph.label);
        nodeMap.set(graph, newGraph);
        for (var node of graph.neighbors) {
            helper(node);
        }
    }
}
var cloneGraph = function(graph) {
    if (!graph) return null;
    nodeMap = new Map();
    helper(graph); // build the map
    for (var [old, newNode] of nodeMap) {
        for (var node of old.neighbors) {
            newNode.neighbors.push(nodeMap.get(node));
        }
    }
    return nodeMap.get(graph);

};
