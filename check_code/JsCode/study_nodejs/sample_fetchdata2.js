const fs = require('fs').promises;
const path = require('path');

// ファイルのパスを解決
const filePath = path.resolve(__dirname, './sample3.json');

(async () => {
  const data = await fs.readFile(filePath, 'utf8');
  const json = JSON.parse(data);
  console.log(json[11001].kjName);
})();
