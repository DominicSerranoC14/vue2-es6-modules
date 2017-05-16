'use strict';

import Vue from 'vue';
// Lines 5 & 6 disable the annoying messages in the console
Vue.config.devtools = false;
Vue.config.productionTip = false;
import { taskComp } from '../components/task.js';
import { equal } from 'assert';

// Could not get Jasmine to work with Karma, was getting an expect error.


// Using Mocha framework with Karma
describe('Task Component', () => {

  it('Has a props value', () => {
    // Using Mocha assert library
    //equal(actual, expected[, assertion error message]);
    equal(Array.isArray(taskComp.props), true);
  });

});
