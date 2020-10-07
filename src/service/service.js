import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, Button } from 'react-native';
import { globalStyles } from './styles/globalStyles'
import GenerateUser from '../src/generateUser'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
import Service from '../image/service.svg'

export default class Service extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'column', flex: 1, height: deviceHeight, }}>
                    <View style={styles.section_Header}>
                        <Image
                            style={styles.image}
                            source={require('../image/header.png')} />
                    </View>

                    <View style={styles.section_body}>
                        <View style={{ flex: 0.5, flexDirection: 'column', }}>
                            <View style={styles.container_logo}>

                            </View>
                            <View style={styles.section_content}>
                                <Text style={globalStyles.h1}>SELECT SERVICE
                                 </Text>
                            </View>
                            
                            {/* Box1 */}
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 6,marginTop:hp('5%') }}>

                                <View style={{ flex: 1, }}>
                                    <Image style={{ width: 126, alignSelf: 'center', height: 126 }} source={require('../image/services.jpg')} />
                                </View>
                                <View style={{ flex: 1, }} >
                                    <Image style={{ width: 126, height: 126, alignSelf: 'center' }} source={require('../image/doctor.png')} />
                                </View>

                            </View>
                            <View style={{ flex: 1.5, flexDirection: 'row', justifyContent: 'space-between', }}>

                                <View style={{ flex: 1, justifyContent: 'center' }}>
                                <Text style={globalStyles.h2}>บริการ</Text>
                                </View>
                                <View style={{ flex: 1, justifyContent: 'center' }}>
                                <Text style={globalStyles.h2}>คุณหมอ</Text>
                                </View>
                            </View>

                            {/* Box2 */}
                            <View style={{ flex: 1, marginTop:hp('5%'),flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 6,  }}>

                                <View style={{ flex: 1, }}>
                                    <Image style={{ width: 126, alignSelf: 'center', height: 126 }} source={require('../image/promotion.jpg')} />
                                </View>
                                <View style={{ flex: 1, }} >
                                    <Image style={{ width: 126, height: 126, alignSelf: 'center' }} source={require('../image/branchs.png')} />
                                </View>
                            </View>
                            <View style={{ flex: 1.5, flexDirection: 'row', justifyContent: 'space-between', }}>

                                <View style={{ flex: 1, justifyContent: 'center' }}>
                                    <Text style={globalStyles.h2}>โปรโมชั่น</Text>
                                </View>
                                <View style={{ flex: 1, justifyContent: 'center' }}>
                                <Text style={globalStyles.h2}>สาขา</Text>
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
        height: deviceHeight,
    },
    section_Header: {
        position: 'absolute',
        flex: 1,
        flexDirection: 'column',
        width: wp('100%'),
        height: 330,
        resizeMode: 'center'
    },
    image: {
        flex: 1,
        width: wp('100%'),
        height: 330,
    },
    image_th: {
        flex: 1,
        height: hp('50%'),
        width: wp('50%')
    },
    section_body: {
        position: 'absolute',
        top: 300,
        borderTopStartRadius: 30,
        borderTopEndRadius: 20,
        width: '100%',
        height: deviceHeight,
        backgroundColor: 'white',
        flexDirection: 'column',
        flex: 1,
    },

    container_logo: {
        position: 'absolute',
        // top: -50,
        flex: 1, flexDirection: 'column',
        shadowOpacity: 130,
        shadowColor: 'black'
    },
    logo: {
        width: 86, position: 'relative',
        height: 86,
        borderRadius: 86 / 2,
        left: 19,
    },
    section_content: {
        flexDirection: 'column',
        flex: 1,
        top: 50,
        left: 19,
        marginHorizontal: 16,
        marginRight: 16,

    },
    section_buttom: {
        flex: 3,
        top: 50,
        flexDirection: 'column',
        borderWidth: 1,
    },
    buttom: {
        height: 62, backgroundColor: '#F9FBFF', shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    buttom_en: {
        height: 62, backgroundColor: '#F9FBFF', shadowColor: "#000", marginTop: 15,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    }

});