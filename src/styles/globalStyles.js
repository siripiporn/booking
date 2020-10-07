
import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const globalStyles = StyleSheet.create({
    
    h1:{
        color:'#332323',
       fontFamily:'Rubik-bold',
        fontSize: 20,
        textAlign:'center'
    },
    h2:{
        alignSelf: 'center', 
        alignContent: 'center', 
        marginTop: hp('6%'), 
        fontFamily:'Kanit-Regular',
        fontSize:hp('2%')
    },
  
    h3:{
        color:'#332323',
        fontFamily:'Kanit-Regular',
        fontSize:14
    },
    h4:{
        color:'white',
        fontFamily:'Kanit-Regular',
        fontSize:16
    },
    loginButtonText: {
        fontSize: hp('2%'),
        color: '#CDA253',
        alignSelf: 'center',
        fontFamily: 'Sukhumvit-Bold',
    },


})