# BD2-Projeto-NoSQL

## Descrição:
Gerenciamento de clínica com escopo reduzido entre médicos, pacientes e consultas

## Modelo Conceitual:
![alt text](https://github.com/cesarcesconetto/BD2-Projeto-NoSQL/blob/master/conceitual.png)

## Mapeamento:

| Modelo Conceitual ER |	Tipo no ER			|	MongoDB		|		Tipo no MongoDB	|	Observação |
| :------------------: | :--------------------: | :-----------: | :-------------------: | :----------: |
| PACIENTE	           |	Entidade			|	Paciente	|		Coleção			|	Principal entidade no projeto |
| nome	               |	Atributo simples	|	campo de Paciente |	campo simples	|	campo obrigatório |
| telefone	           |	Atributo multivalorado |	campo de Paciente |	campo - array	|	campo obrigatório |
| endereço	           |	Atributo composto	|	campo de Paciente |	campo - estrutura |	campo obrigatório |
| cpf		           |	Atributo simples	|	campo de Paciente |	campo simples |		campo obrigatório |
| sexo		           |	Atributo simples	|	campo de Paciente |	campo simples |		campo obrigatório |
| dataNasc	           |	Atributo simples	|	campo de Paciente |	campo simples	|	campo obrigatório |
| email		           |	Atributo multivalorado	campo de Paciente |	campo - array	|	campo opcional |
| CONSULTA	           |	Entidade			|	Consulta		|	Coleção			|	Principal entidade no projeto |
| data		           |	Atributo simples	 |	campo de Consulta |	campo simples	 |	campo obrigatório  |
| tipo		           |	Atributo simples	 |	campo de Consulta |	campo simples |		campo obrigatório |
| paciente	           |	Relacionamento		 |	Ref para Paciente |	ref			 |		campo obrigatório |
| medico	           |	Relacionamento		 |	Ref para Medico	 |	ref			 |		campo obrigatório |
| MEDICO	           |	Entidade			 |	Medico			 |	Coleção		 |		Principal entidade no projeto |
| nome		           |	Atributo simples	 |	campo de Medico	 |	campo simples	 |	campo obrigatório |
| crm		           |	Atributo simples	 |	campo de Medico	 |	campo simples |		campo obrigatório |
| telefone	           |	Atributo multivalorado |	campo de Medico |		campo - array |		campo obrigatório |
| endereço	           |	Atributo composto	 |	campo de Medico |		campo - estrutura |	campo obrigatório |
| cpf		           |	Atributo simples	 |	campo de Medico |		campo simples |		campo obrigatório |
| sexo		           |	Atributo simples	 |	campo de Medico |		campo simples |		campo obrigatório |
| dataNasc	           |	Atributo simples	 |	campo de Medico	 |	campo simples |		campo obrigatório |
| email		           |	Atributo multivalorado |	campo de Medico	 |	campo - array |		campo opcional |

## Pontos positivos:

- É mais flexível nas inclusões de dados.
- Menor tempo de resposta a consultas.
- Permitem a distribuição de dados em múltiplos servidores (clustering) sem prejuízo de performance e de integridade dos dados.

## Pontos negativos:
- Não garante consistência das informações.
- Mais esforço para manutenção.
