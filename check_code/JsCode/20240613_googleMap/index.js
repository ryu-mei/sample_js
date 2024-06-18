const substringTagAfter = (html, searchTag) => {
  const index = html.indexOf(searchTag);
  return html.substring(index + searchTag.length);
};

const substringTagBefore = (html, searchTag) => {
  const index = html.indexOf(searchTag);
  return html.substring(0, index);
};

(async () => {
  const res = await fetch('http://localhost:3000/proxy', {
    method: 'GET',
    mode: 'cors',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer your-token-here',
    },
  });
  const data = await res.text();
  console.log(data);

  const addresses = [];
  const infomation = [];
  const lines = htmlPage.split('<HR>'); // テキストを行ごとに分割
  // console.log(lines);

  for (const line of lines) {
    const addressAfter = substringTagAfter(line, '分頃、');
    const addressBefore = substringTagBefore(addressAfter, '付近');
    const infoAfter = substringTagAfter(line, '【防災かまいし広報】');
    const infoBefore = substringTagBefore(infoAfter, 'ツキノワグマ');
    addresses.push(addressBefore);
    infomation.push(infoBefore);
  }
})();

function initMap() {}

function geocodeAddress() {
  const geocoder = new google.maps.Geocoder();
  const address = document.getElementById('address').value;

  geocoder.geocode({ address: address }, function (results, status) {
    if (status === 'OK') {
      const location = results[0].geometry.location;
      alert('緯度: ' + location.lat() + ', 経度: ' + location.lng());
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}
