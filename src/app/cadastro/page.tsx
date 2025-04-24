import { Link } from "expo-router";
import { Text, TextInput, TouchableOpacity, View, Image } from "react-native";
import { styles } from "./style";

export default function LoginScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image 
                    source={require("@/assets/images/logoLogin.png")} 
                    style={styles.logo}
                    resizeMode="contain"
                />
            </View>
            
            {/* Área de Login */}
            <View style={styles.login}>
                <Text style={styles.loginSubtitle}>Faça o cadastro para continuar</Text>
                
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>E-mail</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="user@mail.com"
                        placeholderTextColor="#999"
                        keyboardType="email-address"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Cpf</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="********"
                        placeholderTextColor="#999"
                        secureTextEntry
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Senha</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="********"
                        placeholderTextColor="#999"
                        secureTextEntry
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Confirmar senha</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="********"
                        placeholderTextColor="#999"
                        secureTextEntry
                    />
                </View>
                <Link href="/home/page" asChild>
                    <TouchableOpacity style={styles.loginButton}>
                        <Text style={styles.buttonText}>ENTER</Text>
                    </TouchableOpacity>
                </Link>
                
          
            </View>
        </View>
    )
}