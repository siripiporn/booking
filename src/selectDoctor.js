import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, Button, ScrollView } from 'react-native';
import Booking from './booking'


import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;


export default class SelectDoctor extends Component {
    onBooking(){
        this.props.navigation.navigate('Booking')
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <ScrollView style={{ flex: 1, flexDirection: 'column' }}>
                        {/* Box 1 */}
                        <TouchableOpacity onPress={this.onBooking.bind(this)} style={styles.container_box}>
                            <View style={{ flexDirection: 'row', flex: 1, }}>
                                 
                                <View style={styles.box_start}>
                                    <View style={styles.box_endContent}>
                                    <Image style={{ width: 82, alignSelf: 'center', height: 82 }} source={require('../image/selectDoctor.png')} />
                                    </View>
                                </View>
                                <View style={styles.box_end}>
                                    <Text style={styles.box_startContent}>MR.Jone</Text>
                                     
                                    <Text style={styles.contentBold}>Working Day: <Text style={styles.content}>Mon,Friday</Text></Text>
                                    <Text style={styles.contentBold}>Time:<Text style={styles.content}> 14:00 - 19:00</Text></Text>
                                </View> 
                            </View>
                        </TouchableOpacity>

                        {/* Box 2 */}
                        <View style={styles.container_box}>
                            <View style={{ flexDirection: 'row', flex: 1, }}>
                                 
                                <View style={styles.box_start}>
                                    <View style={styles.box_endContent}>
                                    <Image style={{ width: 82, alignSelf: 'center', height: 82 }} source={require('../image/selectDoctor.png')} />
                                    </View>
                                </View>
                                <View style={styles.box_end}>
                                    <Text style={styles.box_startContent}>MR.Jone</Text>
                                     
                                    <Text style={styles.contentBold}>Working Day: <Text style={styles.content}>Mon,Friday</Text></Text>
                                    <Text style={styles.contentBold}>Time:<Text style={styles.content}> 14:00 - 19:00</Text></Text>
                                </View> 
                            </View>
                        </View>
                        {/* Box 3 */}
                        <View style={styles.container_box}>
                            <View style={{ flexDirection: 'row', flex: 1, }}>
                                 
                                <View style={styles.box_start}>
                                    <View style={styles.box_endContent}>
                                    <Image style={{ width: 82, alignSelf: 'center', height: 82 }} source={require('../image/selectDoctor.png')} />
                                    </View>
                                </View>
                                <View style={styles.box_end}>
                                    <Text style={styles.box_startContent}>MR.Jone</Text>
                                     
                                    <Text style={styles.contentBold}>Working Day: <Text style={styles.content}>Mon,Friday</Text></Text>
                                    <Text style={styles.contentBold}>Time:<Text style={styles.content}> 14:00 - 19:00</Text></Text>
                                </View> 
                            </View>
                        </View>
                        {/* Box 4 */}
                        <View style={styles.container_box}>
                            <View style={{ flexDirection: 'row', flex: 1, }}>
                                 
                                <View style={styles.box_start}>
                                    <View style={styles.box_endContent}>
                                    <Image style={{ width: 82, alignSelf: 'center', height: 82 }} source={require('../image/selectDoctor.png')} />
                                    </View>
                                </View>
                                <View style={styles.box_end}>
                                    <Text style={styles.box_startContent}>MR.Jone</Text>
                                     
                                    <Text style={styles.contentBold}>Working Day: <Text style={styles.content}>Mon,Friday</Text></Text>
                                    <Text style={styles.contentBold}>Time:<Text style={styles.content}> 14:00 - 19:00</Text></Text>
                                </View> 
                            </View>
                        </View>
                          {/* Box 4 */}
                          <View style={styles.container_box}>
                            <View style={{ flexDirection: 'row', flex: 1, }}>
                                 
                                <View style={styles.box_start}>
                                    <View style={styles.box_endContent}>
                                    <Image style={{ width: 82, alignSelf: 'center', height: 82 }} source={require('../image/selectDoctor.png')} />
                                    </View>
                                </View>
                                <View style={styles.box_end}>
                                    <Text style={styles.box_startContent}>MR.Jone</Text>
                                     
                                    <Text style={styles.contentBold}>Working Day: <Text style={styles.content}>Mon,Friday</Text></Text>
                                    <Text style={styles.contentBold}>Time:<Text style={styles.content}> 14:00 - 19:00</Text></Text>
                                </View> 
                            </View>
                        </View>
                          {/* Box 4 */}
                          <View style={styles.container_box}>
                            <View style={{ flexDirection: 'row', flex: 1, }}>
                                 
                                <View style={styles.box_start}>
                                    <View style={styles.box_endContent}>
                                    <Image style={{ width: 82, alignSelf: 'center', height: 82 }} source={require('../image/selectDoctor.png')} />
                                    </View>
                                </View>
                                <View style={styles.box_end}>
                                    <Text style={styles.box_startContent}>MR.Jone</Text>
                                     
                                    <Text style={styles.contentBold}>Working Day: <Text style={styles.content}>Mon,Friday</Text></Text>
                                    <Text style={styles.contentBold}>Time:<Text style={styles.content}> 14:00 - 19:00</Text></Text>
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
        backgroundColor: 'white',
        
    },
    content:{
        color: 'black', 
        fontFamily: 'Kanit-Light',
        fontSize: hp('1.5%'),
        marginHorizontal:16
    },
    contentSection:{
        color: 'black', 
        fontFamily: 'Kanit-Light',
        fontSize: hp('1.5%'),
        marginHorizontal:16,
        marginTop:hp('1%')
    },
    container_box: {
        flex: 1, backgroundColor: '#F9FBFF', marginTop: hp('2%'),
        marginHorizontal: 16, marginLeft: 16, borderRadius: 5,
        
    },
   
    box_startContent: {
        color: 'black', fontFamily: 'Kanit-Regular',
        fontSize: hp('2%'), justifyContent: 'flex-start', marginHorizontal: 16,
    },
    contentBold :{
        color: 'black', fontFamily: 'Kanit-Regular',
        fontSize: hp('1.5%'), justifyContent: 'flex-start', marginHorizontal: 16,
    },
    box_end: {
        flexDirection: 'column', flex: 2, height: hp('15%'), justifyContent: 'center', alignItems: 'flex-start'
    },
    box_start: {
        
        flexDirection: 'column', flex: 1, height: hp('15%'), justifyContent: 'center', alignItems: 'flex-end'
    },
    box_endContent: {
        color: 'green', alignItems: 'center', textAlign: 'right', marginRight: 16
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