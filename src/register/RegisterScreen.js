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
        import PhoneInput from 'react-native-phone-input'
        import { Stylesglobal } from '../styles/style'
        import Icon from '../icons/Vector.svg'
        import Close from '../icons/close.svg'
        import BACK from '../icons/back.svg'
        import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
        import http from 'axios'
    import HomeScreen from '../homeScreen'
        class RegisterScreen extends React.Component {

            state = {
                tel:"",
                accountName:"",
                ps:"",
                accountType:"",
                status: 1,
                accountName:"",
                phonecode: "+66",
                password: "",
                passwordSecure: true,
            }
            
            onValidateFormRegister(){
                //Tel
                if(this.state.tel == ''){
                    Alert.alert('รบกวนใส่เบอร์โทร');
                }
                if(this.state.password == ''){
                    Alert.alert('รบกวนใส่เบอร์ Password')
                }
                if(this.state.email == ""){
                    Alert.alert('รบกวนใส่อีเมล์')
                }
            }

            async onRegister() {
            //validate form, email | tel | ps 
            this.onValidateFormRegister();

        const axios = require('axios');

        const qs = require('qs')
        const requestBody = {
            
            email: this.state.email,
            tel: this.state.tel,
            ps: this.state.password,
            ps2: this.state.password,
            accountType: 'USER',
            accountName:this.state.email,
            status: 1,
            channel: 'app',
        }
        console.log("f:", requestBody);
        const config = {
            headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        // Make a request for a user with a given ID
        axios({
            method: 'post',
            url: 'http://booking.ratanapron.com/index.php/api/appRegister',
            data: qs.stringify(requestBody),
            config
            })
            .then( (response) => {
                //handle success
                console.log(response.data);
                var result = [];
                result = response.data;
                if(result.data.length >  0){
                    AsyncStorage.setItem('id', response.data[0].id);
                    console.log(response.data[0].id);
                }else{
                Alert.alert(result.message) ;
                this.props.navigation.navigate('HomeScreen')
                }
                
            })
            .catch(function (response) {
                //handle error
                console.error(response);
            });
        
            }
            onChangePhoneNumber(val){
                let phn = val.replace(/[^0-9\-]+/g, '').replace(/(\..*)\./g, '$1');
                this.setState({phonenumber: ""+phn});
                console.log("phone_number: ", phn);
                let cphone = "";
                if(this.state.phonecode == "+66"){ 
                cphone =  ""+val.substring(1, ""+val.length);
                }else{
                    cphone = ""+val;
                }
                console.log(this.state.tel + cphone)
            }
            onSelectCountry(val){
                let ct=[]; 
                ct = this.phone.getAllCountries(); 
                let code = "+"+ct.filter((a,i)=>{ return a.iso2 == val})[0].dialCode; 
                if(val != undefined){
                    this.setState({phonecode: code});
                    console.log("Code is: ", code);
                }
            }
            onGoback() {
                this.props.navigation.goBack();
            }
        
            render() {
                return (
                    <View style={styles.container}>

                        <View style={{ flex: 1, flexDirection: 'column' }}>
                            <View>
                                <Text style={Stylesglobal.register_content}>SIGN UP</Text>
                            </View>
                            <View style={{ flex: 1, }} >
                                <View style={styles.form}>
                                    <View style={{ flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                                        <View style={{ flexDirection: 'column', flex: 10, }}>
                                            <ScrollView>

                                                {/* detait Password */}
                                                <View style={{ flex: 1, flexDirection: 'column', marginHorizontal: 16, }}>

                                                    <View style={Stylesglobal.container_boxInput}>
                                                        <Text style={Stylesglobal.contentinput}>เบอร์โทรศัพท์</Text>

                                                        {/* <TextInput style={{ flex: 1, flexDirection: 'column', }}
                                                            keyboardType={'numeric'}
                                                            autoCapitalize={'none'}
                                                            value={this.state.tel}
                                                            placeholderTextColor='#7AA5E9'
                                                            placeholder="à¹€à¸šà¸­à¸£à¹Œà¹‚à¸—à¸£à¸¨à¸±à¸žà¸—à¹Œ"
                                                            maxLength={10}
                                                            initialCountry='th'
                                                            onChangePhoneNumber={this.onChangePhoneNumber.bind(this)}
                                                            onSelectCountry={this.onSelectCountry.bind(this)}
                                                            style={Stylesglobal.input} >
                                                        </TextInput> */}
                                                        <TextInput style={{ flex: 1, flexDirection: 'column', }}
                                                        value={this.state.tel}
                                                        onChangeText={(text) => this.setState({ tel: text })}
                                                        keyboardType={'default'}
                                                        autoCapitalize={'none'}
                                                        autoCorrect={false}
                                                        placeholderTextColor='#B0C5E8'
                                                        style={Stylesglobal.input}
                                                        maxLength={50}
                                                        placeholder="เบอร์โทร"
                                                        />
                                                    </View>
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
                                                    

                                                    <View style={{ flex: 1, flexDirection: 'column', marginTop: hp('2%') }}>
                                                        <View style={Stylesglobal.buttom_save} >
                                                            {/* <TouchableOpacity onPress={this.onRegisterPressed.bind(this)} */}
                                                            <TouchableOpacity  onPress={this.onRegister.bind(this)}
                                                                style={Stylesglobal.loginButton}>
                                                                <Text style={Stylesglobal.loginButtonText}>
                                                                    ENTER
                                                                </Text>
                                                            </TouchableOpacity>
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

        export default RegisterScreen;