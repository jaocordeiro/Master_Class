const dataBase = "create table author (id number, name string, age number, city string, state string, country string)";
const regExp = /create table ([a-z]+) \((.+)\)/; 
// No primeiro redExp peguei caracteres de a-z, e o + para ter um ou mais caracteres.
// No segundo passo \\ entre os caracteres () para escapa-los e assim não serem interpretados como grupo de captura,
// dessa forma pego o que tem dentro dos () no dataBase. O . utilizado serve para sinalizar que estou atrás de qualquer coisa ali,
// o + é que quero 1 ou mais caracteres da de dentro dos (), sendo assim envolvo o (.+), tendo ele agora na posição 2 do array.
const parseState = dataBase.match(regExp);
const tableName = parseState[1];
let columns = parseState[2];
columns = columns.split(', ')

console.log("tableName:", tableName);
console.log("columns:", columns);