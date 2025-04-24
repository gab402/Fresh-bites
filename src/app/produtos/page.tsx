import React from "react";
import { View, Text, Image, TouchableOpacity, Button } from "react-native";
import { styles } from "./style";
 
export default function ProductScreen() {
    return (
       
        <View style={styles.descricao}>
         
            <Image
             source={require("@/assets/images/salada-tropical.jpg")}
            style={styles.imagem}
            />
           
        <View style={styles.divpai}>
           
            <Text style={styles.nomedoproduto}>Salada tropical</Text>
 
            <Text style={styles.precoproduto}>R$ 45,00</Text>

            <Text style={styles.ingredientes}>
            A salada tropical é uma combinação 
            de folhas, manga, tomate e castanha.
            </Text>

            <Text style={styles.detalhe}>ingredientes</Text>
                <Text style={styles.ingredientes}>  Alface crespa, alfa lisa, rúcula, agrião, endívia, azeitonas verdes, repolho roxo, cenoura, pepino, queijo, parmesão, tomate seco, ovos de codorna, palmito, peito de peru e manga.</Text>
                
 
            <View style={styles.labels}>
                <Text style={styles.label}>Adicionar molho?</Text>
            <TouchableOpacity style={styles.botaodemolho} onPress={() => alert('Item adicionado!')}>
                <Text>Sim</Text> 
            </TouchableOpacity>
            </View>

            <View style={styles.labels}>
            <Text style={styles.label}>Adicionar talher?</Text>
            <TouchableOpacity style={styles.botaodetalheres} onPress={() => alert('Item adicionado!')}>
                <Text>Sim</Text> 
            </TouchableOpacity>
            </View>
            
            <TouchableOpacity style={styles.botaodecomprar} onPress={() => alert('Item adicionado!')}>
                <Text>ADICIONAR A SACOLA</Text> 
            </TouchableOpacity>

            
        
           
        </View>
        </View>
       
    );
}