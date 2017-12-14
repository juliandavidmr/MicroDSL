# MicroDSL

MicroDSL is a powerful but simple document generator everything from any mysql database. Automatically generate web forms, JSON models for any ORM, and an infinite number of other file structures.

### [See Examples](./examples)

## Install

Using npm
```bash
npm install microdsl --save
```

Using yarn
```bash
yarn add microdsl
```

## Example

Automatically building a simple web form

**Step 1**: Import package and connect your database
```js
// test.js

var microdsl = require('microdsl')

// Mysql connect config
var config = {
  user: 'root',
  password: 'root',
  host: 'localhost',
  database: 'project'
}

microdsl(config, './form.html.microdsl').then(compiled => {
  console.log(compiled)
  /*
    [
      'here the content of your generated file',
      'here the content of your 2° generated file',
      ...
    ]
  */
})
```

**Step 2**: Create file input _(form.html.microdsl)_
```html
Register <%= TABLENAME %>

<form action="/<%= TABLENAME %>" method="post">  
  <% for(var i=0; i< COLUMNS.length; i++) { %>
    <input type="text" name="<%= COLUMNS[i].name %>">
  <% } %>

  <input type="button" value="Send">  
</form>
```

**Step 3**: Start compilation

```bash
node test.js
```

**Example output for a database table:**
```html
Register convocatoria
<form action="/convocatoria" method="post">
  <input type="text" name="id">
  <input type="text" name="nombre">
  <input type="text" name="descripcion">
  <input type="text" name="fecha">
  <input type="button" value="Send">
</form>
```

## API

MicroDSL has global variables that can be called from the input files

|  Variable |     Description   |  Content structure  |
|-----------|-------------------|---------------------|
| TABLENAME | Name of the table | string type - 'person'  |
| COLUMNS   | Columns of the current table | array type - `[{ "Type": "varchar(64)","Null": "NO", "Key": "", "Default": null, "Extra": "", "name": "nombre" }, ...]` |
| RELS      | Relations of the current table (foreign keys) | `['role.id', ...]`|

> If you want to know more about the compilation syntax, see [EJS](http://www.embeddedjs.com)

### **Functions**
|  Function    | Description                                                |
|--------------|------------------------------------------------------------|
| to_waterline | returns the equivalent MySQL object type in Sequelize ORM  |
| to_waterline | returns the equivalent MySQL object type in Waterline ORM  |
| is_required  | returns a boolean, true if the MySQL attribute is required |

Example of execution of a function:
```bash
<% for(var i=0; i< COLUMNS.length; i++) { %>
  '<%= COLUMNS[i].name %>': {
    type: '<%= to_waterline(COLUMNS[i]) %>',
    required: <%= is_required(COLUMNS[i]) %>
  },
<% } %>
```

# TODO
- [ ] Create CLI _(separate project)_
- [ ] [More examples](./examples)

---

Maintained by [juliandavidmr](https://github.com/juliandavidmr)
