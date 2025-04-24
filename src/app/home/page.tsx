import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style"
import { Link } from "expo-router";


export default function Index(){
    const MENU = [
        {
            id: 1,
            name: "Salada tropical",
            description: "A salada tropical é uma combinação de folhas, manga, tomate e castanha.",
            price: 30.90,
            image: require("@/assets/images/salada-tropical.jpg")
        },
        {
            id: 2,
            name: "Salada Cheese",
            description: "Quem gosta de inovar quando o assunto é salada vai se apaixonar por essa saladinha cheese!",
            price: 40.90,
            image: require("@/assets/images/salada-cheese.jpg")
        },
        {
            id: 3,
            name: "Pimentão recheado",
            description: "Uma experiencia unica e incrivel, prove e aproveite ",
            price: 50.90,
            image: require("@/assets/images/PIMENTÃO.png")
        }, 
         {
            id: 3,
            name: "Salada Caesar",
            description: "Uma das saladas mais clássicas da nossa listagem, a salada Caesar conta com uma mistura de folhas, frango, queijo parmesão e croutons. ",
            price: 70.90,
            image: require("@/assets/images/salada-caesar.jpg")
        }
    ]

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.headerImage} source={require("@/assets/images/verduras-frase.png")}/>
                <Text style={styles.restaurentName}>Fresh bites</Text>
                <Text style={styles.subtitle}>O melhor mundo fit</Text>
            </View>
           
            <View style={styles.tabs}>
                {["Mais pedidos ", " Saladas", "Sobremesa fit", "Bebidas"].map((item) => (
                    <TouchableOpacity>
                        <Text style={styles.tabsName}>{item}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <ScrollView style={styles.menuList}>
            {
                MENU.map((item) => ( 
                    <Link  href={"/produtos/page"} asChild>
                    <TouchableOpacity style={styles.menuItem}>
                         <Image style= {styles.imgItem} source={item.image}/>
                        <View>
                            <Text style={styles.itemName}>{item.name}</Text>
                            <Text style={styles.itemDescription}>{item.description}</Text>
                            <Text style={styles.itemPrice}>{item.price.toFixed(2)}</Text>
                        </View>
                       
                    </TouchableOpacity>
                    </Link>
                ))
            }
            </ScrollView>
        </View>

      
    )
}