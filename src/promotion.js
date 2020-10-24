import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, Button, ScrollView } from 'react-native';


import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;


export default class Promotion extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <ScrollView style={{ flex: 1, flexDirection: 'column' }}>
                        {/* Box1 */}
                         <View>
                             <View style={{flex: 1, alignItems: "center", justifyContent: "center" }}>
                                 <Image style={{ flex:1,flexDirection:'column',resizeMode:'cover',height:hp('30%'),width:wp('100%')}} source={require('../image/promotion1.png')}/>
                            </View>
                         </View>

                         <View>
                             <View style={{flex: 1, justifyContent:'flex-start' }}>
                                 <Text style={styles.content}>Name Promotion</Text>
                                 <Text style={styles.date}>10 December 2020 - 20 January 2021</Text>
                                 <Text style={styles.contentDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                        Curabitur vel nisi urna. Nullam vitae elementum mauris. 
                                        Aenean quis laoreet massa, at varius sapien. Nulla facilisi.</Text>
                            </View>
                         </View>
{/* Box2 */}
<View>
                             <View style={{flex: 1, alignItems: "center", justifyContent: "center" }}>
                                 <Image style={{ flex:1,flexDirection:'column',resizeMode:'cover',height:hp('30%'),width:wp('100%')}} source={require('../image/promotion2.png')}/>
                            </View>
                         </View>

                         <View>
                             <View style={{flex: 1, justifyContent:'flex-start' }}>
                                 <Text style={styles.content}>Name Promotion</Text>
                                 <Text style={styles.date}>10 December 2020 - 20 January 2021</Text>
                                 <Text style={styles.contentDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                        Curabitur vel nisi urna. Nullam vitae elementum mauris. 
                                        Aenean quis laoreet massa, at varius sapien. Nulla facilisi.</Text>
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
    content:{
        color: 'black', 
        fontFamily: 'Kanit-Regular',
        fontSize: hp('2%'),
        marginHorizontal:16
    },
    date:{
        color: 'black', 
        fontFamily: 'Kanit-Light',
        fontSize: hp('1.5%'),
        marginHorizontal:16
    },
    contentDescription:{
        color: 'black', 
        fontFamily: 'Kanit-Light',
        fontSize: hp('1.8%'),
        marginHorizontal:16
    },
    contentSection:{
        color: 'black', 
        fontFamily: 'Kanit-Light',
        fontSize: hp('1.5%'),
        marginHorizontal:16,
        marginTop:hp('1%')
    },
     
   

});