import { connect } from 'react-redux';
import { getDisplayBullets } from 'state/ui/selectors.js';
import {
  getCurrentStepContent,
  getCurrentStepBullets,
  getCurrentStepName
} from 'state/demos/selectors.js';
import { showBullets } from 'state/ui/actions.js';
import StepContent from '../components/StepContent.js';

const mapStateToProps = state => {
  return {
    content: getCurrentStepContent(state),
    bullets: getCurrentStepBullets(state),
    displayBullets: getDisplayBullets(state),
    stepTitle: getCurrentStepName(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showBullets: show => {
      dispatch(showBullets(show));
    }
  };
};

const StepContentContainer = connect(mapStateToProps, mapDispatchToProps)(
  StepContent
);

export default StepContentContainer;