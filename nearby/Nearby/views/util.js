var React = require('react-native');
var Dimensions = require('Dimensions');

var {
  PixelRatio
  } = React;

var Util = {

  //单位像素
  pixel: 1 / PixelRatio.get(),
  //屏幕尺寸
  size: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },

  //post
  post: function (url, data, callback) {
    var fetchOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };

    fetch(url, fetchOptions)
      .then((response) => response.text())
      .then((responseText) => {
        callback(JSON.parse(responseText));
      });
  },

  //get
  getJSON: function(url, callback){
    fetch(url)
      .then((response) => response.text())
      .then((responseText) => {
        callback(JSON.parse(responseText));
      });
  },
  //高德地图key，测试key，请勿商用，后期会清理。申请key请到：http://lbs.amap.com/console/
  amapKey: '98cd4d3c1c2865132e73d851654c9c1b',
  //周边搜索服务
  searchURL: 'http://restapi.amap.com/v3/place/around?',

  detailURL: 'http://restapi.amap.com/v3/place/detail?'

};

module.exports = Util;