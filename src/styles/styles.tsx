import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        padding: 100,
        alignItems: 'center',
        backgroundColor: '#333',
        justifyContent: 'center',

    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        maxWidth: 250,
        display: 'flex',
        marginBottom: 20,
        marginTop: 20,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'darkslateblue',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },

    input: {
        width: 250,
        marginTop: 20,
        marginBottom: 20,
        padding: 10,
        color: 'white',
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderBottomColor: 'silver'
    },

    tasks: {

        backgroundColor: 'ghostwhite',
        marginBottom: 10,
        color: 'black',
        padding: 10,
        fontSize: 18,
        width: 300

    },


});
