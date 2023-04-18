import React from 'react';
import classNames from 'classnames';
import Button from '../Button';
import './hero.css';

export interface HeroProps {
  textColor?: string;
  size?: 'full' | 'size';
  ctaEnabled?: boolean;
  bgColor?: string;
  textHeader: string;
  textSubheader: string;
  ctaText?: string;
}

const Hero = ({
  textColor,
  size = 'full',
  ctaEnabled = false,
  textHeader,
  textSubheader,
  bgColor,
  ctaText = '',
}: HeroProps) => {
  return (
    <div
      className={classNames('lbi-hero', `lbi-hero--${size}`)}
      style={{
        color: textColor ? textColor : '',
        backgroundColor: bgColor ? bgColor : '',
      }}
    >
      <div className={classNames('hero-header-text')}>{textHeader}</div>
      <div className={classNames('hero-subheader-text')}>{textSubheader}</div>
      <div style={{ display: ctaEnabled ? 'block' : 'none' }}>
        <Button type="primary" label={ctaText}></Button>
      </div>
    </div>
  );
};

export default Hero;
