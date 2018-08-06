// Índices:

// Dos pacientes mais velhos para os mais novos:
db.Paciente.createIndex( { dataNasc: -1, nome: 1 } )

// Pela data da consulta:
db.Consulta.createIndex( { data: 1 } )