const { exec } = require('child_process')
const assign = require('json-assign')

function again() {
  assign('./package.json', {
    name: Math.random().toString(36).substr(2, 5)
  }, err => {
    console.log(err)
    exec('npm install seanc/install-loop', (err, out, stderr) => {
      console.log(err, out, stderr)
      again()
    })
  })
}

again()
