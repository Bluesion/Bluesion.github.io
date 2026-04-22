// Small decorative SVG components used across pages
const CakeSVG = () => (
  <svg viewBox="0 0 200 180" xmlns="http://www.w3.org/2000/svg">
    {/* plate */}
    <ellipse cx="100" cy="168" rx="88" ry="8" fill="#2D2A3A" opacity="0.15"/>
    <ellipse cx="100" cy="160" rx="88" ry="10" fill="#FFF" stroke="#2D2A3A" strokeWidth="2"/>
    {/* bottom tier */}
    <rect x="22" y="108" width="156" height="54" rx="8" fill="#FFE0EC" stroke="#2D2A3A" strokeWidth="2"/>
    <path d="M22 124 Q40 116 60 124 T100 124 T140 124 T180 124 V108 H22 Z" fill="#FF8FB8"/>
    {/* mid tier */}
    <rect x="42" y="72" width="116" height="42" rx="6" fill="#FFF7F0" stroke="#2D2A3A" strokeWidth="2"/>
    <path d="M42 86 Q60 80 75 86 T105 86 T135 86 T158 86 V72 H42 Z" fill="#9FD3FF"/>
    {/* top tier */}
    <rect x="66" y="44" width="68" height="32" rx="5" fill="#FFE0EC" stroke="#2D2A3A" strokeWidth="2"/>
    {/* candle */}
    <rect x="94" y="22" width="12" height="24" fill="#FFF" stroke="#2D2A3A" strokeWidth="2"/>
    <rect x="94" y="30" width="12" height="3" fill="#FF8FB8"/>
    {/* flame */}
    <path d="M100 6 C105 14 108 18 104 24 C108 24 108 18 100 20 C92 18 92 24 96 24 C92 18 95 14 100 6 Z" fill="#FFD36E">
      <animateTransform attributeName="transform" type="scale" values="1;1.1;1" dur="0.8s" repeatCount="indefinite" additive="sum"/>
    </path>
    {/* sprinkles */}
    <circle cx="40" cy="140" r="2" fill="#FFD36E"/>
    <circle cx="70" cy="148" r="2" fill="#9FD3FF"/>
    <circle cx="130" cy="144" r="2" fill="#D7C4FF"/>
    <circle cx="160" cy="140" r="2" fill="#B6EBD6"/>
    <circle cx="55" cy="96" r="2" fill="#FF8FB8"/>
    <circle cx="145" cy="100" r="2" fill="#FFD36E"/>
  </svg>
);

// Confetti burst helper — fires on send
window.fireConfetti = (x = window.innerWidth / 2, y = window.innerHeight / 2) => {
  const burst = document.createElement('div');
  burst.className = 'confetti-burst';
  burst.style.left = x + 'px';
  burst.style.top  = y + 'px';
  const colors = ['#FF8FB8','#9FD3FF','#FFD36E','#B6EBD6','#D7C4FF'];
  for (let i = 0; i < 24; i++) {
    const s = document.createElement('span');
    s.style.background = colors[i % colors.length];
    const angle = (i / 24) * Math.PI * 2;
    const dist = 80 + Math.random() * 90;
    s.style.setProperty('--to', `translate(${Math.cos(angle)*dist}px, ${Math.sin(angle)*dist}px)`);
    s.style.animationDelay = (Math.random() * 0.1) + 's';
    burst.appendChild(s);
  }
  document.body.appendChild(burst);
  setTimeout(() => burst.remove(), 1200);
};

window.CakeSVG = CakeSVG;
