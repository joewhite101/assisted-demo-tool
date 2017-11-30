import React, { Component } from 'react';

import SplitPane from 'react-split-pane';

import PopupContainer from 'ui/shared/containers/PopupContainer.js';
import HorizontalDemoListContainer from 'ui/demos/containers/HorizontalDemoListContainer.js';
import CloseButton from 'ui/shared/components/CloseButton.js';
import SetupDemoButton from 'ui/demos/containers/SetupDemoButtonContainer.js';
import PersonaDropdownLargeContainer from 'ui/personas/containers/PersonaDropdownLargeContainer.js';
import BigStepsListContainer from 'ui/steps/containers/BigStepsListContainer.js';
import BigTimerContainer from 'ui/demos/containers/BigTimerContainer.js';
import CurrentDemoHighlightListContainer from 'ui/demos/containers/CurrentDemoHighlightListContainer.js';
import CurrentDemoNotesListContainer from 'ui/notes/containers/CurrentDemoNotesListContainer.js';
import OpenNewNotePopupButtonContainer from 'ui/notes/containers/OpenNewNotePopupButtonContainer.js';
import NewNoteFormContainer from 'ui/notes/containers/NewNoteFormContainer.js';
import StepsCountContainer from 'ui/steps/containers/StepsCountContainer.js';

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
            <BigTimerContainer />
            <CloseButton />
          </div>
        </div>
        <div className="layout-row main-content">
          <SplitPane
            split="vertical"
            minSize={300}
            defaultSize={320}
            pane1Style={{ overflow: 'scroll' }}
          >
            <div className="layout-col-1">
              <div className="steps-header">
                <div className="font-header-title">Steps index</div>
                <div className="font-header-subtitle">
                  Total <StepsCountContainer /> Steps
                </div>
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
                <div className="layout-header" />
              </div>
              <div className="layout-col-3">
                <SplitPane
                  split="horizontal"
                  minSize={400}
                  defaultSize={500}
                  primary="second"
                >
                  <div className="white-area">
                    <div className="grey-area layout-header">
                      <div className="icon-label">
                        <i
                          className="icon fa fa-lightbulb-o"
                          aria-hidden="true"
                        />
                        <span className="label">Highlights</span>
                      </div>
                    </div>
                    <CurrentDemoHighlightListContainer />
                  </div>
                  <div className="white-area notes-section">
                    <div className="grey-area layout-header">
                      <div className="icon-label">
                        <i className="icon fa fa-pencil" aria-hidden="true" />
                        <span className="label">Notes</span>
                      </div>
                    </div>
                    <CurrentDemoNotesListContainer />
                    <div className="footer-controls-section add-notes-section">
                      <PopupContainer
                        className="popup-cover grey-area new-note-popup"
                        popupId="newNoteForm"
                        closeOnClick={false}
                      >
                        <NewNoteFormContainer />
                      </PopupContainer>
                      <OpenNewNotePopupButtonContainer />
                    </div>
                  </div>
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
