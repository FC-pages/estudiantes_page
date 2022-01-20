import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as S from './styles/main.ts';

class Tab extends Component {
    static propTypes = {
      activeTab: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
    };
  
    onClick = () => {
      const { label, onClick } = this.props;
      onClick(label);
    }
  
    render() {
      const {
        onClick,
        props: {
          activeTab,
          label,
        },
      } = this;
  
      let className = 'tab-list-item';
  
      if (activeTab === label) {
        className += ' tab-list-active';
      }
  
      return (
        <S.Tab
          className = {className}  
          onClick = {onClick}
        >
          {label}
        </S.Tab>
      );
    }
  }
  
  export default Tab;
