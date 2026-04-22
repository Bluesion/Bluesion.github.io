const { useState, useRef, useEffect } = React;

const STICKERS = ['🎉','🎂','🎈','🎁','🥳','💖','✨','🍰','🎊','🕯️','🌸','🍭'];

function formatTimeAgo(mins) {
  if (mins < 1) return '방금';
  if (mins < 60) return `${mins}분 전`;
  const h = Math.floor(mins / 60);
  if (h < 24) return `${h}시간 전`;
  return `${Math.floor(h / 24)}일 전`;
}

function timeHHMM() {
  const d = new Date();
  const hh = String(d.getHours()).padStart(2,'0');
  const mm = String(d.getMinutes()).padStart(2,'0');
  return `${hh}:${mm}`;
}

function CelebratePage({ tweaks, user, onBack, onSent }) {
  const [text, setText] = useState('');
  const [sent, setSent] = useState(false);
  const [messages, setMessages] = useState(() => {
    // Seed wall: existing coworkers' messages, oldest first
    return [...window.SEED_MESSAGES]
      .sort((a, b) => b.mins - a.mins)
      .map((m, i) => ({ ...m, id: 'seed-' + i, mine: false, time: formatTimeAgo(m.mins) }));
  });
  const bodyRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    // scroll to bottom on mount and when messages change
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSend = () => {
    const t = text.trim();
    if (!t || sent) return;
    const newMsg = {
      id: 'mine-' + Date.now(),
      sender: user.name,
      team: user.team,
      text: t,
      mine: true,
      time: timeHHMM(),
      special: true,
    };
    setMessages(prev => [...prev, newMsg]);
    setText('');
    setSent(true);
    // confetti!
    const rect = document.querySelector('.send-btn')?.getBoundingClientRect();
    if (rect) window.fireConfetti(rect.left + rect.width/2, rect.top + rect.height/2);
    // wait for animation then go to gift page
    setTimeout(() => {
      onSent({ text: t, user });
    }, 1600);
  };

  const insertSticker = (s) => {
    setText(prev => prev + s);
    inputRef.current?.focus();
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="page" style={{ padding: '24px 16px 40px' }}>
      <div className="chat-shell">
        <header className="chat-header">
          <button className="chat-back" onClick={onBack} aria-label="뒤로">←</button>
          <div className="chat-avatar">🎂</div>
          <div className="chat-title">
            <div className="name">{tweaks.birthdayName}님 생일파티</div>
            <div className="status"><span className="live"/>{messages.filter(m=>!m.mine).length}명이 축하 중</div>
          </div>
        </header>

        <div className="chat-body" ref={bodyRef}>
          <div className="chat-daydivider">🎉 오늘 · {tweaks.birthdayName}님의 생일</div>

          {messages.map((m, i) => {
            const prev = messages[i - 1];
            const sameSender = prev && prev.sender === m.sender && prev.mine === m.mine;
            const color = window.avatarColorFor(m.sender);
            return (
              <div key={m.id} className={`bubble-row ${m.mine ? 'mine' : 'theirs'}`}>
                {!m.mine && (
                  sameSender
                    ? <div style={{ width: 30, flexShrink: 0 }}/>
                    : <div className="bubble-avatar" style={{ background: color }}>{m.sender.slice(0,1)}</div>
                )}
                <div className="bubble-col">
                  {!sameSender && (
                    <div className="bubble-sender">
                      {m.mine ? '나' : `${m.sender} · ${m.team}`}
                    </div>
                  )}
                  <div className={`bubble ${m.special ? 'special' : ''}`}>{m.text}</div>
                  <div className="bubble-time">{m.time}</div>
                </div>
              </div>
            );
          })}

          {sent && (
            <div className="chat-daydivider" style={{ background: '#FFE0EC', color: 'var(--candy)', fontWeight: 700 }}>
              💌 메시지 전달 완료! 선물이 준비되고 있어요...
            </div>
          )}
        </div>

        <div className="sticker-tray">
          {STICKERS.map(s => (
            <button key={s} className="sticker" onClick={() => insertSticker(s)}>{s}</button>
          ))}
        </div>

        <div className="chat-composer">
          <textarea
            ref={inputRef}
            className="composer-input"
            value={text}
            onChange={e => setText(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder={`${tweaks.birthdayName}님에게 축하 메시지를 보내주세요 💌`}
            rows={1}
            disabled={sent}
          />
          <button
            className="send-btn"
            onClick={handleSend}
            disabled={!text.trim() || sent}
            aria-label="보내기"
          >
            {sent ? '✓' : '➤'}
          </button>
        </div>
      </div>
    </div>
  );
}

window.CelebratePage = CelebratePage;
