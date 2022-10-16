import { Text, View, TextInput } from "react-native"
import { styles } from "./styles"

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>
                React Native Application
            </Text>

            <Text style={styles.eventDate}>
                Friday, 4 Nov. 2022
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Participant Name"
                placeholderTextColor="#6B6B6B"
                keyboardType="email-address"
            />
        </View>
    )
}