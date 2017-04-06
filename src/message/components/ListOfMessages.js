import React, {PropTypes} from 'react';
import {ListView, StyleSheet} from 'react-native';
import Message from './Message';

const ListOfMessages = ({listOfMessages}) => {
    const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
    });
    let dataSource = ds.cloneWithRows(listOfMessages);

    return (
        <ListView
            dataSource={dataSource}
            renderRow={(rowData) => <Message message={rowData}/>}/>
    );
};

ListOfMessages.propTypes = {
    listOfMessages: PropTypes.array
};

export default ListOfMessages;