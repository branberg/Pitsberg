var data = require('./temp-json/all-edges.json');
var edges = data.edges;

// const filteredEdges = edges.filter(edge => {
//   const owner = edge.node.owner;

//   if (Boolean(owner.username)) {
//     return owner.username;
//   }

//   return false;
// });

const filteredEdges = edges.filter(edge => edge.owner === undefined);

console.log(filteredEdges);
