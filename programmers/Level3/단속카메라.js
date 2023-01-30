function solution(routes) {
    routes.sort((a, b) => a[0] - b[0]);
    let curOut = routes[0][1]; // 이전차량 진출
    let answer = 1;
    for (let i = 1; i < routes.length; i++) {
        if (curOut > routes[i][1]) { // 이전차량 진출 > 현재차량 진출
            curOut = routes[i][1]; // 현재차량 진출을 curOut에 갱신
        }
        if (curOut < routes[i][0]) { // 이전차량 진출 < 현재차량 진입
            answer += 1; // 카메라 한대 추가 
            curOut = routes[i][1]; // 현재 차량 진출을 curOut에 갱신
        }
    }
    return answer;
}
console.log(
    solution([
        [-20, -15],
        [-14, -5],
        [-18, -13],
        [-5, -3],
    ])
);
// 그리디문제, 필기한 것 다시보면서 복습하기
// https://velog.io/@longroadhome/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-LV.3-%EB%8B%A8%EC%86%8D%EC%B9%B4%EB%A9%94%EB%9D%BC-JS