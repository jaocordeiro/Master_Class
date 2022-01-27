const dataBase = "create table author (id number, name string, age number, city string, state string, country string)";
const regExp = /create table ([a-z]+) \((.+)\)/; 
const parseState = dataBase.match(regExp);
const tableName = parseState[1];
let columns = parseState[2];
columns = columns.split(', ')

const database = {
  tables: {
    [tableName]: {
      columns: {},
      data: []
    }
  }
}

for (let column of columns) {
  column = column.split(' ');
  const name = column[0];
  const type = column[1];
  database.tables[tableName].columns[name] = type;
}
console.log(JSON.stringify (database, undefined, ' '));