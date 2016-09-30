import React, { PropTypes, Component } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Split from 'grommet/components/Split';
import Sidebar from 'grommet/components/Sidebar';
import Menu from 'grommet/components/Menu';
import { AppHeader } from 'components';
import { Link, IndexLink } from 'react-router';

class SidebarNav extends Component {
  constructor() {
    super();
    this.renderMenu = this.renderMenu.bind(this);
  }
  renderMenu() {
    const {
      onToggleNav,
    } = this.props;
    return (
      <Sidebar size="medium" colorIndex="neutral-1" fixed seperator="right">
        <AppHeader {...this.props} />
        <Menu primary className={styles.menu}>
          <IndexLink
            to="/home"
            activeClassName="active"
            onClick={() => onToggleNav()}
          >
            Home
          </IndexLink>
          <Link
            to="geo-spatial"
            activeClassName="active"
            onClick={() => onToggleNav()}
          >
            Geospatial View
          </Link>
          <Link
            to="key-metrics"
            activeClassName="active"
            onClick={() => onToggleNav()}
          >
            Key Metrics
          </Link>
          <Link
            to="data"
            activeClassName="active"
            onClick={() => onToggleNav()}
          >
            Data
          </Link>
          <Link
            to="about"
            activeClassName="active"
            onClick={() => onToggleNav()}
          >
            About
          </Link>
        </Menu>
      </Sidebar>
    );
  }
  render() {
    const {
      navActive,
      children,
    } = this.props;
    return (
      <Split flex="right" priority={navActive ? 'left' : 'right'}>
        {navActive && this.renderMenu()}
        <main>
          {children}
        </main>
      </Split>
    );
  }
}


SidebarNav.propTypes = {
  children: PropTypes.node.isRequired,
  navActive: PropTypes.bool.isRequired,
  onToggleNav: PropTypes.func.isRequired,
};

export default cssModules(SidebarNav, styles);
