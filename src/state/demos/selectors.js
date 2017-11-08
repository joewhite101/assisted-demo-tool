

import { createSelector } from 'reselect'
import { find, filter, map, get, uniq, intersection, includes, memoize, overArgs, forEach } from 'lodash'


function addIndexToArray(array) {
  return map(array, (el, index) => {
    el.index = index;
    return el;
  });
}


export const getDemos = state => state.demos;
export const getCurrentDemoId = state => state.currentDemoId;
export const getTempDemos = state => state.tempDemos;
export const getCurrentStepIndex = state => state.currentStepIndex;

export const getCurrentDemo = createSelector(
  [getCurrentDemoId, getDemos],
  (currentDemoId, demos) => {
    return find(demos, { id: currentDemoId } );
  }
);



export const getSteps = createSelector(
  [getCurrentDemo],
  (currentDemo) => {
    return currentDemo && currentDemo.steps;
  }
);


export const getAllSteps = createSelector(
  [getSteps],
  (steps) => {
    return steps && addIndexToArray(steps);
  }
);

export const getStepsCount = createSelector(
  [getSteps],
  (steps) => {
    return steps && steps.length;
  }
);

export const getIsLastStep = createSelector(
  [getStepsCount, getCurrentStepIndex],
  (stepsCount, currentStepIndex) => {
    return currentStepIndex >= stepsCount - 1;
  }
);

export const getIsFirstStep = createSelector(
  [getCurrentStepIndex],
  (currentStepIndex) => {
    return currentStepIndex === 0;
  }
);


export const getCurrentStep = createSelector(
  [getAllSteps, getCurrentStepIndex],
  (allSteps, currentStepIndex) => {
    return allSteps[currentStepIndex];
  }
);

export const getCurrentStepContent = createSelector(
  [getCurrentStep],
  (currentStep) => {
    return currentStep.content;
  }
);

export const getCurrentStepBullets = createSelector(
  [getCurrentStep],
  (currentStep) => {
    return currentStep.bullets;
  }
);

export const getCurrentStepName = createSelector(
  [getCurrentStep],
  (currentStep) => {
    return currentStep.name;
  }
);

export const getCurrentStepPersonaId = createSelector(
  [getCurrentStep],
  (currentStep) => {
    return currentStep.personaId;
  }
);
