function lotto_check(count){
    let selectedNum = []; // 빈 배열 생성 (선택된 값을 저장할 배열)
    let availableNums = []; // 사용하지 않은 숫자를 저장할 배열
    for (let i = 1; i <= 45; i++) {
        availableNums.push(i); // 1부터 45까지의 숫자를 배열에 추가
    }
    while(selectedNum.length < count){
        let randomIndex = Math.floor(Math.random() * availableNums.length); // 가능한 숫자 중에서 랜덤하게 선택 (0~0.999999사이의 난수에 45만큼을 곱해서 내림) --> 배열의 인덱스는 0부터 44까지 존재
        let randomNumber = availableNums[randomIndex];
        selectedNum.push(randomNumber); // 선택된 숫자를 결과 배열에 추가
        availableNums.splice(randomIndex, 1); // 선택된 숫자를 사용하지 않은 숫자 배열에서 제거
    }
    return selectedNum;
}

const btn = document.getElementById("buttonId");
const result1 = document.getElementById("result1");

btn.addEventListener("click", function () {
    let selectedNumbers = lotto_check(7); // lotto_check 함수를 호출하여 7개의 숫자를 가져옴
    let bonusNumber = selectedNumbers.pop(); // 마지막 숫자를 제거하여 보너스 번호로 설정
    result1.innerText = selectedNumbers.join("   ,    ") + " +      " + bonusNumber; // 로또 번호와 보너스 번호를 함께 표시
});
