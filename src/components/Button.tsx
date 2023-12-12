import {FC, useState} from "react";
import {Alert, ButtonProps, Pressable, Switch, Text} from "react-native";
import {styles} from "../styles/styles";

export const Button: FC<ButtonProps> = ({title, onPress}) => {
    const [on, setOn] = useState<boolean>(false)
    return (
        <Pressable  onLongPress={() => Alert.alert('longgg!')} style={styles.button} onPress={onPress}>
            <Text  style={[styles.text, {backgroundColor: on ? 'red': 'transparent'}]}>{title}</Text>
            <Switch onChange={() => setOn(on => !on)} value={on} />
        </Pressable>
    );
}

