const { exec } = require('child_process');

exec('sudo wpa_cli -i wlan0 status', (error, stdout, stderr) => {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }
    const data = {};
    stdout.toString().trim().split('\n').forEach(line => {
        const [key, value] = line.split('=');
        data[key] = value;
    });

    // Convert object to JSON
    const jsonOutput = JSON.stringify(data);

    console.log(jsonOutput);
});
function wpaCliOutputToJson(output) {
    let lines = output.trim().split('\n');
    let json = {};

    lines.forEach(line => {
        let [key, value] = line.split('=');
        json[key] = value;
    });

    return JSON.stringify(json);
}
