import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    img : {
        width : wp('100%'), 
        height : hp('45%'),  
        marginTop : hp('5%'),
    },
    logo : {
        width : wp('45%'), 
        height : hp('15%'), 
        position : 'absolute', 
        marginTop : hp('37%')
    },
    text1 : {
        fontWeight : 'bold',
        fontSize : hp('5%'), 
        marginLeft : wp('6%'), 
        marginTop : hp('2.5%')
    },
    text2 : {
        fontSize : 14, 
        marginTop : wp('6%')
    },
    button1 : {
        borderRadius : 8,
        fontSize :15,
        marginTop : hp('5%'),
        paddingHorizontal :50,
        paddingVertical : 15,
        justifyContent : 'space-between',
        color : '#ffffff',
        marginRight : wp('7.5%'),
        backgroundColor : '#3380ff',
    
    },
    button2 : {
        borderRadius : 8,
        fontSize :15,
        marginTop : hp('5%'),
        paddingHorizontal :50,
        paddingVertical : 15,
        justifyContent : 'space-between',
        color : '#3380ff',
        backgroundColor : '#ffffff',
        borderWidth : 1,
        borderColor : '#3380ff',
    },
});