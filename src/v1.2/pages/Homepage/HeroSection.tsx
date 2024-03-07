import gsap from 'gsap';
import React, { useLayoutEffect, useRef } from 'react';
import themes from '../../utils/themes';
import ColorBar from '../../components/ColorBar';

const styles = {
  container: {
    backgroundColor: themes.default.primary,
    height: '100vh',
  },
  title: {
    color: themes.default.secondary,
    fontSize: '5rem',
    fontFamily: 'Inter',
  },
  subtitle: {
    color: themes.default.accent,
    fontSize: '3rem',
    fontFamily: 'Merriweather',
  },
  callToActionButton: {
    backgroundColor: themes.default.secondary,
    color: themes.default.primary,
    padding: '0.75rem 1.25rem',
    borderRadius: '.25rem',
    fontFamily: 'Inter',
    fontWeight: 'bold',
  },
};

function HeroSection() {
  const comp = useRef(null);

  // TODO: Finish implementation
  useLayoutEffect(() => {
    let context = gsap.context(() => {
      const timeline = gsap.timeline();

      // timeline.from();
    }, comp);

    return () => context.revert();
  }, []);

  return (
    <section ref={comp} style={styles.container}>
      <h1 style={styles.title}>Desenvolvendo um novo mundo.</h1>
      <h2 style={styles.subtitle}>Uma linha de código por vez.</h2>

      <button style={styles.callToActionButton}>Entre em contato</button>

      <ColorBar />
    </section>
  );
}

export default HeroSection;
