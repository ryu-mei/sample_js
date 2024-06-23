const substringTagAfter = (html, searchTag) => {
  const index = html.indexOf(searchTag);
  if (index === -1) {
    return ``;
  }
  return html.substring(index + searchTag.length);
};

const substringTagBefore = (html, searchTag) => {
  const index = html.indexOf(searchTag);
  if (index === -1) {
    return ``;
  }
  return html.substring(0, index);
};
let map, geocoder;
let addresses = [ '釜石市千鳥町', '釜石市鈴子町','釜石市大町'];
let information = [];

const fetchData = async () => {
  const res = await fetch(
    'https://city.kamaishi.iwate.jp/sq/mobilemail/oshirase.html'
  );
  return await res.text();
};

const initMap = async () => {
  // const htmlPage = await fetchData();

  // lines = htmlPage.split('<HR>'); // テキストを行ごとに分割
  // console.log(lines);

  // for (const line of lines) {
  //   const addressAfter = substringTagAfter(line, '分頃、');
  //   const addressBefore = substringTagBefore(addressAfter, '付近');
  //   const infoAfter = substringTagAfter(line, '【防災かまいし広報】');
  //   const infoBefore = substringTagBefore(infoAfter, 'ツキノワグマ');
  //   addresses.push(addressBefore);
  //   infomation.push(infoBefore);
  // }
  // console.log(addresses);
  // const data = addresses.map((value, index) => {
  //   return {
  //     addresses: value,
  //     infomation: infomation[index],
  //   };
  // });
  // let address = '釜石市中妻町';
  // information = 'クマ出没エリア';
  const { Map } = await google.maps.importLibrary('maps');
  const { Geocoder } = await google.maps.importLibrary('geocoding');
  geocoder = new google.maps.Geocoder();
  map = new Map(document.querySelector('#map'), {
    zoom: 14,
    center: { lat: 39.275377, lng: 141.885771 },
  });

  for (const address of addresses) {
    geocoder.geocode({ 'address': address }, (results, status) => {
      if (status === 'OK') {
        const marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location,
          title: 'aaaaaaaa',
        });
      } else {
        console.error(
          'Geocode was not successful for the following reason: ' + status
        );
      }
    });
  }
};

initMap();

