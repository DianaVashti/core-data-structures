export default class DirectedGraph {
  constructor(){
    this.size = 0
    this.graph = {}
  }


  // adds a vertex to the graph.
  addVertex(v1){

  }


  // returns true if the graph contains the vertex or false if not.
  hasVertex(v1){

  }


  // adds a direction from 'v1' to 'v2'.
  addDirection(v1, v2){

  }


  // returns true if there's a direction from 'v1' to 'v2'.
  hasDirection(v1, v2){

  }


  // visit all the connected vertices in the graph starting with v1 and apply function on the reached vertex.
//  visit(v1, vertex => console.log(vertex)){

//  }


  // returns an array of all the paths between two vertices.
  findPaths(v1, v2){

  }


  // removes an existing direction between 'v1' and 'v2'.
  removeDirection(v1, v2){

  }


  // returns an array of all the vertices that are unconnected to the graph (have no direction linking them to another vertex).
  getSeparatedVertices(){

  }


  // removes an existing vertex and all its directions (the incoming and outgoing).
  removeVertex(v1){

  }


  // returns the number of vertices in the graph.
  count(){
    return this.size
  }
}
