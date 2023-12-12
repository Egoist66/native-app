import {FC, useState} from "react";
import {Alert, NativeSyntheticEvent, Text, TextInput, TextInputChangeEventData} from "react-native";
import {styles} from "../styles/styles";
import {Button} from "./Button";
import {useAppDispatch} from "../redux/store/store";
import {TodoAddFormAction} from "../redux/actions/actions";
import uuid from "react-uuid";

export const TodoForm: FC = () => {

    const [text, setText] = useState<string>('')
    const dispatch = useAppDispatch()

    const changeText = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setText(event.nativeEvent.text)
    }

    const createTask = () => {

        if(text.trim() === ''){
            Alert.alert('Пустые значения запрещены!')
            return
        }

        dispatch(TodoAddFormAction(text, uuid()))

        setText('')
    }

    return (
        <>

            <TextInput
                value={text}
                onChangeText={(text) => setText(text)}
                placeholder={'Enter a task'}
                style={styles.input}
            />
            <Button onPress={createTask} title={'Add task'} />
            <Text>{text}</Text>
        </>
    )
}