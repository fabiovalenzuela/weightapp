import {StyleSheet} from "react-native";


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#05a6f0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo:{
        fontWeight:"bold",
        fontSize:40,
        color:"#ffffff",
        marginBottom:40
    },
    inputView:{
        width:"80%",
        backgroundColor:"#ffffff",
        borderRadius:25,
        height:50,
        marginBottom:5,
        justifyContent:"center",
        padding:20
    },
    inputText:{
        height:50,
        color:"black"
    },
    forgot:{
        color:"white",
        fontSize:11
    },
    loginBtn:{
        width:"100%",
        backgroundColor:"#af9cff",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:20,
        marginBottom:30
    },
    loginText:{
        color:"white"
    },
    errMsg:{
        color: 'red'
    },
    errMsgBody:{
        paddingBottom:15,
    },
    switchToLoginOrRegister:{
        alignItems: "center"
    },
    forgotBody:{
        alignItems:"center",
        marginTop:25
    }
});


