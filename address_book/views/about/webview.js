/**
 * Created by lihua on 15/7/12.
 */

var React = require('react-native');
var {
  WebView,
  ScrollView,
  Text,
} = React;


var WebView = React.createClass({

  render: function(){
    return(
      <ScrollView style={{flex:1}}>
        <View style={{flex:1}}>
          <WebView url={this.props.url}/>
        </View>

      </ScrollView>
    );
  }

});

<WebView
  style={{flex:1}}
  startInLoadingState={true}
  url={this.props.url}/>

module.exports = WebView;