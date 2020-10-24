import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, Button, ScrollView } from 'react-native';


import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;


export default class Branch extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <ScrollView style={{ flex: 1, flexDirection: 'column' }}>
                        {/* Box 1 */}
                        <View style={styles.container_box}>
                            <View style={{ flexDirection: 'row', flex: 1, }}>
                                <View style={styles.box_start}>
                                    <Text style={styles.box_startContent}>Chiang Rai</Text>
                                    <Text style={styles.contentBold}>Address:</Text>
                                    <Text style={styles.content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel nisi urna. Nullam</Text>
                                    <Text style={styles.contentBold}>Tell:<Text> 097 3050823</Text></Text>
                                </View> 
                                <View style={styles.box_end}>
                                    <View style={styles.box_endContent}>
                                    <Image style={{ width: 156, alignSelf: 'center', height: 156 }} source={require('../image/branch.png')} />
                                    </View>
                                </View>
                            </View>
                        </View>

                        {/* Box 2 */}
                        <View style={styles.container_box}>
                            <View style={{ flexDirection: 'row', flex: 1, }}>
                                <View style={styles.box_start}>
                                    <Text style={styles.box_startContent}>Chiang Rai</Text>
                                    <Text style={styles.contentBold}>Address:</Text>
                                    <Text style={styles.content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel nisi urna. Nullam</Text>
                                    <Text style={styles.contentBold}>Tell:<Text> 097 3050823</Text></Text>
                                </View> 
                                <View style={styles.box_end}>
                                    <View style={styles.box_endContent}>
                                    <Image style={{ width: 156, alignSelf: 'center', height: 156 }} source={require('../image/branch.png')} />
                                    </View>
                                </View>
                            </View>
                        </View>
                        {/* Box 3 */}
                        <View style={styles.container_box}>
                            <View style={{ flexDirection: 'row', flex: 1, }}>
                                <View style={styles.box_start}>
                                    <Text style={styles.box_startContent}>Chiang Rai</Text>
                                    <Text style={styles.contentBold}>Address:</Text>
                                    <Text style={styles.content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel nisi urna. Nullam</Text>
                                    <Text style={styles.contentBold}>Tell:<Text> 097 3050823</Text></Text>
                                </View> 
                                <View style={styles.box_end}>
                                    <View style={styles.box_endContent}>
                                    <Image style={{ width: 156, alignSelf: 'center', height: 156 }} source={require('../image/branch.png')} />
                                    </View>
                                </View>
                            </View>
                        </View>
                        {/* Box 4 */}
                        <View style={styles.container_box}>
                            <View style={{ flexDirection: 'row', flex: 1, }}>
                                <View style={styles.box_start}>
                                    <Text style={styles.box_startContent}>Chiang Rai</Text>
                                    <Text style={styles.contentBold}>Address:</Text>
                                    <Text style={styles.content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel nisi urna. Nullam</Text>
                                    <Text style={styles.contentBold}>Tell:<Text> 097 3050823</Text></Text>
                                </View> 
                                <View style={styles.box_end}>
                                    <View style={styles.box_endContent}>
                                    <Image style={{ width: 156, alignSelf: 'center', height: 156 }} source={require('../image/branch.png')} />
                                    </View>
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
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    box_start: {
        flexDirection: 'column', flex: 1.5, height: hp('20%'), justifyContent: 'center', alignItems: 'flex-start'
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
        flexDirection: 'column', flex: 1, height: hp('20%'), justifyContent: 'center', alignItems: 'flex-end'
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