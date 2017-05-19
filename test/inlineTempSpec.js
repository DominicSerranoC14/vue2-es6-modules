'use strict';

import Vue from 'vue';
// Lines 5 & 6 disable the annoying messages in the console
Vue.config.devtools = false;
Vue.config.productionTip = false;
import { homeInlineTemp } from '../components/inlineTemp.js';
import { mount } from 'avoriaz';
// Can require in individual methods in one line
const { equal, isArray, isAbove, notEqual, isFunction } = require('chai').assert;


describe('inlineTemp Component', () => {

  it.skip('should return json', () => {
    // equal(true, false);
    // const Ctor = Vue.extend(homeInlineTemp);
    // const vm = new Ctor().$mount();
    // Object.keys(vm).forEach(each => console.log(each));
    // console.log('options', vm.$el.textContent);
  });

});
