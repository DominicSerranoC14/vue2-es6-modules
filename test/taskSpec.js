'use strict';

import Vue from 'vue';
// Lines 5 & 6 disable the annoying messages in the console
Vue.config.devtools = false;
Vue.config.productionTip = false;
import { taskComp } from '../components/task.js';
import { mount } from 'avoriaz';
// Can require in individual methods in one line
const { equal, isArray, isAbove, notEqual, isFunction } = require('chai').assert;

// How to import Node's assert library and methods
// import { equal } from 'asset';

// Not able to import in methods in one line with ES6 import
// import { assert } from 'chai';
// const { equal } = assert;

// Could not get Jasmine to work with Karma, was getting an expected error.

// Using Mocha framework with Karma
describe('Task Component', () => {
  // ES6 shorthand
  const { completeTask } = taskComp.methods;

  it('props exists and is an array', () => {
    // Using Mocha assert library (which is Node's assert library, this is limited)
    //equal(actual, expected[, assertion error message]);
    // equal(Array.isArray(taskComp.props), true);

    // Using Chai's assertion library
    // http://chaijs.com/api/assert/
    notEqual(taskComp.props, undefined, 'Props should not be undefined');
    isAbove(taskComp.props.length, 0, 'Props length is strictly greater than zero');
    isArray(taskComp.props, true, 'Props should be an array');

  });

  it('completeTask should be a function', () => {
    isFunction(completeTask, 'completeTask should be a function');
  });

  it.skip('complete task should change this.obj.completed to true', () => {
    // const wrapper = mount(taskComp);
    // console.log('wrapper', wrapper.contains('li.d-flex'));
    // const Ctor = Vue.extend(taskComp);
    // const vm = new Ctor().$mount();
    // Object.keys(vm).forEach(each => console.log(each));
    // console.log('options', vm);
  });

});
