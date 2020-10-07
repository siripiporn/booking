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

class LoginScreen extends React.Component {

    state = {
        phonecode: "+66",
        phonenumber: "",
        password: "",
        newPassword: "",
        confirmPassword: "",
        passwordSecure: true,
    }
    onGoback() {
        this.props.navigation.goBack();
    }
    OnLogin() {
        this.props.navigation.navigate('HomeScreen')
    }
    OnRegister() {
        this.props.navigation.navigate('RegisterScreen')
    }
    ForgotPassword(){
        this.props.navigation.navigate('ForgotPassword')
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

                                                    autoCapitalize={'none'}
                                                    autoCorrect={false}
                                                    style={Stylesglobal.input}
                                                    secureTextEntry={true}
                                                    placeholderTextColor='#B0C5E8'
                                                    placeholder="Email Address"
                                                />
                                            </View>

                                            <View style={Stylesglobal.container_boxInput}>
                                                <Text style={Stylesglobal.contentinput}>Password</Text>
                                                <TextInput style={{ flex: 1, flexDirection: 'column', }}

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
