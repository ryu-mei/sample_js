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

// 引数 prefCode 011000
// slice 01
// class20Codeの値が01から始まる値でなければ(01以外の値は)スキップし、for..of文の中身を続ける
const updateClass20Selectbox = (prefCode) => {
  class20Select.innerHTML = '';
  const prefCodeShort = prefCode.slice(0, 2);
  for (const class20Code of Object.keys(class20s)) {
    if (!class20Code.startsWith(prefCodeShort)) {
      continue;
    }
    const city = class20s[class20Code];
    let option = new Option(city.name, class20Code);
    class20Select.options.add(option);
  }
};

(async () => {
  const response = await fetch(
    `https://www.jma.go.jp/bosai/common/const/area.json`
  );
  const json = await response.json();
  console.log({ json });

  regions = json.centers;
  prefs = json.offices;
  class10s = json.class10s;
  class20s = json.class20s;

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
  const selectedPrefCode = prefSelect.options[prefSelect.selectedIndex].value;
  const selectedPref = prefs[selectedPrefCode];
  updateClass10Selectbox(selectedPref.children);
  updateClass20Selectbox(selectedPrefCode);
};
