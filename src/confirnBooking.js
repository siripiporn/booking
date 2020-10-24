import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, Button, ScrollView } from 'react-native';


import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;


export default class ConfirnBooking extends Component {
    
    OnConfirnBooking(){
        this.props.navigation.navigate('ConfirnBooking')
          }
    render() {
        return (
            <View style={styles.container}>
                
                    <ScrollView style={{ flex: 8, flexDirection: 'column', marginHorizontal: 16, marginRight: 16, marginTop: hp('3%') }}>
                    <View style={{ flex: 1, flexDirection: 'column',}}>
                            <Text style={styles.content}>Name: Miss Siriporn Puttachan</Text>
                            <Text style={styles.contentBlack}>DR.Jone</Text>
                            <Text style={styles.contentSmall}>Service: <Text style={styles.contentLight}>Fill The Tooth</Text></Text>
                            <Text style={styles.contentSmall}>Location:<Text style={styles.contentLight}> Clinic Green Sathorn square Str.5</Text></Text>
                            <Text style={styles.contentSmall}>Date: <Text style={styles.contentLight}> 1 May 2020</Text></Text>
                            <Text style={styles.contentSmall}>Time: <Text style={styles.contentLight}> 12:00</Text></Text>
                        </View>
                        <View style={{ flex: 1, marginHorizontal: 3, marginRight: 3, marginTop: hp('2%'), flexDirection: 'row', justifyContent: 'center' }}>
                            <Image style={{ flex: 1, borderRadius: 10, flexDirection: 'row', height: hp('20%'), width: hp('30%') }} source={require('../image/branch.png')} />
                        </View>

                        <View style={{ flex: 1, flexDirection: 'row', marginTop: hp('2%') }}>
                            <View style={{ borderRadius: 5, borderColor: '#F9FBFF', backgroundColor: '#F9FBFF', flex: 1, borderWidth: 1, justifyContent: 'center' }}>
                                <Text style={styles.contentBack}>Sathorn Square</Text>
                                <Text>Adress:</Text>
                                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Curabitur vel nisi urna. Nullam</Text>
                                <Text>Tell: 0973050823</Text>
                            </View>
                        </View>
                         
                     
                        
                    </ScrollView>
                    
                    <View style={{ flex: 0.2, flexDirection: 'column',margin:5}}>
              <TouchableOpacity   style={{ borderRadius: 5, borderColor: '#5581FB', backgroundColor: '#5581FB', flex: 0.5, borderWidth: 1, justifyContent: 'center' }}>
                <Text style={{ textAlign: 'center', color: 'white' ,fontFamily: 'Kanit-Bold', fontSize: hp('2%'),}}>CONFIRN</Text>
              </TouchableOpacity>
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

    content: {
        color: '#274FC4',
        fontFamily: 'Kanit-Bold',
        fontSize: hp('2%'),
         
    },
    contentBack:{

        color: 'black',
        fontFamily: 'Kanit-Bold',
        fontSize: hp('2%'),
    },
    contentBlack: {
        color: 'black',
        fontFamily: 'Kanit-Bold',
        fontSize: hp('1.5%'),
    },
    contentLight: {
        color: 'black',
        fontFamily: 'Kanit-Regular',
    
        fontSize: hp('1.5%'),
    },
    contentSmall: {
        color: 'black',
        fontFamily: 'Kanit-Bold',
       opacity:0.5,
        fontSize: hp('1.5%'),
    },
    

});