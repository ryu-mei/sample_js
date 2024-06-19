let regionSelect = document.querySelector('#region');
let prefSelect = document.querySelector('#prefecture');
let class10Select = document.querySelector('#class10');
let class20Select = document.querySelector('#class20');
let h1 = document.querySelector('h1');

// 地域
let regions, prefs, class10s, class20s, forecastAreas, amedases;

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

// let hour, hours, latestDatess, amedasTemps;
let hour, hours, latestDate;
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
  const res4 = await fetch(
    `https://www.jma.go.jp/bosai/amedas/data/latest_time.txt`
  );
  const dateTime = await res4.text();
  let year = dateTime.substring(0, 4);
  let month = dateTime.substring(5, 7);
  let date = dateTime.substring(8, 10);
  hour = dateTime.substring(11, 13);

  latestDate = year + month + date + hour;

  // console.log(`index.js 76`, hour)
  hours = [];
  for (const i of [0, 1, 2, 3, 4]) {
    const hourValue = hour - 4 + i
    if (hourValue < 0) {
      hours.push(24 + hourValue)
    } else {
      hours.push(hourValue)
    }
  }
  // console.log(`index.js 84`, hours)

  // hour = 3;
  //  hours = [23, 0, 1, 2, 3];
  // hour = 24;
  //  hours = [20, 21, 22, 23, 0];

  // console.log({ areaJson, latestDate });
  // console.log({ forecastAreasJson });

  regions = areaJson.centers;
  prefs = areaJson.offices;
  class10s = areaJson.class10s;
  class20s = areaJson.class20s;
  forecastAreas = forecastAreasJson;
  amedases = amedasesJson;

  console.log(`index.js 103`, amedasesJson, forecastAreasJson)

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

  // ダミーデータの送付
  updateChart(hours, [1, 0, 4, 5, 10]);
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

const changeCity = async () => {
  const selectedClass20Code =
    class20Select.options[class20Select.selectedIndex].value;
  const amedasCode = getAmedasCodeFromClass20Code(
    selectedClass20Code,
    forecastAreas
  );

  const isH2element = document.querySelector('h2');
  const isPelement = document.querySelector('p');
  if (isH2element) {
    isH2element.remove();
  }

  if (isPelement) {
    isPelement.remove();
  }

  console.log(
    `index.js 133`,
    amedasCode,
    latestDate,
    `https://www.jma.go.jp/bosai/amedas/data/point/${amedasCode}/${latestDate}_${'06'}.json`
  );

  // console.log(amedases[amedasCode]);
  if (amedasCode !== undefined) {
    // 全国のアメダス観測所の情報のURL
    const res5 = await fetch(
      `https://www.jma.go.jp/bosai/amedas/data/map/${latestDate}0000.json`
    );
    const resultAmedasData = await res5.json();
    // console.log(resultAmedasData);
    console.log(
      `index.js 165`,
      amedasCode,
      // amedases[amedasCode],
      resultAmedasData
    );

    amedasTemps = [];

    const amedasPressure = resultAmedasData[amedasCode].pressure[0];
    amedasTemp = resultAmedasData[amedasCode].temp[0];
    const h2 = document.createElement('h2');
    const pElement = document.createElement('p');
    h2.textContent = `今日の${hour}時の気圧は${amedasPressure}hPaです`;
    pElement.textContent = `今日の${hour}時の気温は${amedasTemp}です`;
    h1.insertAdjacentElement('afterend', h2);
    h2.insertAdjacentElement('afterend', pElement);
  } else {
    console.log('気圧データはありません');
  }

  updateChart(hours, [0, 0, 0, 0, amedasTemp]);
};

const updateChart = (hours, temps) => {
  Highcharts.chart('container', {
    chart: {
      type: 'line',
    },
    title: {
      text: '気温と気圧の変化',
    },
    xAxis: {
      title: {
        text: '時間',
      },
      categories: hours.map(hour=>`${hour}:00`),
    },
    yAxis: {
      title: {
        text: '気温',
      },
    },
    series: [
      {
        name: '気温',
        data: temps,
      },
    ],
  });
};
