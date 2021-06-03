import React from 'react';
import {View, TextInput, StyleSheet, SafeAreaView, Button, Alert, Text} from 'react-native';


class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: ''
        }

    }

    componentDidMount() {

    }

    render() {
        return(
            <SafeAreaView>
            <View>
                <View style={styles.title}>
                    <Text style={styles.titleText}>Your Mini Dictionary</Text>
                </View>
                <TextInput
                    style={styles.input}
                    onChangeText={(value)=>{
                        this.setState({searchText: value})
                    }}
                    value={this.state.searchText}
                    placeholder="Type your Text"
                />

                <View style={styles.button}>
                    <Button
                        title="Search"
                        onPress={() => Alert.alert('Simple Button pressed')}
                    />
                </View>
                <View style={styles.searchResultText}>
                    <Text>{this.state.searchText}</Text>
                </View>

            </View>
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
    },
    button: {
        height: 40,
        margin: 12,
    },
    searchResultText: {
        marginHorizontal:20
    },
    title: {
        alignItems: 'center'
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 30
    }
});

export default HomeScreen;
