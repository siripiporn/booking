import React from 'react';
import {
    StyleSheet,
    TouchableHighlight,
    TouchableOpacity,
    Text,
    Image,
    View,
    ScrollView,
    AsyncStorage,
    Dimensions
} from 'react-native';

import LoginScreen from '../register/LoginScreen'
// import Banner from '../image/mainpage/kingkongBanner.svg'
// import SmallBanner from '../image/mainpage/smalllogo.svg'
 
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

 
class Main extends React.Component {
    onLogin(){
        this.props.navigation.navigate('LoginScreen')
    }

    render() {
        return (
            <View style={styles.container}>
                    <View style={styles.container_image}> 
                            <View style={styles.banner}>
                                <Text style={{color:'#000000'}}>Banner</Text>
                        </View>
                    
                    </View>
                    <View style={styles.container_content}>
                            
                            <TouchableOpacity onPress={this.onLogin.bind(this)}
                         
                                style={styles.loginButton}>
                                <Text style={styles.loginlogin}>
                                    เข้าสู่ระบบ
                            </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                
                                style={styles.registerButton}>
                                <Text style={styles.loginregister}>
                                    สมัครสมาชิก
                            </Text>
                            </TouchableOpacity>
                            {/* <TouchableOpacity onPress={this.onSignin.bind(this)}>
                                <Text style={styles.signin}>ENTER APPLICATION</Text>
                            </TouchableOpacity> */}
                            <View style={styles.smallbanner}></View>
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
        smallbanner:{
            alignItems:'center',
            flex:1,
            marginBottom:hp('3')
        },
        container_image:{
            backgroundColor: '#fff',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            flex:1,
            
        },
        banner:{
            height: hp('100%'),
            justifyContent: 'center',
            alignItems: 'center'
        },
        content_main:{
            color: 'white',
            fontFamily: 'Rubik-Regular',
            fontSize: hp('3%'),
            textAlign:'center',   
        },
        container_content:{
            backgroundColor: '#fff',
            flexDirection: 'column',
            flex:1,
        },
        signin: {
            color: '#fff',
            fontSize: hp('2%'),
            fontFamily: 'Rubik-Bold',
            textAlign: 'center',
           marginTop: hp('3%')
        },
        texts: {
            color: '#fff',
            fontSize: hp('5%'),
            fontFamily: 'Rubik-Bold',
            textAlign: 'center',
        },
        input: {
            height: 50,
            width: '100%',
            marginTop: 10,
            padding: 4,
            borderRadius: 5,
            fontSize: 16,
            borderWidth: 1,
            borderColor: '#E9E2E2',
            color: 'black'
        },
    
        loginButton: {
            flexDirection: 'row',
            height: hp('9%'),
            backgroundColor: '#5581FB',
            borderRadius: 10,
            justifyContent: 'center',
            marginTop:hp('1%'),
            marginHorizontal:16
        },
        registerButton: {
            flexDirection: 'row',
            marginHorizontal:16,
            height: hp('9%'),
            alignSelf: 'stretch',
            marginTop: hp('2%'),
            borderRadius: 10,
            justifyContent: 'center',
            borderWidth:1,
            borderColor:"#000000",
            borderWidth:1,
            borderColor:'#5581FB'
        },
        loginlogin: {
            fontSize: hp('2%'),
            color: '#fff',
            alignSelf: 'center',
            fontFamily: 'Rubik-Bold',
        },
        loginregister: {
            fontSize: hp('2%'),
            color: '#5581FB',
            alignSelf: 'center',
            fontFamily: 'Rubik-Bold',
        },
        registerButtonText: {
            fontSize: 18,
            color: '#0007',
            alignSelf: 'center',
            fontFamily: 'Rubik-Bold',
        },

    });


export default Main;
