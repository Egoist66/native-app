import uuid from "react-uuid";

export type TodoTasksReducerState = {
    name: string
    id: string
}

export type TodoReducerState = {
    tasks: Array<TodoTasksReducerState>
}

export type TodoTasksReducerActionType = {
    type: 'TodoAddActionType/addTask' | 'TodoRemoveActionType/removeTask'
    payload: { name: string, id: string }


}

export const initialState: TodoReducerState = {
    tasks: [
        {name: 'Buy milk', id: uuid()},
        {name: 'Learn React', id: uuid()},
        {name: 'Take a rest', id: uuid()}
    ]
}


export const TodosReducer = (state = initialState, action: TodoTasksReducerActionType) => {
    switch (action.type) {
        case 'TodoAddActionType/addTask':
            return {
                tasks: [...state.tasks, action.payload]
            }
        case 'TodoRemoveActionType/removeTask':
            const filteredTasks = state.tasks.filter(t => t.id !== action.payload.id)
            return {
                tasks: filteredTasks
            }
        default:
            return state
    }
}