const express = require("express");
const express_graphql = require("express-graphql");
const { schema } = require("./schema");
const root = require("./resolvers");

const app = express();

app.use(
	"/gapi",
	express_graphql({
		schema: schema,
		rootValue: root, //resolvers
		graphiql: true,
	})
);

app.listen(4000, () => console.log("localhost:4000/gapi"));
