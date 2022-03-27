import React, {useCallback} from 'react';
import {Button, StyleSheet, Text, View, Linking, Alert} from 'react-native';

const supportedURL = 'https://google.com';

const unsupportedURL = 'slack://open?team=123456';
const number = '+91909999099';
const mail = 'support@expo.io';

const OpenURLButton = ({url, children}) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);
  //     await Linking.openSettings();
  //   }, []);
  return <Button title={children} onPress={handlePress} />;
};

const DemoLinking = () => {
  return (
    <View style={styles.container}>
      {/* <OpenURLButton url={supportedURL}>Open Supported URL</OpenURLButton>
      <OpenURLButton url={unsupportedURL}>Open Unsupported URL</OpenURLButton> */}
      {/* <OpenURLButton>Open Setting</OpenURLButton> */}
      <Button
        title="call"
        onPress={() => {
          Linking.openURL(`tel: ${number}`);
        }}
      />
      <Button
        title="mail"
        onPress={() => {
          Linking.openURL(`mailto: support@expo.io`);
        }}
      />
      <Button
        title="sms"
        onPress={() => {
          Linking.openURL(`sms: ${number}`);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DemoLinking;
