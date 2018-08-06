db.Paciente.update(
	{ nome: "Rogan May" },
	{ $push: { emails: { email: "rogan@may.com" } } }
)


db.Medico.update(
	{ "crm": 6356 },
	{ $set: { telefones: { celular: "(83)99999-9999" } } }
)


db.Consulta.remove( { data: { $lte: "2018-05-12" } } )