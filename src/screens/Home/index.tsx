import React from 'react';

import {
    Text, View,
    TextInput,
    TouchableOpacity
} from "react-native";

import { styles } from "./styles";

import { Participant } from '../../components/Participant';

export default function Home() {
    function handleParticipantAdd() {
        console.log("Participant added");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>
                Event React Native
            </Text>

            <Text style={styles.eventDate}>
                Sunday, 20 November, 2022
            </Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Participant Name"
                    placeholderTextColor="#6B6B6B"
                    keyboardType="email-address"
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={handleParticipantAdd}>
                    <Text
                        style={styles.buttonText}>
                        (+)
                    </Text>
                </TouchableOpacity>
            </View>

            <Participant />
            <Participant />
        </View>
    );
}