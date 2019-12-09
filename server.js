var express = require('express');
var express_graphql = require('express-graphql');
var {buildSchema} = require('graphql');

// GraphQL Schema

var schema = buildSchema(`
    type Query {
        message: String
    }
`);

var root = {
    message: () => 'GraphQL Woot Woooot!!!'
};

// Create an express server and a GraphQl endpoint

var app = express();
app.use('/graphql', express_graphql({
    schema: schema, 
    rootValue: root, 
    graphiql: true
}));

app.listen(4000, () => console.log('GraphQL Server Running on Port 4000/graphql'));