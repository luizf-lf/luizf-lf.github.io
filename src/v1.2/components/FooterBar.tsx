import themes from '../utils/themes';

function FooterBar() {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        backgroundColor: themes.default.secondary,
        height: '2rem',
        width: '100vw',
      }}
    ></div>
  );
}

export default FooterBar;
