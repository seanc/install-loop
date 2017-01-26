const { exec } = require('child_process')
exec('npm install seanc/install-loop', (err, out, stderr) => {
  console.log(err)
})
