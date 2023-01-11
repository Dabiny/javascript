function solution(cacheSize, cities) {
    let playTime = 0; // 실행시간
    const cacheArr = [];

    for (let i = 0; i < cities.length; i++) {
        const citiesName = cities[i].toLowerCase();
        if (!cacheSize) {
            // 캐시 공간이 없다면
            playTime += 5;
            continue;
        }
        if (cacheArr.includes(citiesName)) {
            // 캐시공간에 cities이름이 있다면
            playTime++;
            const nameIndex = cacheArr.indexOf(citiesName);
            if (nameIndex !== -1) cacheArr.splice(nameIndex, 1);
            cacheArr.unshift(citiesName);
        }
        if (!cacheArr.includes(citiesName)) {
            if (cacheArr.length < cacheSize) {
                // 캐시공간이 아직 여유가있다면
                cacheArr.unshift(citiesName);
                playTime += 5;
                continue;
            }
            if (cacheArr.length >= cacheSize) {
                // 캐시공간이 꽉 찼다면
                cacheArr.pop();
                playTime += 5;
                cacheArr.unshift(citiesName);
                continue;
            }
        }
    }
    return playTime;
}

console.log(
    solution(0, [
        'LA',
        'LA',
    ])
);
