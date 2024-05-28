// 盛岡市の番号
let amedas_number = '33431';
// 日付
let latest_date = '20240526';
//
let divisionNumber = '03';

(async () => {
  try {
    const response = await fetch(
      `https://www.jma.go.jp/bosai/amedas/data/point/${amedas_number}/${latest_date}_${divisionNumber}.json`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const json = await response.json();

    console.log(json);
  } catch (error) {
    console.error('Fetch error', error);
  }
})();
