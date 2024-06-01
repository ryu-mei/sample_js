let regionSelect = document.querySelector('#region');
let prefectureSelect = document.querySelector('#prefecture');

// 地域
let regions;

// 都道府県
let prefectures;

(async () => {
  const response = await fetch(
    `https://www.jma.go.jp/bosai/common/const/area.json`
  );
  const json = await response.json();
  console.log({ json });

  regions = json.centers;
  prefectures = json.offices;

  // const officesObj = Object.values(offices);
  // console.log(officesObj);

  // 地域のセレクトボックス
  for (const regionCode of Object.keys(regions)) {
    const region = regions[regionCode];
    let option = new Option(region.name, regionCode);
    regionSelect.options.add(option);
  }

  // 都道府県のセレクトボックス
  const selectedRegionCode = regionSelect.options[0].value;
  console.log(`jscode_select2.html 43`, regionSelect.options, {
    selectedRegionCode,
  });

  for (const prefCode of Object.keys(prefectures)) {
    if (!regions[selectedRegionCode].children.includes(prefCode)) {
      continue;
    }
    console.log(`jscode_select2.html 47`, { selectedRegionCode });
    const pref = prefectures[prefCode];
    let option = new Option(pref.name, prefCode);
    prefectureSelect.options.add(option);
  }
})();

const changeRegion = () => {
  const selectedRegionCode =
    regionSelect.options[regionSelect.selectedIndex].value;
  console.log(selectedRegionCode);

  const selectedRegion = regions[selectedRegionCode];

  prefectureSelect.innerHTML = '';

  if (selectedRegion) {
    for (const prefCode of selectedRegion.children) {
      const pref = prefectures[prefCode];
      let option = new Option(pref.name, prefCode);
      prefectureSelect.options.add(option);
    }
  }
};
