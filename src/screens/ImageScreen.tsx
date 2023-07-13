import React, {useCallback, useRef, useState} from 'react';
import {Button, Image, View, StyleSheet} from 'react-native';
import Slider from '@react-native-community/slider';
import {ImageCanvas} from '../components/ImageCanvas';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../App';
import ViewShot from 'react-native-view-shot';

type ProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Image'
>;
type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Image'>;

type ImageScreenProps = {
  navigation: ProfileScreenNavigationProp;
  route: ProfileScreenRouteProp;
};

const pickerColor = '#000000';

const ImageScreen = ({navigation}: ImageScreenProps) => {
  const ref = useRef<ViewShot>(null);
  const [lineWidth, setLineWidth] = useState(5);
  const [bg, setBG] = useState('transparent');
  const route = useRoute();
  const {source} = route.params as {source: {uri: string}};

  const onCapture = useCallback(() => {
    setBG('#fff');
    ref.current?.capture().then(uri =>
      navigation.navigate('Preview', {
        source,
        uri,
      }),
    );
  }, [navigation, source]);

  return (
    <View style={styles.container}>
      <ViewShot style={styles.container} ref={ref}>
        <View style={styles.shotView} />
        <Image style={styles.imageStyle} source={source} />

        <View style={[styles.canvasContainer, {backgroundColor: bg}]}>
          <ImageCanvas lineWidth={lineWidth} />
        </View>
      </ViewShot>
      <View style={styles.bottomContainer}>
        <Slider
          style={styles.sliderStyle}
          minimumValue={1}
          maximumValue={10}
          step={1}
          value={lineWidth}
          onValueChange={setLineWidth}
          minimumTrackTintColor={pickerColor}
          maximumTrackTintColor={pickerColor}
        />
        <View style={styles.buttonStyle}>
          <Button title="Send" onPress={onCapture} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
    position: 'absolute',
  },
  shotView: {
    width: 900,
    height: 1600,
  },
  canvasContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingBottom: 30,
    alignItems: 'center',
  },
  sliderStyle: {
    width: 200,
  },
  buttonStyle: {
    width: 200,
    height: 40,
    backgroundColor: '#000',
    borderRadius: 15,
  },
});

export {ImageScreen};
