function solution(genres, plays) {
    let genre = new Set(genres); //안겹치게 장르들 종류나열
    let genList = {}; // 0: classic, 1: pop... 고유번호순으로 리스트 만들기
    for (let i = 0; i < genres.length; i++){
        genList[i] = genres[i];
    }

    let bestList = {};
    for (let i of genre){
        bestList[i] = 0;
    }

    for (let iter of Object.keys(bestList)) {
        for (let i = 0; i < plays.length; i++){
            if (iter == genres[i] && bestList[iter] < plays[i]){ 
                //'classic'이 장르배열에있는 'classic'과 일치하고, 'classic' 재횟이 plays횟보다 작으면 play재횟으로 바꿔치기
                bestList[iter] = plays[i];
            }
        }
    }
    
    let playGenres = {
        genres: "",
        index: 0,
        play: 0,
    };
    let arr = [];

    for (let i = 0; i < genres.length; i++) {
        let elem = playGenres;
        elem.genres = genres[i];
        elem['index'] = i;
        elem['play'] = plays[i];

        arr.push(elem);
    }

    return playGenres;
}

console.log(solution(["classic", "pop", "classic", "classic", "pop"],[500, 600, 150, 800, 2500]));