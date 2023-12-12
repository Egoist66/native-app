import {FC} from "react";
import {Text, View} from "react-native";
import {styles} from "../styles/styles";


type TasksProps = {
    onClickHandler: (id: string) => void,
    id: string,
    name: string
}
export const Tasks: FC<TasksProps> = ({onClickHandler, id, name}) => {

    const removeTask = () => {
        onClickHandler(id)
    }

    return (


        <View style={{flexDirection: 'row', gap: 20, alignItems: 'center'}}>

            <Text style={styles.tasks} >
                {name}
            </Text>

            <Text onPress={removeTask} style={{color: 'red', fontSize: 16}}>&times;</Text>


        </View>


    )
}