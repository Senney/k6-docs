import React from 'react';
import Background from './svg/background.inline.svg';
import BackgroundLine from './svg/background-line.inline.svg';
import styles from './hero-frame.module.scss';
import './hero-frame.scss';

export const HeroFrame = (props) => {
  const { wrapperLabel, backgroundLabel, lineLabel } = props;
  return (
    <div className={`${styles.backgroundWrapper} ${wrapperLabel || ''}`}>
      <Background className={backgroundLabel || ''}/>
      <BackgroundLine
        className={`${styles.backgroundLine} ${lineLabel || ''}`}
      />
    </div>
  );
};
