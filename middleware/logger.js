const fs = require('fs');
const os = require('os');
const path = require('path');
const way = path.join(__dirname, '../logs', 'server.log');

module.exports = (req, res, next) => {
  const startTime = Date.now();
  const { url, method } = req;

  res.on('finish', () => {
    const endTime = Date.now();
    const elapsedTime = endTime - startTime;
    const data = `${new Date(startTime).toISOString()} | ${url} | ${method} | Execution Time: ${elapsedTime}ms`;
    fs.appendFile(way, data + os.EOL, (err) => {
      if (err) throw err;
    });
    console.log('\x1b[36m%s\x1b[0m', data);
  });

  next();
};