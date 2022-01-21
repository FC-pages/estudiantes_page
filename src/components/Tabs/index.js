import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as S from './styles/main.ts';
import Tab from './Tab';

class Tabs extends Component {
    static propTypes = {
      children: PropTypes.instanceOf(Array).isRequired,
    }
  
    constructor(props) {
      super(props);
  
      this.state = {
        activeTab: this.props.children[0].props.label,
      };
    }
  
    onClickTabItem = (tab) => {
      this.setState({ activeTab: tab });
    }
    render() {
        const {
          onClickTabItem,
          props: {
            children,
          },
          state: {
            activeTab,
          }
        } = this;
    
        return (
          <S.Tabs> 
              <ol>
                {children.map((child) => {
                  const { label } = child.props;
      
                  return (
                    <Tab
                      activeTab={activeTab}
                      key={label}
                      label={label}
                      onClick={onClickTabItem}
                    />
                  );
                })}
              </ol>
              <div >
                {children.map((child) => {
                  if (child.props.label !== activeTab) return undefined;
                  return child.props.children;
                })}
              </div>

<div class="tabs tabs-style-shape">
					<nav>
						<ul>
							<li>
								<a href="#section-shape-1">
									<svg viewBox="0 0 80 60" preserveAspectRatio="none"><use xlinkHref="#tabshape"></use></svg>
									<span>Home</span>
								</a>
							</li>
							<li>
								<a href="#section-shape-2">
									<svg viewBox="0 0 80 60" preserveAspectRatio="none"><use xlinkHref="#tabshape"></use></svg>
									<svg viewBox="0 0 80 60" preserveAspectRatio="none"><use xlinkHref="#tabshape"></use></svg>
									<span>Design</span>
								</a>
							</li>
							<li>
								<a href="#section-shape-3">
									<svg viewBox="0 0 80 60" preserveAspectRatio="none"><use xlinkHref="#tabshape"></use></svg>
									<svg viewBox="0 0 80 60" preserveAspectRatio="none"><use xlinkHref="#tabshape"></use></svg>
									<span>Work</span>
								</a>
							</li>
							<li>
								<a href="#section-shape-4">
									<svg viewBox="0 0 80 60" preserveAspectRatio="none"><use xlinkHref="#tabshape"></use></svg>
									<svg viewBox="0 0 80 60" preserveAspectRatio="none"><use xlinkHref="#tabshape"></use></svg>
									<span>Portfolio</span>
								</a>
							</li>
							<li>
								<a href="#section-shape-5">
									<svg viewBox="0 0 80 60" preserveAspectRatio="none"><use xlinkHref="#tabshape"></use></svg>
									<span>Contact</span>
								</a>
							</li>
						</ul>
					</nav>
					<div class="content-wrap">
						<section id="section-shape-1"><p>1</p></section>
						<section id="section-shape-2"><p>2</p></section>
						<section id="section-shape-3"><p>3</p></section>
						<section id="section-shape-4"><p>4</p></section>
						<section id="section-shape-5"><p>5</p></section>
					</div>
				</div>



          </S.Tabs>
        );
      }
    }
    
    export default Tabs;
