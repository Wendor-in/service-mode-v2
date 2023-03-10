const execSync = require('child_process').execSync;

// Run wpa_cli command and capture output
const output = execSync('sudo wpa_cli -i wlan0 scan;sudo wpa_cli -i wlan0 scan_results');

// Parse the output of the scan_results command
const results = output.toString().trim().split('\n').slice(1).map(line => {
    const [bssid, freq, signal, flags, ssid] = line.split(/\t/);
    return { bssid, freq, signal, flags, ssid };
});

// Convert results to JSON string
const jsonOutput = JSON.stringify(results);

console.log(jsonOutput);
