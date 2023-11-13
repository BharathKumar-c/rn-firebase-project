import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SocialMedia = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.socialIcons}
        source={require('../assets/SocialMediaIcons/facebook.png')}
      />
      <Image
        style={styles.twitterIcon}
        source={require('../assets/SocialMediaIcons/twitter.png')}
      />
      <Image
        style={styles.socialIcons}
        source={require('../assets/SocialMediaIcons/google.png')}
      />
    </View>
  );
};

export default SocialMedia;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  socialIcons: {
    width: 40,
    height: 40,
  },
  twitterIcon: {height: 58, width: 58},
});
