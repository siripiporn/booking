    import React from 'react';
    import {
        StyleSheet,
        TextInput,
        TouchableHighlight,
        ActivityIndicatorIOS,
        AsyncStorage,
        Alert,
        Text,
        Image,
        View,
        ScrollView,
        SafeAreaView,
        TouchableOpacity
    } from 'react-native';
    import HomeScreen from '../homeScreen'
    import RegisterScreen from './RegisterScreen'
    import ForgotPassword from './ForgotPassword'
    import { Stylesglobal } from '../styles/style'
    import Icon from '../icons/Vector.svg'
    import Close from '../icons/close.svg'
    import BACK from '../icons/back.svg'
    import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
    import http from 'axios'
    import * as queryString from 'query-string'
    //const queryString = require('query-string');

    class LoginScreen extends React.Component {

        state = {
            password: "",
            email: "",
            passwordSecure: true,
            
        }
        constructor(props) {
            super(props)
            this.state = {
                email: "",
                password: "",
                passwordSecure: true,
            }
            //console.log("Log:Login =>",this.props)
        }

        

        async onLoginPressed() {
        
            const axios = require('axios');
    //var FormData = require('form-data');
    // var bodyFormData = new FormData();
    // bodyFormData.append('username', 'user1@ratanapron.com');
    // bodyFormData.append('password', '123456789');
    // bodyFormData.append('channel', 'app');
    //console.log(bodyFormData)

    const qs = require('qs')
    const requestBody = {
        password: this.state.password,
        username: this.state.email,
        channel: 'app',
    }
    const config = {
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
        }
    }
    // Make a request for a user with a given ID
    axios({
        method: 'post',
        url: 'http://booking.ratanapron.com/index.php/api/appLogin',
        data: qs.stringify(requestBody),
        config
        })
        .then( (response) => {
            //handle success
            console.log(response.data);
            var result = [];
            result = response.data;
            if(result.data.length > 0){
           
                this.props.navigation.navigate('HomeScreen')
            }else
            {
              Alert.alert(result.message) ;
            }
            // 
            
            
        })
        .catch(function (response) {
            //handle error
            //console.error(response);
            if (error.response) {
                // Request made and server responded
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
              } else if (error.request) {
                // The request was made but no response was received
                console.log(error.request);
              } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
              }
        }
        
        
        );
       
        }

        
        onGoback() {
            this.props.navigation.goBack();
        }
        
        OnRegister() {
            this.props.navigation.navigate('RegisterScreen')
        }
        ForgotPassword(){
            this.props.navigation.navigate('ForgotPassword')
        }
        OnLogin(){
            this.props.navigation.navigate('HomeScreen')
        }
        render() {
            return (
                <View style={styles.container}>

                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <View>
                            <Text style={Stylesglobal.register_content}>Welcome</Text>
                        </View>

                        <View style={{ flex: 1, }} >
                            <View style={styles.form}>
                                <View style={{ flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                                    <View style={{ flexDirection: 'column', flex: 10, }}>
                                        <ScrollView>

                                            {/* detait Password */}
                                            <View style={{ flex: 1, flexDirection: 'column', marginHorizontal: 16, }}>

                                                <View style={Stylesglobal.container_boxInput}>
                                                    <Text style={Stylesglobal.contentinput}>E-mail</Text>
                                                    <TextInput style={{ flex: 1, flexDirection: 'column', }}
                                                    value={this.state.email}
                                                    onChangeText={(text) => this.setState({ email: text })}
                                                    keyboardType={'default'}
                                                    autoCapitalize={'none'}
                                                    autoCorrect={false}
                                                    placeholderTextColor='#B0C5E8'
                                                    style={Stylesglobal.input}
                                                    maxLength={50}
                                                    placeholder="johndoe@email.com"

                                                        
                                                    />
                                                </View>

                                                <View style={Stylesglobal.container_boxInput}>
                                                    <Text style={Stylesglobal.contentinput}>Password</Text>
                                                    <TextInput style={{ flex: 1, flexDirection: 'column', }}
                                                        onChangeText={(text) => this.setState({ password: text })}
                                                        value={this.state.password}
                                                        //secureTextEntry={this.state.passwordSecure}
                                                        autoCapitalize={'none'}
                                                        autoCorrect={false}
                                                        style={Stylesglobal.input}
                                                        secureTextEntry={true}
                                                        placeholderTextColor='#B0C5E8'
                                                        placeholder="Password"
                                                    />
                                                </View>
                                                {/* Change Password buttom*/}
                                                <View style={{ flex: 1, flexDirection: 'column', alignItems: 'flex-end' }}>
                                                    <TouchableOpacity onPress={this.ForgotPassword.bind(this)} >
                                                        <Text style={Stylesglobal.changePassword}>
                                                            ลืมรหัสผ่าน
                                                        </Text>
                                                    </TouchableOpacity>
                                                </View>
                                                <View style={{ flex: 1, flexDirection: 'column', alignItems: 'flex-end' }}>
                                                    <View style={{ flex: 1, flexDirection: 'row', marginTop: hp('2%') }}>
                                                        <View style={Stylesglobal.buttom_save} >
                                                            {/* <TouchableOpacity onPress={this.onRegisterPressed.bind(this)} */}
                                                            <TouchableOpacity onPress={this.OnLogin.bind(this)}
                                                                style={Stylesglobal.loginButton}>
                                                                <Text style={Stylesglobal.loginButtonText}>
                                                                    ENTER
                                                            </Text>
                                                            </TouchableOpacity>
                                                        </View>
                                                    </View>
                                                    <View style={{ flex: 1, flexDirection: 'row', }}>
                                                        <View style={Stylesglobal.buttom_save} >

                                                            <TouchableOpacity onPress={this.OnRegister.bind(this)}
                                                                style={Stylesglobal.registerButtom}>
                                                                <Text style={Stylesglobal.registerButtonText}>
                                                                    REGISTER
                                                            </Text>
                                                            </TouchableOpacity>
                                                        </View>
                                                    </View>
                                                </View>


                                            </View>
                                        </ScrollView>
                                    </View>

                                </View>
                            </View>
                        </View>


                    </View>
                </View>

            );
        }
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'column',
            backgroundColor: '#fff',
        },

        form: {
            flex: 1,
            flexDirection: 'column',
            marginTop: '10%'
        },
        buttom_save: {
            flex: 0.7,
            flexDirection: 'row',
            marginHorizontal: 16,
            marginRight: 16,
            justifyContent: 'flex-end',
        },
        loginButtonText: {
            flexDirection: 'column',
            flex: 1, alignSelf: 'center',
            textAlign: 'center',
            marginHorizontal: 15,
            fontSize: 14,
            color: '#781819',
            fontFamily: 'Kanit',
        },

        loginButton: {
            backgroundColor: '#FFFFFF',
            marginTop: 8, height: 50,
            flexDirection: 'row', flex: 1,
            borderRadius: 3,
        },

    });

    export default LoginScreen;
