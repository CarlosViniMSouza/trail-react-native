import React, { useState } from 'react';

import {
    Text, View,
    TextInput,
    TouchableOpacity,
    FlatList,
    Alert
} from "react-native";

import { styles } from "./styles";

import { Participant } from '../../components/Participant';

export default function Home() {
    const [participants, setParticipants] = useState<string[]>([]);

    const [participantName, setParticipantName] = useState('');

    function handleParticipantAdd() {
        if (participants.includes(participantName)) {
            return Alert.alert('Participant Already Added!');
        }

        setParticipants(prevState => [...prevState, participantName]);

        setParticipantName('');
    }

    function handleParticipantRemove(name: string) {
        Alert.alert(
            'Remove',
            `Remove the participant ${name} ?`,
            [
                {
                    text: 'Yes',
                    onPress: () => Alert.alert('Removed !')
                },
                {
                    text: 'No',
                    style: 'cancel'
                }
            ]
        );
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
                    onChangeText={setParticipantName}
                    value={participantName}
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={
                        () => handleParticipantAdd()
                    }>
                    <Text
                        style={styles.buttonText}>
                        (+)
                    </Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={participants}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Participant
                        key={item}
                        name={item}
                        onRemove={
                            () => handleParticipantRemove(item)
                        }
                    />
                )}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyComponent}>
                        No participants in the list!
                    </Text>
                )}
            />
        </View>
    );
}