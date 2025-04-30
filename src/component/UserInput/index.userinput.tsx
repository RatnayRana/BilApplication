import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const UserInput: React.FC = () => {
    const [input, setInput] = useState<string>('');

    const handleInputChange = (text: string) => {
        setInput(text);
    };

    const handleSubmit = () => {
        // Handle the submit action
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={input}
                onChangeText={handleInputChange}
            />
            <Button title="Submit" onPress={handleSubmit} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    label: {
        fontSize: 18,
        marginBottom: 8,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
});

export default UserInput;
