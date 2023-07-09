import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

function HomeScreen({navigation}: any) {
  const pickImage = () => {
    ImagePicker.openPicker({
      width: 900,
      height: 1600,
      cropping: true,
    }).then(image => {
      const source = {uri: image.path};
      navigation.navigate('Image', {source: source});
    });
  };

  return (
    <View style={styles.container}>
      <Button title="Upload a photo" onPress={pickImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export {HomeScreen};
