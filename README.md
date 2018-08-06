# BD2-Projeto-NoSQL

Mapeamento:

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
| :------------------: | :------------------: | :------------------: | :------------------: | :------------------: |
