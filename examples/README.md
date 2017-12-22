# Examples

- [x] [Model of Sequelize ORM](./sequelize.ejs)
- [x] [Model of Waterline ORM (SailsJS)](./waterline.ejs)
- [x] [Html form](./form.html.ejs)
- [x] [Html list](./test.view.ejs)
- [x] [List columns](./list_columns.ejs)
- [x] [Functions](./functions.ejs)
- [x] [Miscellaneous](./miscellaneous.ejs)

```js
var config = {
  user: 'root',
  password: 'root',
  host: 'localhost',
  database: 'webapp'
}

microdsl(config, './sequelize.microdsl').then(compiled => {
  console.log(compiled)
})
```