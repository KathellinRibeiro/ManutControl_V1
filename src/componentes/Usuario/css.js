import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    darkbg:{
        backgroundColor:"#333"
    },
    login__logomarca:{
        marginBottom: 10
    },
    login__msg:(text='none')=>({
        fontWeight:"bold",
        fontSize: 22,
        color:"red",
        marginBottom: 15,
        display: text
    }),
    login__form:{
        width: "80%"
    },
    login__input:{
        backgroundColor: "#fff",
        fontSize: 19,
        padding: 7,
        marginBottom: 15
    },
    login__button:{
        padding: 12,
        backgroundColor: "#F58634",
        alignSelf:"center",
        borderRadius:5
    },
    login__buttonText:{
        fontWeight:"bold",
        fontSize: 22,
        color:"#333"
    }
});