import React, { Component } from 'react';

import SplitPane from 'react-split-pane';

import HorizontalDemoListContainer from 'ui/demos/containers/HorizontalDemoListContainer.js';
import CloseButton from 'ui/shared/components/CloseButton.js';
import SetupDemoButton from 'ui/demos/containers/SetupDemoButtonContainer.js';
import PersonaDropdownLargeContainer from 'ui/personas/containers/PersonaDropdownLargeContainer.js';
import BigStepsListContainer from 'ui/steps/containers/BigStepsListContainer.js';
import BigActiveStepNumberDisplayContainer from 'ui/steps/containers/BigActiveStepNumberDisplayContainer.js';
import BigTimerContainer from 'ui/demos/containers/BigTimerContainer.js';
import CurrentDemoHighlightListContainer from 'ui/demos/containers/CurrentDemoHighlightListContainer.js';

import BigActiveDemoNameDisplay from 'ui/demos/components/BigActiveDemoNameDisplay.js';

import 'ui/shared/components/SplitPaneResizer.css';
import './ControlPage.css';

class ControlPage extends Component {
  render() {
    let className = ['ControlPage'];

    return (
      <div className={className.join(' ')}>
        <div className="header">
          <div className="header-left">
            <HorizontalDemoListContainer />
          </div>
          <div className="header-right">
            <PersonaDropdownLargeContainer />
            <SetupDemoButton />
            <CloseButton />
          </div>
        </div>
        <div className="layout-row main-content">
          <SplitPane split="vertical" minSize={300} defaultSize={400}>
            <div className="layout-col-1">
              <div className="layout-header">
                <div className="font-header-title">Steps index</div>
              </div>
              <BigStepsListContainer />
            </div>
            <SplitPane
              split="vertical"
              minSize={300}
              defaultSize={400}
              primary="second"
            >
              <div className="layout-col-2">
                <div className="layout-header">
                  <BigActiveStepNumberDisplayContainer />
                  <BigTimerContainer />
                </div>
              </div>
              <div className="layout-col-3">
                <SplitPane split="horizontal" minSize={400} defaultSize={500}>
                  <div>
                    <div className="layout-header">
                      <BigActiveDemoNameDisplay />
                    </div>
                    <CurrentDemoHighlightListContainer />
                  </div>
                  <div>NOTES</div>
                </SplitPane>
              </div>
            </SplitPane>
          </SplitPane>
        </div>
      </div>
    );
  }
}

export default ControlPage;
