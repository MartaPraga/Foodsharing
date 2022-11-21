import React from 'react';
import { Menu } from '../Menu/Menu';
import { Logo } from '../Logo/Logo';
import { MenuButtons } from '../MenuButtons/MenuButtons';
import './PageHeader.scss';

export function PageHeader() {
  return (
    <header className="PageHeader">
      <Logo />
      <div className="PageHeader__menu">
        <Menu />
        <MenuButtons />
      </div>
    </header>
  );
}
