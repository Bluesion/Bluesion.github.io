const { useState, useMemo } = React;

function IntroPage({ tweaks, onPick }) {
  const [q, setQ] = useState('');
  const [team, setTeam] = useState('전체');

  const filtered = useMemo(() => {
    return window.COWORKERS.filter(p => {
      if (p.birthday) return false;
      if (team !== '전체' && p.team !== team) return false;
      if (q && !p.name.includes(q)) return false;
      return true;
    });
  }, [q, team]);

  return (
    <div className="page intro">
      <section className="intro-hero">
        <span className="intro-kicker"><span className="dot"/>TODAY'S BIRTHDAY</span>
        <h1 className="intro-title">
          <span className="wavy">🎉</span> <span className="pink">{tweaks.birthdayName}</span>님<br/>
          <span className="blue">생일 축하해요!</span>
        </h1>
        <p className="intro-sub">
          {tweaks.greeting}<br/>
          아래에서 본인 이름을 선택하고, 따뜻한 축하 한 마디를 남겨주세요.
        </p>
        <div className="intro-cake"><window.CakeSVG/></div>
      </section>

      <section className="name-board">
        <div className="name-board-head">
          <h2 className="name-board-title">🎈 누구신가요?</h2>
          <div className="name-search">
            <input
              type="text"
              value={q}
              onChange={e => setQ(e.target.value)}
              placeholder="이름으로 검색"
              aria-label="이름 검색"
            />
          </div>
        </div>

        <div className="team-filter">
          {['전체', ...window.TEAMS].map(t => (
            <button
              key={t}
              className={`team-chip ${team === t ? 'active' : ''}`}
              onClick={() => setTeam(t)}
            >{t}</button>
          ))}
        </div>

        <div className="name-grid" role="listbox">
          {filtered.map(p => {
            const avatarColor = window.avatarColorFor(p.name);
            return (
              <button
                key={p.name}
                className="name-card"
                onClick={() => onPick(p)}
                title={`${p.name}(${p.team})`}
              >
                <div className="avatar" style={{ background: avatarColor }}>
                  {p.name.slice(0, 1)}
                </div>
                <div className="n">{p.name}</div>
                <div className="t">{p.team}</div>
              </button>
            );
          })}
          {filtered.length === 0 && (
            <div style={{gridColumn:'1/-1', textAlign:'center', padding:'30px', color:'var(--ink-soft)'}}>
              찾으시는 분이 없어요 🔎
            </div>
          )}
        </div>

      </section>
    </div>
  );
}

window.IntroPage = IntroPage;
