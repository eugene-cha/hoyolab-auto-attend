const container = document.querySelector('.components-home-assets-__sign-content-test_---sign-middle---10WpY3');
const header = container.children[0]; // 보충 출석이 필요한 경우, 여기서 버튼 찾아야 함
const board = container.children[1];

const attendCnt = Number(document.querySelector('.sign-num').innerText); // 이번 달 출석체크 n일(누적)
const missedCnt = Number(document.querySelector('.miss-num').innerText); // 출석 누락 n일

// 출석 누락 존재 시
if (missedCnt > 0) {
  // 이미 보충권 3회 다 사용했으면 미수행
}

// 출석 완주 시
if (attendCnt === getLastDayInCurrentMonth()) {
  // 별도 동작 필요?
}

for (const item of board.children) {
  // components-home-assets-__sign-content-test_---has-signed---1--Ffl
  const isAlreadyChecked = Array.from(item.classList).some(cls => cls.includes('has-signed'));
  if (!isAlreadyChecked) {
    item.click();
    break;
  }
}

/**
 * 이번 달의 마지막 일자 반환
 * @returns {number}
 */
function getLastDayInCurrentMonth() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();

  const lastDayOfMonth = new Date(year, month + 1, 0);
  return lastDayOfMonth.getDate();
}

// NOTE: 기본적으로 'sign' API 호출을 통해 출석 요청 (https://sg-hk4e-api.hoyolab.com/event/sol/sign?lang=ko-kr)
// Cookie 데이터 기반 요청 (refernece: https://github.com/Satellaa/Hoyolab-auto-checkin)
