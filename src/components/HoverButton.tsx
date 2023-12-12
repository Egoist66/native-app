import React, {FC, ReactNode, useState} from 'react';
import { TouchableHighlight, View, StyleSheet } from 'react-native';

type HoverButtonProps = {
    children: ReactNode
}
export const HoverButton: FC<HoverButtonProps> = ({children}) => {
    const [isPressed, setIsPressed] = useState<boolean>(false);

    const handlePressIn = () => {
        setIsPressed(true);
    };

    const handlePressOut = () => {
        setIsPressed(false);
    };

    return (
        <TouchableHighlight
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            underlayColor="transparent"
        >
            <View style={[styles.container, isPressed && styles.pressed]}>
                {children}
            </View>
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
    },
    pressed: {
        backgroundColor: 'red',
    },
});

