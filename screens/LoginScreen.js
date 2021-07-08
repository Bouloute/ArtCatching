import React, { useState, useEffect } from 'react';
import { Alert, Button, Text, TextInput, View } from 'react-native'
import SQLite from 'react-native-sqlite-storage'

const db = SQLite.openDatabase(
    {
        name: 'MainDB',
        location: 'default',
    },
    () => {},
    error => {console.log(error)}
)

export default function LoginScreen({ navigation }) {
    
    const [name, setName] = useState('')
    const [age, setAge] = useState('')

    useEffect(() => {
        createTable();
        getData();
    }, []);

    const createTable = () => {
        db.transaction((tx) => {
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS "
                + "Users "
                + "(ID INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, Age INTEGER);"
            )
        })
    }
    
    const getData = () => {
        try {
            db.transaction((tx) => {
                tx.executeSql(
                    "SELECT Name, Age FROM Users",
                    [],
                    (tx, results) => {
                        var len = results.rows.length;
                        if (len > 0) {
                            navigation.navigate('Home');
                        }
                    }
                )
            })
        } catch (error) {
            Alert.alert('Warning!', error)
        }
    }

    const setData = async () => {

        if (name.length == 0 || age.length == 0) {
            Alert.alert('Warning!', 'Please write your data.')
        } else {

           try {
               /* await db.transaction(async (tx) => {
                    await tx.executeSql(
                        "INSERT INTO Users (Name, Age) VALUES (?,?)",
                        [name, age]
                    );
                })*/
               // navigation.navigate('Home');
                Alert.alert('Warning!', 'Got this far')
                navigation.navigate('Home');
            } catch (error) {
                Alert.alert('Warning!', error.message)

                console.log(error);
            }
        }
        
    }

    return (
        <View>
            <Text> Login </Text>
            <TextInput
                placeholder='Enter your name'
                onChangeText={(value) => setName(value)}
            />
            <TextInput
                placeholder='Enter your age'
                onChangeText={(value) => setAge(value)}
            />
            <Button
                title='Login'
                onPress={setData}
            />
            <Text>{name}</Text>
            <Text>{age}</Text>
        </View>
    )
}
