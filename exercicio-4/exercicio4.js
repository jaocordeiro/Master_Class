const DatabaseError = function (database, message) {
  this.statement = database;
  this.message = message;
}
const database = {
  tables: {},

  createTable(dataBase) {
    const regExp = /create table ([a-z]+) \((.+)\)/; 
    const parseState = dataBase.match(regExp);
    const tableName = parseState[1];
    this.tables[tableName] = {
      columns: {},
      data: []
    }
    let columns = parseState[2];
    columns = columns.split(', ')
    for (let column of columns) {
      column = column.split(' ');
      const name = column[0];
      const type = column[1];
      this.tables[tableName].columns[name] = type;
    };
  },
  execute(database) {
    if (database.startsWith("create table")) {
      return this.createTable(database);
    }
    const message = `Syntax Error: "${database}"`
    throw new DatabaseError(database, message)
  }
};

try {
  database.execute("create table author (id number, name string, age number, city string, state string, country string)");
  database.execute("select id, name from author")
  console.log(JSON.stringify (database, undefined, ' '));
} catch (error) {
  console.log(error.message);
}
