var fetch = require("node-fetch");

let requestOptions = {
	method: "GET",
	redirect: "follow",
};

const getemployee = (args) =>
	fetch("http://localhost:3000/employees/" + args.id, requestOptions)
		.then((response) => response.text())
		.then((result) => JSON.parse(result));

const getemployees = (args) =>
	fetch("http://localhost:3000/employees", requestOptions)
		.then((response) => response.text())
		.then((result) => JSON.parse(result));

const addemployee = ({ id, did, userid, jobcode, resume, joiningdate }) => {
	let raw = JSON.stringify({
		id,
		did,
		userid,
		jobcode,
		resume,
		joiningdate,
	});

	let requestOptions = {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: raw,
		redirect: "follow",
	};

	return fetch("http://localhost:3000/employees", requestOptions)
		.then((response) => response.text())
		.then((result) => JSON.parse(result));
};

const updateemployee = (args) => {
	return getemployee({ id: args.id })
		.then((result) => Object.assign({}, result, args))
		.then((obj) => {
			let raw = JSON.stringify({
				...obj,
			});

			let requestOptions = {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: raw,
				redirect: "follow",
			};

			return fetch(
				"http://localhost:3000/employees/" + obj.id,
				requestOptions
			).then((response) => response.text());
		})
		.then((result) => JSON.parse(result));
};

const deleteemployee = ({ id }) => {
	return fetch("http://localhost:3000/employees/" + id, {
		method: "DELETE",
		headers: { "Content-Type": "application/json" },
		redirect: "follow",
	}).then((res) =>
		res.status !== 200
			? res.status === 404
				? "not found employee with id " + id
				: "something went wrong"
			: "deleted employee with id " + id
	);
};
module.exports = {
	addemployee,
	getemployee,
	getemployees,
	updateemployee,
	deleteemployee,
};
