import React from 'react';
import {View, StyleSheet} from 'react-native';
import {SketchCanvas} from '@terrylinla/react-native-sketch-canvas';

interface ImageCanvasProps {
  lineWidth: number;
}

function ImageCanvas({lineWidth}: ImageCanvasProps) {
  return (
    <View style={styles.container}>
      <SketchCanvas
        style={styles.container}
        strokeColor="#000"
        strokeWidth={lineWidth}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export {ImageCanvas};
