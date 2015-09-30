
var React = require('react-native');
var {
  View,
  Text,
  WebView,
  AsyncStorage
  } = React;

var Map = React.createClass({
  getInitialState: function(){
    return{
      url: null
    };
  },
  render: function(){
    var webView = null;
    if(this.state.url){
      webView = <WebView url={this.state.url}/>
    }
    return(
      <View style={{flex:1}}>
        {webView}
      </View>
    );
  },
  componentDidMount: function(){
    var that = this;
    AsyncStorage.multiGet(['_' + that.props.type, 'pos'], function(err, result){
      if(!err){
        var pos = result[1][1];
        var markers = result[0][1];
        var url = 'http://vczero.github.io/webview/index.html?';
        if(_GEO_OPEN){
          url += 'pos=' + pos + '&markers=' + markers;
        }else{
          url += 'pos=' + _GEO_TEST_POS + '6&markers=' + markers;
        }
        that.setState({
          url: url
        });
      }else{
        alert('定位失败');
      }
    });
  }
});


module.exports = Map;