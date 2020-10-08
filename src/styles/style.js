
import { StyleSheet,Platform } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export const Stylesglobal = StyleSheet.create({

    // Font
    h1: {
        fontFamily: 'Kanit',
        fontSize: 14,
        color: 'white',
        textAlign: 'center'
    },
    h2: {
        fontFamily: 'Kanit',
        fontSize: 14,
        color: 'white'
    },
    h3: {
        fontFamily: 'Kanit',
        fontSize: 14,
        color: '#8A8D93'
    },
    content_main:{
        color: 'white',
        fontFamily: 'Kanit',
        fontSize: 17,
    },
    h4: {
        marginLeft: 10, 
        color: 'white',
        fontFamily: 'Kanit',
    },
    h5: {
        fontFamily: 'Kanit',
        fontSize: 13,
        color: 'white',
    },
    title: {
        fontFamily: 'Kanit',
        fontSize: 16,
        color: 'white',
    },
    expire: {
        fontFamily: 'Kanit',
        fontSize: 14,
        color: 'white',
        opacity: .5
    },
    content: {
        color: 'white',
        fontFamily: 'Kanit',
        fontSize: 20,
        marginTop: Platform.select({
            android: 30,
            default: 10,
          }),
        flex: 0.5,
        flexDirection: 'row',
        textAlign: 'center',

    },
    changePassword: {
        color: '#365C99', 
        fontSize: 14, 
        fontFamily: 'Kanit',
        textAlign: 'right', 
        marginTop: 10, 
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
        textDecorationColor: "white",
    },
 
    register_content: {
        color: '#5581FB',
        fontSize: 40,
        fontFamily: 'Kanit',
        textAlign: 'center',
        marginTop:10
        
    },
    // End Font
    contentinput: {
        flex: 1,
        flexDirection: 'column',
        color: '#365C99',
        fontFamily: 'Kanit',
        fontSize: 15,
    },
    container_boxInput: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 40
    },
    container_boxDetail: {
        flex: 1,
        flexDirection: 'column',
        
      
    },
    input: {
        width: '100%',
        marginTop: 10,
        padding: 10,
        fontSize: 16,
        borderBottomWidth: 1,
        borderColor: '#4886E9',
        color: '#4886E9'
    },
    inputPassword: {
        flex: 1,
        flexDirection:'row',
        width: 1800,
        marginTop: 10,
        
        fontSize: 16,
        borderBottomWidth: 1,
        borderColor: '#CA9797',
        
        paddingTop: 10,
       
        paddingBottom: 10,
        paddingLeft: 0,
     
        borderBottomWidth: 1,
        borderColor: '#CA9797',
        color: 'white'
    },
    container_image_store: {
        marginHorizontal: 16,
        marginRight: 16,
        flex: 1,
        flexDirection: 'row',
        marginTop:5,
        padding:5,
        borderTopColor: '#510505',
        borderLeftColor: '#510505',
        borderRightColor: '#510505',
        borderBottomColor: '#510505',
        backgroundColor: '#510505',
        // backgroundColor: '#280802',
        borderWidth: 0.5,
        borderRadius: 3
       
    },

    // image_store: {
    //     height: 40,
    //     width: 40,
    //     borderRadius: 2,
    //     marginHorizontal: 6,
    // },

    content_detail_store: {
        flex: 1,
        flexDirection: 'column',
        marginHorizontal: 10,
        marginVertical: 10,
        fontFamily: 'Kanit',
        fontSize: 15,
    },
    texts_header_store: {
        color: 'white',
        fontSize: 15,
        fontFamily: 'Kanit',
    },
    texts_des_store: {
        color: 'white',
        fontSize: 15,
        justifyContent: 'flex-end',
        fontFamily: 'Kanit',
    },
    container_detail_store: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 10,
    },
    texts_des_store: {
        color: 'white',
        fontSize: 15,
        justifyContent: 'flex-end',
        fontFamily: 'Kanit',
    },
    container_content_store: {
        marginHorizontal: 10,
        marginVertical: 10,
        color: 'white',
        fontFamily: 'Kanit',
        fontSize: 18,
    },
    container_box_store: {
        overflow: 'hidden',
        marginBottom: 10,
        borderTopColor: '#F6E2E2',
        borderLeftColor: '#F6E2E2',
        borderRightColor: '#F6E2E2',
        borderBottomColor: '#F6E2E2',
        borderWidth: 0.5,
        borderRadius: 3,
        flex: 1,
        flexDirection: 'row',
        marginRight: 16,
        marginHorizontal: 16,

    },
    cardNo: {
        color: "white",
        fontSize: 14,
        fontWeight: "bold",
        fontFamily: 'Kanit',
      
    },
    content_scan: {
        fontFamily: 'Kanit',
        fontWeight: 'bold',
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        backgroundColor: '#680506',
        height: 30,

    },
    content_card: {
        fontWeight: 'bold',
        fontFamily: 'Kanit',
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        paddingTop: 10,
        backgroundColor: '#560505',
        height: 45,
    },
    //

    text_status: {
        flexDirection: 'row', flex: 1,
        textAlign: 'center',
        color: 'white',  
        width: 100,
        padding: 5,
        fontSize: 12,
        fontFamily: 'Kanit',
    },
    text_small: {
        color: "white",
        fontSize: 12,
        fontWeight: 'normal',
        fontFamily: 'Kanit',
    },

    boxpoint: {
        textAlignVertical: 'center',
        alignSelf: 'center',
        textAlign: 'center',
        color: 'white', 
        fontFamily: 'Kanit',
        fontFamily: 'Kanit',
    },

    container_carousel: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"

    },
    buttomFeedback: {
        flexDirection: 'row',
        flex: 0.6,
        height: 35,
        backgroundColor: '#781819',
        alignSelf: 'stretch',
        marginTop: 30,
        borderRadius: 5,
        justifyContent: 'center',
        marginRight: 5,
        marginLeft: 10
    },
    textFeedback: {
        fontSize: 14,
        color: 'white',
        alignSelf: 'center',
        fontFamily: 'Kanit',
        
    },
    textBranches: {
        fontSize: 14,
        color: '#781819',
        alignSelf: 'center',
        fontFamily: 'Kanit',
    },
    buttomBranches: {
        flexDirection: 'row',
        flex: 0.6,
        height: 35,
        alignSelf: 'stretch',
        marginTop: 30,
        borderRadius: 5,
        borderColor: '#781819',
        borderWidth: 0.5,
        justifyContent: 'center'
    },
   
    boxtext: {
        width: 100, height: 35,
        borderRadius: 5, marginTop: 30,
        backgroundColor: '#781819',
        alignItems: 'center'
    },
    logo: {
        justifyContent: 'space-between',
        flex: 1,
        flexDirection: 'row',
    },
    container_logo:
    {
        flex: 1,
        flexDirection: 'column',
        marginHorizontal: 16,
        marginRight: 16,
    },
    image_store: {
        height: 120,
        width: 120,
        alignItems:'center',
        alignSelf:'center',
        backgroundColor:'white'
    },
    container_box1_item: {
        flex: 5,
        borderRadius:4,
        flexDirection: 'column',
        backgroundColor: '#781819',
        height: 150,
        borderLeftColor:'#AB4E4E',
        borderLeftWidth: 6,
        marginBottom:5
    },
    circle: {
        width: 90,
        height: 90,
        // borderRadius: 100 / 1,
        // backgroundColor: '#781819'

    },
    circle_small: {
        width: 80,
        height: 80,
        borderRadius: 100 / 1,
        backgroundColor: '#781819',
        alignSelf: 'center',
        // marginTop: 5,
        // borderWidth: 0
    },
    template: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#781819',

    },
    name_text: {
        fontFamily: 'Kanit',
        fontSize: 12,
        color: 'white',
        
    },
    nameProfile: {
        fontFamily: 'Kanit',
        fontSize: 20,
        color: 'white',
        textAlign:'center'
        
    },
    number_text: {
        fontFamily: 'Sukhumvit',
        fontSize: 15,
        fontWeight:'normal',
        color: 'white',
        textAlign:'center'

    },
    // input_Profile: {
      
    //     width: '100%',
    //     fontSize: 10,
    //     borderBottomWidth: 1,
    //     borderColor: '#CA9797',
    //     color: 'white',
    //     fontFamily: 'Kanit',
    // },
     
    editProfile: {
        fontFamily: 'Kanit',
        fontSize: 15,
        color: '#781819',
        marginLeft: 10
    },
     
    // content: {
    //     flex: 0.5,
    //     flexDirection: 'row',
    //     textAlign: 'center',
    //     fontFamily: 'Kanit',
    //     fontSize: 20,
    //     color: 'white',
    // },
 
    circle_profile: {
        width: 90,
        height: 90,
        borderRadius: 100 / 1,
        backgroundColor: '#781819'

    },
    circle_profile_small: {
        width: 80,
        height: 80,
        borderRadius: 100 / 1,
        backgroundColor: '#781819',
        alignSelf: 'center',
        marginTop: 20,
        borderWidth: 0
    },
    sizeImage:{
        width: 120, 
        height: 120,
    },
    container_comming_item: {
        flex: 5, flexDirection: 'column', padding: 4
    },
    buttom_back: {
        flex: 0.2,
        height:hp('10%'),
        flexDirection: 'row',
        marginHorizontal: 16,
        marginRight: 16,
        justifyContent: 'flex-end',
    },
    backicon:{
        justifyContent:'center',
        flex:1,
        height: hp('8%'),
        alignItems:'center',
        borderColor: '#365C99',
        borderWidth:1,
        borderRadius: 5,
    },
    buttom_save: {
        flex: 1,
        height:hp('10%'),
        flexDirection: 'row',
    
        justifyContent: 'flex-end',
    },
    loginButton: {
        flexDirection: 'row',
        flex: 1,
        height: hp('8%'),
        margin: 2,
        borderColor: '#365C99',
        borderWidth:1,
        alignSelf: 'stretch',
        borderRadius: 15,
        justifyContent: 'center',
    },
    loginButtonText: {
        flexDirection: 'column',
        flex: 1, 
        alignSelf: 'center',
        textAlign: 'center',
        marginHorizontal: 15,
        fontSize: hp('3%'),
        color: '#365C99',
         
         fontFamily: 'Kanit',
    },
    registerButtom: {
        flexDirection: 'row',
        flex: 1,
        height: hp('8%'),
        margin: 2,
        //borderColor: '#365C99',
        //borderWidth:1,
        backgroundColor:'#5581FB',
        alignSelf: 'stretch',
        borderRadius: 15,
        justifyContent: 'center',
    },
    registerButtonText: {
        flexDirection: 'column',
        flex: 1, 
        alignSelf: 'center',
        textAlign: 'center',
        marginHorizontal: 15,
        fontSize: hp('3%'),
        color: 'white',
         
         fontFamily: 'Kanit',
    },

    point_text:{
        textAlign:'right', 
        marginRight:5,
        fontSize: 12,
        color: 'white',
        fontFamily: 'Kanit',
            
    },
    boxLeft: {
        fontFamily: 'Kanit',
        fontSize: 11,
        color: 'white',
        marginLeft:5,
    },
    textBranch:{
        fontFamily: 'Kanit',
        fontSize: 16,
        color: 'white',
        marginLeft:5,
    },
    textToday:{
        color:'#781819', 
        fontFamily: 'Kanit',
        fontSize: 20,
    }
    //ActivityPage
     
})




export default Stylesglobal;