const { useState: _useStateApp, useEffect: _useEffectApp } = React;

const TWEAKS = {
  birthdayName: '양원철',
  birthdayTeam: '안드로이드',
  greeting: '원철님의 생일을 맞아 준비한 깜짝 파티에 오신 것을 환영해요! 🎉',
};

function App() {
  const [route, setRoute] = _useStateApp('intro');
  const [user, setUser] = _useStateApp(null);
  const [message, setMessage] = _useStateApp('');

  _useEffectApp(() => {
    try {
      const s = JSON.parse(localStorage.getItem('bday:v1') || 'null');
      if (s && s.route && s.user) {
        setRoute(s.route);
        setUser(s.user);
        setMessage(s.message || '');
      }
    } catch (e) {}
  }, []);
  _useEffectApp(() => {
    localStorage.setItem('bday:v1', JSON.stringify({ route, user, message }));
  }, [route, user, message]);

  const handlePick = (p) => {
    setUser(p);
    setRoute('chat');
  };
  const handleSent = ({ text, user: u }) => {
    setMessage(text);
    setRoute('gift');
  };
  const handleBack = () => {
    setRoute('intro');
    setUser(null);
  };

  return (
    <>
      {route === 'intro' && (
        <window.IntroPage tweaks={TWEAKS} onPick={handlePick}/>
      )}
      {route === 'chat' && user && (
        <window.CelebratePage tweaks={TWEAKS} user={user} onBack={handleBack} onSent={handleSent}/>
      )}
      {route === 'gift' && user && (
        <window.GiftPage tweaks={TWEAKS} user={user} message={message}/>
      )}
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
