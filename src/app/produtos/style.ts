import { StyleSheet } from "react-native";
import { red } from "react-native-reanimated/lib/typescript/Colors";
 
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        padding: 20,
        alignItems: "center",
    },
 
   
    imagem: {
        width: 210,
        height: 200,
        alignSelf: "center",
        borderRadius: 200,
        padding: 70,
        marginTop: 15,
        overflow: 'hidden'
    },
    nomedoproduto: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
        marginBottom: 10,
        textAlign: "center",
    },
    descricao: {
        fontSize: 16,
        color: "black",
        textAlign: "center",
    
        backgroundColor: "#f6fbdf",
        flex: 1
    },
    precoproduto: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
        marginBottom: 20,
    },
    botaodecomprar: {
        backgroundColor: "green",
        width: 160,
        height: 40,
        borderRadius: 10,
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 170
    },
    botaoComprar: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginRight: 170

    },
    botaodemolho: {
        backgroundColor: "green",
        width: 50,
        height: 40,
        borderRadius: 10,
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 300,
        marginTop: 1

        
        

    },
    botaodetalheres: {
        backgroundColor: "green",
        width: 50,
        height: 40,
        borderRadius: 10,
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 300

    },
    label:{
fontWeight: "bold",
    },
    labels:{
        fontSize: 16,
        color: '#afa999',
        fontWeight: '500',
        marginLeft: 15
    }, 
 
    divpai: {
        alignItems: "center",
        padding: 50,
      
    },
    detalhe: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
        marginBottom: 10,
        textAlign: "center",
    },
    ingredientes: {
        fontSize: 16,
        color: "black",
        marginBottom: 5,
        textAlign: "left",
        alignSelf: "flex-start",
            paddingLeft: 10
        }
    });