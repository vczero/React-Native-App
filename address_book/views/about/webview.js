/**
 * Created by lihua on 15/7/12.
 */

var React = require('react-native');
var {
  WebView,
  ScrollView,
  Text,
  View,
} = React;


var webview = React.createClass({

  render: function(){
    console.log(this.props.url);
    return(
      <View style={{flex:1}}>
        <WebView url={this.props.url}/>
      </View>
    );
  }

});


module.exports = webview;
