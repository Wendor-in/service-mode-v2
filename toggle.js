const { execSync } = require('child_process');

// Turn off WiFi
const disableOutput = execSync('sudo wpa_cli disable_network 0', { stdio: 'pipe' });
console.log(`Disable output: ${disableOutput.toString()}`);

// Wait for 10 seconds
setTimeout(() => {
    // Turn on WiFi
    const enableOutput = execSync('sudo wpa_cli enable_network 0', { stdio: 'pipe' });
    console.log(`Enable output: ${enableOutput.toString()}`);
}, 10000); 
