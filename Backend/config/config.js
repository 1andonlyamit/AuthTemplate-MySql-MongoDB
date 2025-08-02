
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const masterConfigFile = path.join(__dirname, 'master-config.js');
const localConfigFile = path.join(__dirname, 'local-config.js');

let configModule;
if (fs.existsSync(localConfigFile)) {
    configModule = await import('./local-config.js');
} else if (fs.existsSync(masterConfigFile)) {
    configModule = await import('./master-config.js');
} else {
    throw new Error('No config file found');
}

const config = configModule.default;
export default config;