import {TodoTasksReducerActionType} from "../reducers/TodosReducer";

export const TodoAddFormAction = (name: string, id: string) : TodoTasksReducerActionType => {
    return {type: 'TodoAddActionType/addTask', payload: {name, id}}
}
export const TodoRemoveAction = (id: string, name: string) : TodoTasksReducerActionType => {
    return {type: 'TodoRemoveActionType/removeTask', payload: {id, name}}
}

