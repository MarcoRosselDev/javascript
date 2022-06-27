const { exec } = require('child_process');
//esto es igual que || const exec = require('child_process').exec;

exec('dir', (err, stdout, sterr) => {   //si estamos en linux o mac usar 'ls -la'
    if (err) {
        console.log(err);
        return false;
    }
    console.log(stdout);
})