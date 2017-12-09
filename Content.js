import React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import Put from './Put'


export default Content =(props) => {
        return (
            <View style={styles.content}>
               
                        <Put
                            object={props.object}
                            changeLoading={props.changeLoading}
                            fetchMethodGet={props.fetchMethodGet}
                            fetchMethodPut={props.fetchMethodPut}
                            isLoading={props.isLoading}
                        />

            </View>
        
    )

}

const styles = StyleSheet.create({
    content: {
        flex: 2.8,
    },
});
