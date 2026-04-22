function GiftPage({ tweaks, user, message }) {
  const photoSrc = `data/photo/${user.gift}.JPG`;
  const couponSrc = `data/coupon/${user.gift}.JPG`;

  const download = (src, filename) => {
    const a = document.createElement('a');
    a.href = src;
    a.download = filename;
    a.click();
  };

  return (
    <div className="page gift">
      <section className="gift-hero">
        <span className="pop">🎁 축하 메시지가 도착했어요!</span>
        <h1>
          {user.name}님,<br />
          선물이 도착했어요!
        </h1>
        <p>
          따뜻한 한 마디 정말 고마워요. <strong>{tweaks.birthdayName}</strong>님이 준비한
          작은 선물 두 가지를 가져가세요. 아래 <strong>다운로드</strong> 버튼으로 저장할 수 있어요 💝
        </p>
      </section>

      <div className="gift-grid">
        <div className="gift-card">
          <div className="gift-card-label pink">GIFT 01</div>
          <h2>📸 폴라로이드 포토카드</h2>
          <div className="caption">{tweaks.birthdayName}님의 한정판 포토카드예요. 소장용으로 간직해 주세요!</div>

          <div className="polaroid-wrap">
            <div className="polaroid">
              <div className="sticker-dot">LIMITED<br />EDITION</div>
              <div className="photo">
                <img src={photoSrc} alt={`${tweaks.birthdayName} photocard`} className="photo-img" />
              </div>
              <div className="hand">Happy Birthday! 🎂</div>
            </div>
          </div>

          <div className="dl-row">
            <button className="btn btn-primary" onClick={() => download(photoSrc, `${tweaks.birthdayName}_photocard.jpg`)}>
              📥 포토카드 다운로드
            </button>
          </div>
        </div>

        <div className="gift-card">
          <div className="gift-card-label blue">GIFT 02</div>
          <h2>🎟️ 감사 쿠폰</h2>
          <div className="caption">{user.name}님을 위한 감사 쿠폰이에요. 다운로드해서 사용해 주세요!</div>

          <div className="coupon-wrap">
            <img src={couponSrc} alt={`${user.name} coupon`} className="coupon-img" />
          </div>

          <div className="dl-row">
            <button className="btn btn-blue" onClick={() => download(couponSrc, `${user.name}_coupon.png`)}>
              📥 쿠폰 다운로드
            </button>
          </div>
        </div>
      </div>

      <div className="gift-footer">
        <p>🎂 {tweaks.birthdayName}님, 다시 한 번 생일 축하드려요!</p>
      </div>
    </div>
  );
}

window.GiftPage = GiftPage;
