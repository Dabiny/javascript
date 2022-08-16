function solution(genres, plays) {
    let answer = [];
    let map = new Map();

    // 누적 플레이수 구하기 (어떤 장르가 제일 많이 플레이되었는지 알아보기)
    for (let i = 0; i < genres.length; i++) {
        if (map.has(genres[i])) {
            map.set(genres[i], map.get(genres[i]) + plays[i]);
        }
        else {
            map.set(genres[i], plays[i]);
        }
    }
    console.log(map);

    let thisGenreSongs = [];
    // 누적플레이 장르 배열 사이즈만큼 돌기
    while(map.size > 0) {
        // 최대 누적플레이 장르 알아보기 entries()와 reduce()를 통해 max장르가 무엇인지 판별
        // entries() -> [ [ 'classic', 1450 ], [ 'pop', 3100 ] ]
        // Array.reduce((누적값, 현재값, index, 요소) => {함수내용}, 초기값);
        let max = [ ...map.entries()/* 맵의 모든 키값쌍을 [key,value]형태 array로 만드는 키워드 */].reduce((a, b) => 
        a[1] > b[1] ? a : b)[0];

        // 장르배열중에서 장르랑 max장르랑 비교후 맞으면 thisGenreSongs에 플레이 횟수 넣기 
        genres.filter((genre, index) => {
            if(genre === max) {
                thisGenreSongs.push(plays[index]);
            }
        });

        // 플레이 횟수를 내림차순으로 sort하고 2개자르기 (장르별로 가장 많이 재생된 노래 2개씩이니깐)
        thisGenreSongs.sort((a, b) => b - a).splice(2);

        console.log(thisGenreSongs); // Map { 'classic' => 1450, 'pop' => 3100 }

        // 만약 가장 많이 재생된 장르 곡들의 재생 수가 같다면 (예외처리) 
        if (thisGenreSongs[0] === thisGenreSongs[1]) {
            // 재생횟수 배열에서 play iterator가 thisGenreSong[0]횟수랑 같으면 (차례대로 보는거니까 인덱스(고유번호)가 젤 낮은 애가 들어갈거임)
            plays.map((play, index) => {
                if (thisGenreSongs[0] === play) {
                    answer.push(index); // answer에 고유번호(index) 추가
                }
            })
            thisGenreSongs = []; // 초기화
        }
        else { //가장 많이 재생된 장르 곡들의 재생수가 다르다면 
            // 가장 많이 재생된 장르 중 가장 많이 재생된 곡의 고유번호를 answer에 저장후 해당 곡제거(shift)
            while(thisGenreSongs.length > 0) {
                for(let i = 0; i < plays.length; i++) {
                    if(plays[i] === thisGenreSongs[0]) {
                        answer.push(i);
                    }
                }
                thisGenreSongs.shift(); // 곡제거
            }
        }
    
        map.delete(max); // 가장 많이 재생된 장르 제거
        
        console.log(map);
    }
    return answer;
}
console.log(solution(["classic", "pop", "classic", "classic", "pop"],[500, 600, 150, 800, 2500]));

/*
    1. 누적플레이횟수로 구해서 어떤장르가 제일 많이 플레이 되었는지 맵에 저장 pop => 3100 이런식으로
    2. 누적플레이 map에서 제일 인기 장르 정해주기
    3. 그 인기 장르의 재생횟수 정보 가져오기 
    4. 재생횟수 sort해서 재생횟수 인덱스(고유번호) answer에 담기 
    5. 반례로 재생횟수 같으면 재생횟수 제일 앞에있는 인덱스번호를 answer에 저장
    6. 초기화하면서 다시 누적플레이 map돌기 
*/
