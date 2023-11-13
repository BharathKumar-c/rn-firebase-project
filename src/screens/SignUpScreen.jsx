import {
  Alert,
  Image,
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import MyButton from '../components/MyButton';
import MyInputText from '../components/MyInputText';
import SocialMedia from '../components/SocialMedia';
import auth from '@react-native-firebase/auth';

const SignUpScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const signUpTestFn = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert('User Created with those credentials' + email, password);
        navigation.navigate('Login');
      })
      .catch(err => {
        console.log(err.message);
        Alert.alert(err.message);
      });
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/background.png')}
        style={styles.imageBackground}>
        <Image
          source={require('../assets/food/food.png')}
          style={styles.imagePng}
        />
        <Text style={styles.title}>FatMore</Text>

        {/* Login input form */}
        <View style={styles.loginFormContainer}>
          {/* value, onChangeText */}
          <MyInputText
            onChangeText={text => setEmail(text)}
            value={email}
            placeholder="Enter your username"
          />
          <MyInputText
            onChangeText={text => setPassword(text)}
            value={password}
            placeholder="Password"
            secureTextEntry
          />
          <MyInputText
            onChangeText={text => setConfirmPassword(text)}
            value={confirmPassword}
            placeholder="Confirm Password"
            secureTextEntry
          />
          <MyButton onPress={signUpTestFn} title={'Sign Up'} />
          <Text style={styles.OrText}>OR</Text>
          <SocialMedia />
        </View>
      </ImageBackground>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  OrText: {
    color: 'gray',
    marginTop: 20,
    marginBottom: 10,
    fontSize: 20,
    fontFamily: 'Audiowide-Regular',
  },
  dontHaveAc: {
    alignSelf: 'flex-end',
    marginRight: 10,
    color: 'black',
    marginBottom: 15,
    fontFamily: 'NovaFlat-Regular',
  },
  loginFormContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 450,
    backgroundColor: '#fff',
    borderRadius: 20,
    marginTop: 30,
    paddingHorizontal: 30,
  },
  container: {
    flex: 1,
  },
  imageBackground: {
    height: '100%',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  imagePng: {
    height: 50,
    width: 90,
    resizeMode: 'stretch',
    position: 'absolute',
    right: 20,
    top: Platform.OS === 'ios' ? 50 : 20,
  },
  title: {
    fontSize: 40,
    color: '#fff',
    marginTop: Platform.OS === 'android' ? 60 : 110,
    fontFamily: 'Audiowide-Regular',
  },
});
