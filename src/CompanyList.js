/**
 * Created by zryu on 10/21/17.
 */
import React, {Component} from 'react';
import {View, Text, ListView, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import { List, ListItem } from 'react-native-elements';
import CompanyInfoRow from './CompanyInfoRow';
import companyData from './Data';

const styles = StyleSheet.create({
   container: {
       flex: 1,
       marginTop: 20
   },

    separator: {
        flex: 1,
        height: StyleSheet.hairlineWidth,
        backgroundColor: 'red',
    }
});


export default class CompanyList extends React.Component{
    constructor(props){
        super(props);

        const ds = new ListView.DataSource({rowHasChanged:(r1, r2)=> r1 !== r2});
        this.state = {
            datasource: ds.cloneWithRows(
                companyData
            ),
        };
    }
    render(){
        return(
            <ListView
                style={styles.container}
                dataSource={this.state.datasource}
                renderRow={(data) => <CompanyInfoRow {...data}/>}
                renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
            />
        );
    }
}