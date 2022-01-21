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
  
        console.log("activeTab:", activeTab, "label:", label)
 
      return (
        <S.Tab
          onClick = {onClick}
          activeTab = {activeTab}
          label = {label}
          active = {activeTab === label}
        >
          {label}
        </S.Tab>
      );
    }
  }
  
  export default Tab;
