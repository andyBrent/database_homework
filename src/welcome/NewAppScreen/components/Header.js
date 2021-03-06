'use strict';
import Colors from './Colors';
import type {Node} from 'react';
import {Text, StyleSheet, ImageBackground} from 'react-native';
import React from 'react';

const Header = (): Node => (
  <ImageBackground
    accessibilityRole={'image'}
    source={require('./logo.jpg')}
    style={styles.background}
    imageStyle={styles.logo}>
    <Text style={styles.mainText}>博纳上财</Text>
    <Text style={styles.subText}>上海财经大学图书管理系统</Text>
  </ImageBackground>
);

const styles = StyleSheet.create({
  background: {
    paddingBottom: 40,
    paddingTop: 96,
    paddingHorizontal: 32,
    backgroundColor: Colors.lighter,
  },
  logo: {
    opacity: 0.2,
    overflow: 'visible',
    resizeMode: 'cover',
    /*
     * These negative margins allow the image to be offset similarly across screen sizes and component sizes.
     *
     * The source logo.png image is 512x512px, so as such, these margins attempt to be relative to the
     * source image's size.
     */
    marginLeft: -128,
    marginBottom: -192,
  },
  mainText: {
    fontSize: 40,
    fontWeight: '600',
    textAlign: 'center',
    color: Colors.black,
  },
  subText: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'right',
    color: Colors.black,
  },
});

export default Header;
