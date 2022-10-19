function solution(new_id) {
    var answer = "";
    const idLength = new_id.length;

    // 1단계 대문자 없애기 + 2단계 특정문자빼고 다 제거하기
    const recommendId = new_id
        .toLowerCase()
        .replace(/[^a-z0-9_.-]/g, "")
        .replace(/\.{2,}/g, ".") // 3단계 연속된 점 빼기
        .replace(/^[\.]/, "")
        .replace(/\.$/, ""); // 4단계 맨첨 맨끝 점빼기

    if (recommendId.length === 0) {
        // 5단계 빈문자열일 때
        let str = Array.from({ length: 3 }, () => "a").join("");
        return str;
    }
    if (recommendId.length > 15) {
        // 6단계
        let str = [...recommendId].filter((v, i) => i < 16).join("");
        return str;
    }
    if (recommendId.length <= 2) {
        // 7단계
        let num = recommendId.length;
        let str = recommendId;
        while (num < 3) {
            str += recommendId[recommendId.length - 1];
            num++;
        }
        return str;
    }
    return recommendId;
}

console.log(solution("...!@BaT#*..y.aabcdefghijklm"));
// "bat.y.abcdefghi"

console.log(solution("z-+.^."));
// "z--"

console.log(solution("=.="));
// "aaa"

console.log(solution("123_.def"));
// "123_.def"

console.log(solution("abcdefghijklmn.p"));
// "abcdefghijklmn"

// 마지막 테케에서 실패 순서가 뒤바뀌면 단계별로한게 무의미해진다. 어떻게 해야할까

// 해답
function solution(new_id) {
    const id = new_id
        .toLowerCase()
        .replace(/[^\w\d-_.]/g, "")
        .replace(/\.{2,}/g, ".")
        .replace(/^\.|\.$/g, "")
        .padEnd(1, "a")
        .slice(0, 15)
        .replace(/^\.|\.$/g, "");

    return id.padEnd(3, id[id.length - 1]);
}
// padEnd의 새로운 기능을 알게됨 !!!! 노션에 정리해놓기
