import React from 'react';
import {View, StyleSheet, Image, Button} from 'react-native';
import {useRoute} from '@react-navigation/native';
import base64 from 'react-native-base64';

const PreviewScreen = () => {
  const route = useRoute();
  const {source, uri} = route.params as {
    source: {uri: string};
    uri: string;
  };

  const onBackend = () => {
    const pic = base64.encode(uri);
    const originPic = base64.encode(source.uri);
    console.log('pic', pic);
    console.log('originPic', originPic);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.imageStyle} source={{uri}} />
      <Image style={styles.imageStyle} source={source} />

      <View style={styles.bottomContainer}>
        <View style={styles.buttonStyle}>
          <Button title="Send" onPress={onBackend} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    flexDirection: 'row',
  },
  imageStyle: {
    width: '50%',
    height: '50%',
  },
  buttonStyle: {
    width: 200,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 15,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingBottom: 30,
    alignItems: 'center',
  },
});

export {PreviewScreen};
