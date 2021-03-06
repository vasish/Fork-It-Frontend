import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { LinearGradient } from 'expo';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import { Font } from 'expo';
import { addUserAll, login } from '../actions/UserActions.js';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    }
  }

componentDidMount() {
  console.log('mounted')
}

clickFacebook(firstName, lastName) {
    this.props.addUser(firstName, lastName);
    Actions.discover();
}

clickLogin(username, password) {
  //axios request here
  //if success then login
  this.props.handleLogin(username, password);
  Actions.discover();
  //if fail then do something here
}

render() {
    return (
      <LinearGradient colors={['#303F4C', '#3B4955', '#AFAFAF']} style={styles.background} location={[0.3, 0.4, 1]}>
        <View style={styles.container}>
          <Image style={styles.logotext} source={require("../assets/DesktopCopy3trans.png")}/>
          <View style={styles.inputForm}>
            <View style={styles.input}>
              <Image style={styles.userIcon} source={require("../assets/username.png")}/>
              <TextInput style={styles.inputText} placeholder={'Email'} value={this.state.username} onChangeText={(text) => this.setState({username: text})}/>
            </View>
            <View style={styles.input}>
              <Image style={styles.passIcon} source={require("../assets/password.png")}/>
              <TextInput style={styles.inputText} placeholder={'Password'} value={this.state.password} onChangeText={(text) => this.setState({password: text})}/>
            </View>
            <TouchableOpacity>
              <Text style={styles.forgetText}>Forget Your Password?</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonForm}>
            <TouchableOpacity style={styles.loginButton} onPress={() => this.clickLogin(this.state.username, this.state.password)}>
              <Text style={styles.loginText}> SIGN IN </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.fbButton} onPress={() => this.clickFacebook('Hassan', 'Saab')}>
              <Image style={styles.fbIcon} source={require("../assets/fb.png")}/>
              <Text style={styles.fbText}> LOGIN WITH FACEBOOK </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.signUp} onPress={Actions.register}>
            <Text style={styles.signUpText}>Don't have an account? Sign Up</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    );
  }
}

Login.propTypes = {
};

const mapStateToProps = (state) => {
    return {
      user: state.user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    addUser: (firstName, lastName) => {
      dispatch(addUserAll(firstName, lastName))
    },
    handleLogin: (username, password) => {
      dispatch(login(username, password))
    }
  }
};

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: verticalScale(700),
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  container: {
    backgroundColor: 'transparent',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: verticalScale(400),
    width: scale(300),
    bottom: verticalScale(100)
  },
  logotext: {
    height: verticalScale(175),
    width: scale(250)
  },
  inputForm: {
    height: verticalScale(130),
    width: scale(300),
    justifyContent: 'space-around'
  },
  userIcon: {
    height: verticalScale(20),
    width: scale(20),
    left: scale(8)
  },
  passIcon: {
    height: verticalScale(25),
    width: scale(25),
    left: scale(5)
  },
  input: {
    height: verticalScale(45),
    width: scale(300),
    backgroundColor: 'white',
    justifyContent: 'center',
    borderRadius: 20
  },
  inputText: {
    position: 'absolute',
    fontFamily: 'Futura',
    fontSize: moderateScale(15),
    color: 'grey',
    left: scale(30)
  },
  forgetText: {
    fontSize: moderateScale(12),
    top: verticalScale(2),
    alignSelf: 'flex-end',
    color: 'white'
  },
  buttonForm: {
    top: verticalScale(40),
    height: verticalScale(125),
    width: scale(300),
    justifyContent: 'space-around'
  },
  loginButton: {
    height: verticalScale(45),
    width: scale(300),
    backgroundColor: '#192F4A',
    justifyContent: 'center',
    borderRadius: 20
  },
  loginText: {
    fontSize: moderateScale(15),
    color: 'white',
    alignSelf: 'center'
  },
  fbButton: {
    height: verticalScale(45),
    width: scale(300),
    backgroundColor: '#425BB4',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    flexDirection: 'row'
  },
  fbIcon: {
    height: verticalScale(20),
    width: scale(20),
    right: scale(12)
  },
  fbText: {
    fontSize: moderateScale(15),
    color: 'white',
    alignSelf: 'center'
  },
  signUp: {
    top: verticalScale(100),
  },
  signUpText: {
    fontWeight: 'bold',
    fontSize: moderateScale(12),
    alignSelf: 'center',
    color: 'white'
  }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
