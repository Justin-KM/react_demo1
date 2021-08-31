import React, { Component } from 'react'
import { Nav, initializeIcons } from '@fluentui/react';

const navigationStyles = {
  root: {
    height: '100vh',
    boxSizing: 'border-box',
    border: '1px solid #eee',
    overflowY: 'auto',
    paddingTop: '10vh',
  },
};

const links = [
  {
    links: [
      {
        name: 'Dashboard',
        key:'key1',
        url: '/',
        iconProps: {
          iconName: 'Home',
          styles: {
            root: {
              fontSize: 20,
              color: '#106ebe',
            },
          }
        }
      },
      {
        name: 'Contact',
        key: 'key2',
        url: '/',
        iconProps: {
          iconName: 'Contact',
          styles: {
            root: {
              fontSize: 20,
              color: '#106ebe',
            },
          }
        }
      },
      {
        name: 'Settings',
        key: 'key3',
        url: '/',
        iconProps: {
          iconName: 'Settings',
          styles: {
            root: {
              fontSize: 20,
              color: '#106ebe',
            },
          }
        }
      },
    ],
  },
];

export class FluentNav extends Component {
render() {
    initializeIcons();
    links[0].links[0].name = this.props.menulist[0];
    links[0].links[1].name = this.props.menulist[1];
    links[0].links[2].name = this.props.menulist[2];
      
    return (
      <Nav
        groups={links}
        selectedKey='key1'
        styles={navigationStyles}
      />
    );
  };
}

export default FluentNav;

