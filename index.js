const { exec } = require('child_process')
const assign = require('json-assign')
assign('./package.json', {
  name: Math.random().toString(36).substr(2, 5)
})
exec('npm install seanc/install-loop', (err, out, stderr) => {
  console.log(out)
})
