// stop-dev.js
const process = require('process');

// Obtener el proceso principal (puedes ajustar el valor según tu configuración)
const mainProcessPid = process.pid;

// Enviar la señal de interrupción (SIGINT) al proceso principal
process.kill(mainProcessPid, 'SIGINT');