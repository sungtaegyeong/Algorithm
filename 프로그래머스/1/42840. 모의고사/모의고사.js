function solution(answers) {
    var answer = [];
    
    // 수포자들이 찍는 방식
    let one = [1, 2, 3, 4, 5];
    let two = [2, 1, 2, 3, 2, 4, 2, 5];
    let three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    // 점수 저장 배열
    let score = [0, 0, 0];
    
    for (let i = 0; i < answers.length; i++) {
        if (one[i % 5] === answers[i]) score[0] += 1;
        if (two[i % 8] === answers[i]) score[1] += 1;
        if (three[i % 10] === answers[i]) score[2] += 1;
    }
    
    let maxScore = Math.max(...score);
    
    for (let i = 0; i < score.length; i++) {
        if (score[i] === maxScore) {
            answer.push(i + 1);
        }
    }
    
    return answer;
}