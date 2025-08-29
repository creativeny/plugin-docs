function(props) {
    const React = props.context.libraries['react'];
    const {
      View,
      StyleSheet,
      Linking,
      Platform
    } = props.context.libraries['react-native'];
    const {
      WebView
    } = props.context.libraries['react-native-webview'];
    const {
      'html-code': htmlCode
    } = props;
    let openExternalLinks = true;
    const styles = StyleSheet.create({
      container: {
        width: '100%',
        height: '100%',
        overflow: 'hidden'
      },
      webView: {
        flex: 1
      }
    });
    if (htmlCode) {
      return React.createElement(View, {
        style: styles.container
      }, React.createElement(WebView, {
        originWhitelist: ['*'],
        source: {
          html: htmlCode
        },
        style: styles.webView,
        scrollEnabled: true,
        javaScriptEnabled: true,
        domStorageEnabled: true,
        onLoadEnd: () => props.instance.triggerEvent("loaded")
      }));
    } else {
      return null;
    }
  }