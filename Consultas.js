// (02) Consultas:

// Consulta da coleção inteira:
db.Consulta.find( )

// Consulta da quantidade total de pacientes:
db.Paciente.find( ).count( )


// (03) Consultas sem projeção:

// Pacientes do sexo masculino:
db.Paciente.find( { sexo: { $eq: "M" } } )
// Consultas com data superior ou igual a 16-05-2018:
db.Consulta.find( { data: { $gte: "2018-05-16" } } )
// Médicos da Califórnia:
db.Medico.find( { "endereço.estado": { $in: [ "California" ] } } )


// (03) Consultas com projeção:

// Consultas que tenham data superior ou igual a 16-05-2018, exibindo o paciente e o médico:
db.Consulta.find( { data: { $gte: "2018-05-16" } }, { _id: 0, paciente: 1, medico: 1 } )
// Pacientes que não possuem email, exibindo o nome e o CPF:
db.Paciente.find( { emails: { $exists: false } }, { _id: 0, nome: 1, cpf: 1 } )
// Pacientes menores de 18 anos:
db.Paciente.find(
  { dataNasc: { $gt: "2000-01-01" } },
  { _id: 0, nome: 1 }
)


// (01) Consulta com regex:

// Médico que tenha "Adam" no nome e possua um email, exibindo o nome e o CRM:
db.Medico.find( { nome: /Adam/, "emails.0": { $exists: true } }, { _id: 0, nome: 1, crm: 1} )


// (01) Consulta com acesso a array:

// Nome e telefone de todos os Médicos:
db.Medico.find( { }, { _id: 0, nome: 1, telefones: 1 } )


// (01) Consulta com acesso à estrutura embutida:

db.Paciente.find( { "endereço.logradouro": "Bayard Street" } )


// Consultas com os dados do médico que atendeu:
db.Consulta.aggregate( [
{
  $lookup:
  {
    from: "Medico",
    localField: "medico",
    foreignField: "_id",
    as: "Dados da Consulta"
  }
}
] )


// (01) Consulta com função de agregação:

// Mostrar a quantidade de Consultas feitas separando por tipo.
db.Consulta.aggregate( [
{
  $group:
         {
           _id: "$tipo",
           Quantidade: { $sum: 1 }
         }
}
] )


// (01) Consulta com limit:

// Consultas que tenham data superior ou igual a 16-05-2018, exibindo o paciente e o médico, limitado a 3 documentos.
db.Consulta.find( { data: { $gte: "2018-05-16" } }, { _id: 0, paciente: 1, médico: 1}).limit( 3 )


// (01) Consulta livre:

// Consultas do tipo rotina:
db.Consulta.find( { "tipo": { $eq: "rotina" } } )
