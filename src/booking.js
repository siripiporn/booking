import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, Button, ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendario';
import ConfirnBooking from '../src/confirnBooking'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;



export default class Booking extends Component {

  OnConfirnBooking(){
this.props.navigation.navigate('ConfirnBooking')
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, flexDirection: 'column', marginHorizontal: 16, marginRight: 16, }}>
          <ScrollView style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ flex: 2, flexDirection: 'column' }}>
              <Calendar
                onChange={(range) => console.log(range)}
                minDate={new Date(2018, 3, 20)}
                startDate={new Date(2018, 3, 30)}
                endDate={new Date(2018, 4, 5)}
                theme={{
                  activeDayColor: {},
                  monthTitleTextStyle: {
                    color: '#6d95da',
                    fontWeight: '300',
                    fontSize: 16,
                  },
                  emptyMonthContainerStyle: {},
                  emptyMonthTextStyle: {
                    fontWeight: '200',
                  },
                  weekColumnsContainerStyle: {},
                  weekColumnStyle: {
                    paddingVertical: 10,
                  },
                  weekColumnTextStyle: {
                    color: '#b6c1cd',
                    fontSize: 13,
                  },
                  nonTouchableDayContainerStyle: {},
                  nonTouchableDayTextStyle: {},
                  startDateContainerStyle: {},
                  endDateContainerStyle: {},
                  dayContainerStyle: {},
                  dayTextStyle: {
                    color: '#2d4150',
                    fontWeight: '200',
                    fontSize: 15,
                  },
                  dayOutOfRangeContainerStyle: {},
                  dayOutOfRangeTextStyle: {},
                  todayContainerStyle: {},
                  todayTextStyle: {
                    color: '#6d95da',
                  },
                  activeDayContainerStyle: {
                    backgroundColor: '#6d95da',
                  },
                  activeDayTextStyle: {
                    color: 'white',
                  },
                  nonTouchableLastMonthDayTextStyle: {},
                }}
              />
            </View>
            <View style={{ flex: 2, flexDirection: 'column' }}>
              <View style={{ borderRadius: 20, borderWidth: 1, borderColor: '#C4C4C4', height: hp('35%'), width: hp('42%'), }}>
                <View style={{ flex: 1, flexDirection: 'column', marginHorizontal: 16, marginRight: 16, marginTop: hp('2%') }}>
                  <Text style={styles.content}>DR.Jone</Text>
                  <Text style={styles.smallContent}>Fill the tooth</Text>
                </View>

                <View style={{ flex: 1, flexDirection: 'column', marginHorizontal: 16, marginRight: 16 }}>
                  <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={styles.boxTimeSelect}><Text style={{ color: 'white' }}>10:00</Text></View>
                    <View style={styles.boxTime}><Text style={styles.contentBox}>11:00</Text></View>
                    <View style={styles.boxTime}><Text style={styles.contentBox}>12:00</Text></View>
                    <View style={styles.boxTime}><Text style={styles.contentBox}>13:00</Text></View>
                  </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'column', marginHorizontal: 16, marginRight: 16 }}>
                  <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={styles.boxTime}><Text style={styles.contentBox}>14:00</Text></View>
                    <View style={styles.boxTime}><Text style={styles.contentBox}>15:00</Text></View>
                    <View style={styles.boxTime}><Text style={styles.contentBox}>16:00</Text></View>
                    <View style={styles.boxTime}><Text style={styles.contentBox}>17:00</Text></View>
                  </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'column', marginHorizontal: 16, marginRight: 16 }}>
                  <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={styles.boxTime}><Text style={styles.contentBox}>14:00</Text></View>
                    <View style={styles.boxTime}><Text style={styles.contentBox}>15:00</Text></View>
                    <View style={styles.boxTime}><Text style={styles.contentBox}>16:00</Text></View>
                    <View style={styles.boxTime}><Text style={styles.contentBox}>17:00</Text></View>
                  </View>
                </View>

              </View>
            </View>

            <View style={{ flex: 0.5, flexDirection: 'column' }}>
              <TouchableOpacity onPress={this.OnConfirnBooking.bind(this)} style={{ borderRadius: 5, borderColor: '#5581FB', backgroundColor: '#5581FB', flex: 0.7, borderWidth: 1, justifyContent: 'center' }}>
                <Text style={{ textAlign: 'center', color: 'white' ,fontFamily: 'Kanit-Bold',
    fontSize: hp('2%'),}}>NEXT</Text>
              </TouchableOpacity>
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
  content: {
    color: '#274FC4',
    fontFamily: 'Kanit-Bold',
    fontSize: hp('2%'),
  },
  smallContent: {
    color: 'black',
    fontFamily: 'Kanit-Regular',
    fontSize: hp('2%'),
  },
  boxTime: {
    width: wp('20%'), height: hp('5%'), borderRadius: 20, backgroundColor: '#F3F2F8', justifyContent: 'center', alignItems: 'center', marginRight: 3
  },
  boxTimeSelect: {
    width: wp('20%'), height: hp('5%'), borderRadius: 20, backgroundColor: '#5581FB', justifyContent: 'center', alignItems: 'center', marginRight: 3
  },
  contentBox: {
    color: 'black'
  }
});