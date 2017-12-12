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

**Step 2**: Create file input
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

**Example output for a database table:**
```html
Register convocatoria
<form action="/convocatoria" method="post">
  <input type="text" name="id" id="id">
  <input type="text" name="nombre" id="nombre">
  <input type="text" name="descripcion" id="descripcion">
  <input type="text" name="fecha" id="fecha">
  <input type="button" value="Send">
</form>
```

# TODO
- [ ] Create CLI _(separate project)_
- [ ] More examples

---

Maintained by [juliandavidmr](https://github.com/juliandavidmr)