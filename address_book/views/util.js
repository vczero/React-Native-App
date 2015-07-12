/**
 * Created by lihua on 15/7/12.
 */

var React = require('react-native');
var {
  PixelRatio
} = React;


var Util = {};

//单位像素比
Util.pixel = 1 / PixelRatio.get();








module.exports = Util;