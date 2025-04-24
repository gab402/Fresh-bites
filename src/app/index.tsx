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
                <Text style={styles.loginSubtitle}>Faça seu Login</Text>
                
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>E-mail</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="Digite seu email"
                        placeholderTextColor="#999"
                        keyboardType="email-address"
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
                
                <Link href="/home/page" asChild>
                    <TouchableOpacity style={styles.loginButton}>
                        <Text style={styles.buttonText}>Continuar</Text>
                    </TouchableOpacity>
                </Link>
                
                <Link href="/cadastro/page" asChild>
                    <TouchableOpacity>
                        <Text style={styles.createAccount}>Crie sua conta</Text>
                    </TouchableOpacity>
                </Link>
            </View>
        </View>
    )
}