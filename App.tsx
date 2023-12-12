import {StatusBar} from 'expo-status-bar';
import {
    ActivityIndicator, Alert, Animated,
    Image,
    Text,
    TouchableOpacity,
    ScrollView,
    View, FlatList,
} from 'react-native';

import {FC, useState} from "react";
import {styles} from "./src/styles/styles";
import {AppReduxProvider} from "./src/redux/store/store";
import {TodoList} from "./src/components/TodoList";
import {TodoForm} from "./src/components/TodoForm";
import {HoverButton} from "./src/components/HoverButton";
import {_FlatList} from "./src/components/FlatList";


const App: FC = () => {

    const [data, setData] = useState<string>('')

    return (
        <AppReduxProvider>
            <StatusBar style="light"/>

            <ScrollView  contentContainerStyle={{flexGrow: 1}}>

                <View style={styles.container}>
                    <Image width={300} height={300} source={{
                        uri: 'https://i.scdn.co/image/d6df710d0a8244dc02fae361d89b7d2ffb4dfba3'
                    }}/>


                    <Text style={{marginTop: 40, color: 'white'}}>Todolist</Text>

                    <TodoForm/>
                    <TodoList/>

                    <View style={{
                        flexDirection: 'row',
                        direction: 'ltr',
                        alignItems: 'stretch',
                        justifyContent: 'flex-start',
                        flexWrap: 'wrap',
                        gap: 20
                    }}>
                        <TouchableOpacity style={{backgroundColor: 'skyblue', padding: 20}}
                                          onPress={() => Alert.alert('I will')}><Text>Fuck you</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{backgroundColor: 'skyblue', padding: 20}} onPress={() => {
                            fetch('https://fortegrp.com').then(data => data.text()).then(data => {
                                setData(data)
                            })
                        }}><Text>Fetch data</Text>

                        </TouchableOpacity>

                        <TouchableOpacity style={{backgroundColor: 'skyblue', padding: 20}} onPress={() => setData('')}>
                            <Text>Clear data</Text>
                        </TouchableOpacity>
                            <Text style={{color: '#fff'}}>{data || 'No data'}</Text>


                    </View>

                    <_FlatList
                        data={[{key: 'Farid'}, {key: 'Vova'}, {key: 'Nikita'}]}
                        renderItem={(item) => <Text key={item.key}>{item.key}</Text>}

                    />


                </View>

            </ScrollView>
        </AppReduxProvider>
    );
}

export default App
