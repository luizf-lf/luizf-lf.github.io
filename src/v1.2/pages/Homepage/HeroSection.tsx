import gsap from 'gsap';
import React, { useLayoutEffect, useRef } from 'react';
import themes from '../../utils/themes';

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
    <section ref={comp} style={{ backgroundColor: themes.default.primary }}>
      Hero Section
    </section>
  );
}

export default HeroSection;
