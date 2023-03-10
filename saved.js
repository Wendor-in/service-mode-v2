const execSync = require('child_process').execSync;

// Run wpa_cli command and capture output
const output = execSync('sudo wpa_cli -i wlan0 list_networks');
const networkLines = output.toString().trim().split('\n');
const networks = networkLines.slice(1).map((line) => {
    const [id, ssid, bssid, flags] = line.split('\t');
    const pskOutput = execSync(`sudo wpa_cli -i wlan0 get_network ${id} psk`);
    const psk = pskOutput.toString().trim();
    return { id, ssid, bssid, flags, psk };
});
console.log(networks);
