import React, { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';

export default function SelectableButton({ label }) {
    const [isSelected, setIsSelected] = useState(false);

    const handleSelect = () => {
        setIsSelected(!isSelected);
    };

    return (
        <TouchableOpacity
            style={isSelected ? styles.ButtonSelected : styles.Button}
            onPress={handleSelect}
        >
            <Text style={styles.Text}>{label}</Text>
        </TouchableOpacity>
    );
}

const styles = {
    Button: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: 120,
        marginRight: 8,
        padding: 16,
        borderRadius: 15,
        boxSizing: "border-box",
        backgroundColor: "rgba(255,255,255,1)",
      },
      ButtonSelected: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: 120,
        marginRight: 8,
        padding: 16,
        borderRadius: 15,
        boxSizing: "border-box",
        backgroundColor: "rgba(80,208,192,1)",
      },  
      Classes: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        color: "rgba(115,123,125,1)",
        fontSize: "16",
        lineHeight: "16",
        fontFamily: "Poppins, sans-serif",
        fontWeight: "300",
        textAlign: "center",
      }
}