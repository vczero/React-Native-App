/**
 * Created by lihua on 15/7/12.
 */

var React = require('react-native');
var AdSupportIOS = require('AdSupportIOS');
var Dimensions = require('Dimensions');
//var KeyboardEvents = require('react-native-keyboardevents');
//var KeyboardEventEmitter = KeyboardEvents.Emitter;


var {
  PixelRatio
} = React;


var Util = {

  //单位像素比
  pixel: 1 / PixelRatio.get(),
  //屏幕尺寸
  size: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  }

};



module.exports = Util;