import React from 'react';

import {
    Text, View,
    TextInput,
    TouchableOpacity,
    ScrollView
} from "react-native";

import { styles } from "./styles";

import { Participant } from '../../components/Participant';

export default function Home() {
    const participants = ['Diego', 'Rodrigo', 'Mayk', 'Jakelliny', 'Biro', 'Carlos', 'Saile', 'Rafael', 'David', 'Joe'];

    function handleParticipantAdd(name: string) {
        console.log(`Participant ${name} added`);
    }

    function handleParticipantRemove(name: string) {
        console.log(`Participant ${name} deleted`);
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
                    onPress={
                        () => handleParticipantAdd("Participant")
                    }>
                    <Text
                        style={styles.buttonText}>
                        (+)
                    </Text>
                </TouchableOpacity>
            </View>

            <ScrollView>
                {
                    participants.map(participant => (
                        <Participant
                            key={participant}
                            name={participant}
                            onRemove={
                                () => handleParticipantRemove("Carlos")
                            }
                        />
                    ))
                }
            </ScrollView>
        </View>
    );
}