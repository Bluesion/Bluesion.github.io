// Coworker list — sorted by name (Korean 가나다 order)
window.COWORKERS = [
  { name: '고종원', team: '프론트엔드',   gift: '01' },
  { name: '김재현', team: '안드로이드',   gift: '02' },
  { name: '김종인', team: 'CTO',          gift: '03' },
  { name: '노주훈', team: '프론트엔드',   gift: '04' },
  { name: '문상현', team: '안드로이드',   gift: '05' },
  { name: '문성수', team: '프론트엔드',   gift: '06' },
  { name: '문혜정', team: '전략기획',     gift: '07' },
  { name: '박인준', team: '총괄',         gift: '08' },
  { name: '박지성', team: '백엔드',       gift: '09' },
  { name: '배상도', team: '백엔드',       gift: '10' },
  { name: '양원철', team: '안드로이드',   birthday: true },
  { name: '온지석', team: 'QA',           gift: '11' },
  { name: '우혜경', team: '안드로이드',   gift: '12' },
  { name: '이광진', team: 'CEO',          gift: '13' },
  { name: '이다은', team: '프론트엔드',   gift: '14' },
  { name: '이동윤', team: '백엔드',       gift: '15' },
  { name: '이명덕', team: '백엔드',       gift: '16' },
  { name: '이범석', team: '안드로이드',   gift: '17' },
  { name: '이신우', team: 'QA',           gift: '18' },
  { name: '이재표', team: '경영지원',     gift: '19' },
  { name: '이창우', team: 'COO',          gift: '20' },
  { name: '이현욱', team: '전략기획',     gift: '21' },
  { name: '임하민', team: '연구소',       gift: '22' },
  { name: '정민영', team: '백엔드',       gift: '23' },
  { name: '정예은', team: '경영지원',     gift: '24' },
  { name: '조동래', team: 'CTO',          gift: '25' },
  { name: '조예현', team: '안드로이드',   gift: '26' },
  { name: '주요섭', team: '백엔드',       gift: '27' },
  { name: '최지현', team: '전략기획',     gift: '28' },
  { name: '한수민', team: '전략기획',     gift: '29' },
  { name: '한재엽', team: '프론트엔드',   gift: '30' },
  { name: '홍승완', team: 'iOS',          gift: '31' },
  { name: '황지영', team: '안드로이드',   gift: '32' },
].sort((a, b) => a.name.localeCompare(b.name, 'ko'));

// Avatar color pool (pastel)
window.AVATAR_COLORS = [
  '#FF8FB8', '#9FD3FF', '#FFD36E', '#B6EBD6',
  '#D7C4FF', '#FFB5A7', '#7FD8BE', '#F4A1C7',
  '#8AC6FF', '#FFC285'
];
window.avatarColorFor = (name) => {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
  return window.AVATAR_COLORS[h % window.AVATAR_COLORS.length];
};

// Team list for filter chips (in order that feels right)
window.TEAMS = [
  'CEO','CTO','COO','총괄','연구소',
  '프론트엔드','안드로이드','iOS','백엔드',
  '전략기획','QA','경영지원'
];

// Fake existing messages (shared wall simulation)
window.SEED_MESSAGES = [
  { sender: '이광진', team: 'CEO',    text: '원철님 생일 축하해요! 올해도 한 살 더 멋있어지네요 🎉', mins: 120 },
  { sender: '김재현', team: '안드로이드', text: '형 생일 축하해요!! 오늘은 커밋 금지 🎂', mins: 95 },
  { sender: '문혜정', team: '전략기획',  text: '원철님 항상 감사합니다. 생일 축하드려요 🥳', mins: 80 },
  { sender: '홍승완', team: 'iOS',     text: 'Android도 iOS도 오늘만큼은 한 마음으로 축하해요 🍰', mins: 65 },
  { sender: '우혜경', team: '안드로이드', text: '원철님 덕분에 팀이 든든해요! 생일 축하합니다 🎈', mins: 50 },
  { sender: '임하민', team: '연구소',   text: '건강하시고 좋은 일만 가득하세요 ✨', mins: 38 },
  { sender: '박인준', team: '총괄',    text: '케이크 준비됐습니다 🍰 이따 봬요!', mins: 22 },
  { sender: '정예은', team: '경영지원', text: '생신 진심으로 축하드려요! 🎁', mins: 9 },
];
