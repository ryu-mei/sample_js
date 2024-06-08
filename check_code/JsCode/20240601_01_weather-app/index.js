let regionSelect = document.querySelector('#region');
let prefSelect = document.querySelector('#prefecture');
let class10Select = document.querySelector('#class10');
let class20Select = document.querySelector('#class20');

// 地域
let regions;

// 都道府県
let prefs;
let class10s;
let class20s;
let forecastAreas;

const updatePrefSelectbox = (prefCodes) => {
  prefSelect.innerHTML = '';
  for (const prefCode of prefCodes) {
    const pref = prefs[prefCode];
    let option = new Option(pref.name, prefCode);
    prefSelect.options.add(option);
  }
};

const updateClass10Selectbox = (class10Codes) => {
  class10Select.innerHTML = '';
  for (const class10Code of class10Codes) {
    const city = class10s[class10Code];
    let option = new Option(city.name, class10Code);
    class10Select.options.add(option);
  }
};

const updateClass20Selectbox = (prefCode) => {
  class20Select.innerHTML = '';
  const prefCodeShort = prefCode.slice(0, 2);
  // const amedasCode = getAmedasCodeFromClass20Code(class20s)
  for (const class20Code of Object.keys(class20s)) {
    if (!class20Code.startsWith(prefCodeShort)) {
      continue;
    }
    const city = class20s[class20Code];
    let option = new Option(city.name, class20Code);
    class20Select.options.add(option);
  }
};

const getAmedasCodeFromClass20Code = (class20Code, forecastAreasJson) => {
  for (const [key, value] of Object.entries(forecastAreasJson)) {
    if (value[0].class20 === class20Code) {
      return value[0].amedas[0];
    }
  }
};

(async () => {
  const res1 = await fetch(
    `https://www.jma.go.jp/bosai/common/const/area.json`
  );
  const res2 = await fetch(
    `https://www.jma.go.jp/bosai/forecast/const/forecast_area.json`
  );
  const res3 = await fetch(
    `https://www.jma.go.jp/bosai/amedas/const/amedastable.json`
  );
  const areaJson = await res1.json();
  const forecastAreasJson = await res2.json();
  const amedasesJson = await res3.json();

  // const amedasCode = getAmedasCodeFromClass20Code(`01211400`, '011000');
  // console.log(amedasCode, amedasesJson[amedasCode]);
  console.log({ areaJson });
  console.log({ forecastAreasJson });
  // const getAmedasCodeFromClass20Code = (class20Code, forecastArea) => {
  //   for (const [key, value] of Object.entries(forecastAreasJson)) {
  //     if (value[0].class20 === class20Code) {
  //       return console.log(value[0].amedas[0]);
  //     }
  //   }
  // };

  regions = areaJson.centers;
  prefs = areaJson.offices;
  class10s = areaJson.class10s;
  class20s = areaJson.class20s;
  forecastAreas = forecastAreasJson;

  // 地域のセレクトボックス
  for (const regionCode of Object.keys(regions)) {
    const region = regions[regionCode];
    let option = new Option(region.name, regionCode);
    regionSelect.options.add(option);
  }

  regionSelect.addEventListener('change', changeRegion);
  prefSelect.addEventListener('change', changePref);
  class20Select.addEventListener('change', changeCity);
  // 都道府県のセレクトボックス
  const selectedRegionCode = regionSelect.options[0].value;
  updatePrefSelectbox(regions[selectedRegionCode].children);
  updateClass10Selectbox(prefs[prefSelect.options[0].value].children);
  updateClass20Selectbox(prefSelect.options[0].value);
})();

const changeRegion = () => {
  const selectedRegionCode =
    regionSelect.options[regionSelect.selectedIndex].value;

  // 地域のコード
  const selectedRegion = regions[selectedRegionCode];

  // 地域のコードはchildrenいくつか持つ
  updatePrefSelectbox(selectedRegion.children);
  // changePref関数を実行
  changePref();
};

const changePref = () => {
  // 選択した件の値を格納
  const selectedPrefCode = prefSelect.options[prefSelect.selectedIndex].value;
  const selectedPref = prefs[selectedPrefCode];
  updateClass10Selectbox(selectedPref.children);
  updateClass20Selectbox(selectedPrefCode);
};

const changeCity = () => {
  // console.log(class20Select.options[class20Select.selectedIndex].value);
  const selectedClass20Code =
    class20Select.options[class20Select.selectedIndex].value;
  const amedasCode = getAmedasCodeFromClass20Code(
    selectedClass20Code,
    forecastAreas
  );
  console.log(amedasCode);
};
