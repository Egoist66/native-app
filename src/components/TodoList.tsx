import {FC} from "react";
import {ActivityIndicator, Text, View} from "react-native";
import {Tasks} from "./Tasks";
import {TodoRemoveAction} from "../redux/actions/actions";
import {useAppDispatch, useAppSelector} from "../redux/store/store";

export const TodoList: FC = () => {

    const dispatch = useAppDispatch()
    const {tasks} = useAppSelector((state) => state.TodosReducer)
    const deleteTask = (id: string) => {

        dispatch(TodoRemoveAction(id, ''))

    }

    const NoDataCheck = () => {
        if(!tasks.length){
            return (
                <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
                    <Text>
                        Данных нет
                    </Text>
                    <ActivityIndicator  />

                </View>
            )
        }

    }

    return (
        <View>
            {NoDataCheck() || tasks.map(task => (
                    <Tasks key={task.id} onClickHandler={deleteTask} {...task} />
                ))}
        </View>
    )
}