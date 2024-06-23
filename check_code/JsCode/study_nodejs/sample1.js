function getPastHours(hours) {
  const times = [];
  const now = new Date();

  for (let i = 0; i < hours; i++) {
    const pastTime = new Date(now.getTime() - i * 60 * 60 * 1000);
    times.push(pastTime);
  }

  return times;
}

// 過去1時間ごとの時刻を含む配列を生成
const pastHours = getPastHours(24); // 24を指定して過去24時間分の配列を取得
console.log(pastHours);
