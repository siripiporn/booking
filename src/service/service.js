import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, Button, ScrollView } from 'react-native';
import { globalStyles } from '../styles/globalStyles'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;


export default class Service extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <ScrollView style={{ flex: 1, flexDirection: 'column' }}>
                        <View style={{ flex: 1, backgroundColor: 'powderblue' }} >
                            <View style={{ flexDirection: 'row', flex: 1 }}>
                                <View style={{ flexDirection: 'column', flex: 1,height:hp('5%') }}>
                                    <Text style={{ color: 'green' }}>dfdf</Text>
                                </View>
                                <View style={{ flexDirection: 'column', flex: 1 ,height:hp('5%') }}>
                                    <Text style={{ color: 'green' }}>dfdf</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ flex: 1, backgroundColor: 'red' }} >
                            <View style={{ flexDirection: 'row', flex: 1 }}>
                                <View style={{ flexDirection: 'column', flex: 1,height:hp('5%') }}>
                                    <Text style={{ color: 'green' }}>dfdf</Text>
                                </View>
                                <View style={{ flexDirection: 'column', flex: 1 ,height:hp('5%') }}>
                                    <Text style={{ color: 'green' }}>dfdf</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ flex: 1, backgroundColor: 'black' }} >
                            <View style={{ flexDirection: 'row', flex: 1 }}>
                                <View style={{ flexDirection: 'column', flex: 1,height:hp('5%') }}>
                                    <Text style={{ color: 'green' }}>dfdf</Text>
                                </View>
                                <View style={{ flexDirection: 'column', flex: 1 ,height:hp('5%') }}>
                                    <Text style={{ color: 'green' }}>dfdf</Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: deviceHeight,
        backgroundColor: 'white'
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