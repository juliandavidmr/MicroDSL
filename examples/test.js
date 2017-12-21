var microdsl = require('../')

// Mysql connect config.
var config = {
  user: 'root',
  password: '',
  host: 'localhost',
  database: 'eter'
}

// form.html.ejs
// test.view.ejs
// sequelize.ejs
// waterline.ejs
// miscellaneous.ejs
microdsl(config, './miscellaneous.ejs').then(compiled => {
  console.log(compiled.join('\n\n'))
})
