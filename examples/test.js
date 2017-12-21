var microdsl = require('../')

// Mysql connect config.
var config = {
  user: 'root',
  password: 'root',
  host: 'localhost',
  database: 'projectvisibilidad'
}

// form.html.microdsl
// test.view.microdsl
// sequelize.microdsl
// waterline.model.microdsl
// miscellaneous.microdsl
microdsl(config, './miscellaneous.microdsl').then(compiled => {
  console.log(compiled)
})
