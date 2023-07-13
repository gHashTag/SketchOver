import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {useRoute} from '@react-navigation/native';

const PreviewScreen = () => {
  const route = useRoute();
  const {source, uri} = route.params as {
    source: {uri: string};
    uri: string;
  };

  return (
    <View style={styles.container}>
      <Image style={styles.imageStyle} source={{uri}} />
      <Image style={styles.imageStyle} source={source} />
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
});

export {PreviewScreen};
