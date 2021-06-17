var fs = require('fs');
var data = require('./temp-json/all-edges.json');
var edges = data.edges;

let mappedData = [];
let pitsbergNodes = [];

const pitsbergID = '244432604';

function convertUrlToIDString(url) {
    const split1 = url.split('.jpg?');
    const split2 = split1[0].split('/');
    const filename = split2[6];

    return filename.replace(/_/gm, '');
}

function getCaption(edge) {
    if (typeof edge.node !== 'undefined') {
        return edge.node.text;
    } else {
        return 'booo';
    }
}

function getUsername(owner) {
    if (typeof owner !== 'undefined') {
        if (typeof owner.username !== 'undefined') {
            return owner.username;
        } else {
            return 'unknown';
        }
    }
}

for(let edge of edges) {
    const node = edge.node;
    if (node.owner) {
        if (owner.username !== undefined) {
            if (owner.username === 'pitsberg') {
                pitsbergNodes.push(node);
            }
        }
    }
}

console.log(pitsbergNodes);

// const stringified = JSON.stringify(mappedData, null, 2);

// fs.writeFile('clean-data.json', stringified, function(err) {
//     if (err) return console.log(err);
//     console.log('file written');
// })

// console.log(mappedData);
// console.log(mappedData.length);
