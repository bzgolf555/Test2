import React, { component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default Get = props => {
    return (
        <View>
            <Text style={styles.intro}> METHOD : GET </Text>
            <View style={styles.fetchButton}>
                <Text style={style.intro}>Try to get : </Text>
                <Button 
                    onPress={props.fetchMethodGet}
                    title={props.isLoading ? 'Loading' : 'Get Data'}
                    color='red'
                    accessibilityLabel="Fired XMLHttpRequest Method Get"
                    dissabled={props.isLoading}
                />
            </View>
                

        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 2.8,
    },
});
