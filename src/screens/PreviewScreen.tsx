import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {useRoute} from '@react-navigation/native';

const PreviewScreen = () => {
  const route = useRoute();
  const {source} = route.params as {source: {uri: string}};

  return (
    <View style={styles.container}>
      <Image style={styles.imageStyle} source={{uri: source.uri}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  imageStyle: {
    width: '100%',
    height: '100%',
  },
});

export {PreviewScreen};
