import {createStore} from "redux";
import {RootReducer} from "../reducers/root/RootReducer";
import {FC, ReactNode} from "react";
import {Provider, TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

const store = createStore(RootReducer)

type AppReduxProvider = {
    children: ReactNode
}
export const AppReduxProvider: FC<AppReduxProvider> = ({children}) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch


export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;