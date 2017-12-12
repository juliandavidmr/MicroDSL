# Examples

- [x] [Model of Sequelize ORM](./sequelize.microdsl)
- [x] [Html form](form.html.microdsl)
- [x] [Html list](test.view.microdsl)


```js
var config = {
  user: 'root',
  password: 'root',
  host: 'localhost',
  database: 'projectvisibilidad'
}

microdsl(config, './sequelize.microdsl').then(compiled => {
  console.log(compiled)
})
```