const { buildSchema } = require("graphql");

const schema = buildSchema(`
    type Query {
        getemployee(id: Int!): Employee!
        getemployees: [Employee]
    }
    type Mutation{
        addemployee(id: Int!, did: Int!, userid: Int!, jobcode: String!, resume: String!, joiningdate: String!): Employee!
        updateemployee(id: Int!, did: Int, userid: Int, jobcode: String, resume: String, joiningdate: String): Employee!
        deleteemployee(id: Int!): String!
    }
    type Employee {
            id: Int!
            did: Int!
            userid: Int!
            jobcode: String!
            resume: String!
            joiningdate: String!
        }
`);

module.exports = { schema };
