const { exec } = require('child_process');

const ssid = '';
const password = '';

exec(`sudo wpa_passphrase "${ssid}" "${password}" > /etc/wpa_supplicant/wpa_supplicant.conf`, (error, stdout, stderr) => {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);

    exec('sudo wpa_cli reconfigure', (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
    });
});
