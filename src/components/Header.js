import React from 'react';
import {
    Text,
    View
} from 'react-native';

class Header extends React.Component {
    render() {
        return (
            <View style={styles.view}>
                <Text style={styles.text}>{this.props.title}</Text>
            </View>
        );
    }
}

const styles = {
    view: {
        backgroundColor: '#FF5722',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        // ios
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        // android
        elevation: 4
    },
    text: {
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: 'bold'
    }
}

export default Header;