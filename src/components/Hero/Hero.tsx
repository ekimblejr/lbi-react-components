import React from 'react';
import classNames from 'classnames';
import Button from '../Button';
import './hero.css';
import BackgroundImage from '../../assets/images/bg-370799.png';

export interface HeroProps {
  width?: 'full' | 'size';
  height?: number;
  bgColor?: string;
  textColor?: string;
  textHeader: string;
  textSubheader: string;
  ctaEnabled?: boolean;
  ctaText?: string;
}

const Hero = ({
  height,
  textColor,
  width = 'full',
  ctaEnabled = false,
  textHeader,
  textSubheader,
  bgColor,
  ctaText = '',
}: HeroProps) => {
  return (
    <div
      className={classNames('lbi-hero', `lbi-hero--${width}`)}
      style={{
        color: textColor ? textColor : '',
        backgroundColor: bgColor ? bgColor : '',
        height: height ? height : 'auto',
        backgroundImage: `url(${BackgroundImage})`,
      }}
    >
      <div
        className={classNames('hero-header-text')}
        style={{
          display: textHeader && textHeader.length > 0 ? 'block' : 'none',
        }}
      >
        {textHeader}
      </div>
      <div
        className={classNames('hero-subheader-text')}
        style={{
          display: textSubheader && textSubheader.length > 0 ? 'block' : 'none',
        }}
      >
        {textSubheader}
      </div>
      <div
        className={classNames('call-to-action')}
        style={{ display: ctaEnabled ? 'block' : 'none' }}
      >
        <Button type="primary" label={ctaText}></Button>
      </div>
    </div>
  );
};

export default Hero;
