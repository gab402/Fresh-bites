import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f6fbdf',
        paddingHorizontal: 30,
        justifyContent: 'center',
    },
    header: {
        alignItems: 'center',
        marginBottom: 20,
    },
    logo: {
        width: 250,
        height: 200,
    },

    login: {
        borderColor: "#efebe2",
        borderWidth: 2,
        backgroundColor: '#2a4c09',
        borderRadius: 15,
        padding: 15,
        elevation: 1
    },
  
    loginSubtitle: {
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 25,
        color: '#fff',
    },

    inputContainer: {
        marginBottom: 20,
    },

    label: {
        fontSize: 16,
        marginBottom: 8,
        color: '#fff',
        fontWeight: '500',
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 16,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
    },
    loginButton: {
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
        width: 200,
        alignSelf: 'center',
    },
    buttonText: {
        color: '#000000',
        fontSize: 18,
        fontWeight: 'bold',
    },
    createAccount: {
        color: '#fff',
        textAlign: 'center',
        marginTop: 1,
        fontSize: 14,
        fontWeight: '500',

    }
});
