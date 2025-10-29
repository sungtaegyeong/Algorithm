function solution(numbers) {
    var temp = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < i; j++) {
            temp.push(numbers[i] + numbers[j]);
        }
    }
    
    var answer = [...new Set(temp)].sort((a, b) => a - b);
    
    return answer;
}