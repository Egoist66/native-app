import {FC, ReactNode} from "react";
import {ScrollView} from "react-native";

type FlatListPropsType = {
    renderItem: (item: {key: string}) => ReactNode
    data: Array<{key: string}>
}
export const _FlatList: FC<FlatListPropsType> = ({renderItem, data}) => {

    return (
        <ScrollView>
            {data.length ? data.map(item => (
                renderItem(item)
            )): 'No data'}
        </ScrollView>
    )
}

