import React from 'react';
import {Text, View, FlatList, Button} from 'react-native';

// Refresh indicator not showing when programmatically trigerred and changing the data value to empty
// In this case, refresh indicator will be shown if we slightly scroll up the Scrollview when refreshing prop is true
const App = () => {
  let [isRefreshing, setIsRefreshing] = React.useState(false);
  let [data, setData] = React.useState([]);

  return (
    <View style={{flex: 1, paddingVertical: 40}}>
      <FlatList
        renderItem={({item, index}) => <Text key={index}>{item}</Text>}
        onRefresh={() => null}
        refreshing={isRefreshing}
        data={data}
      />
      <Text>{`Current refreshing state: ${isRefreshing}`}</Text>
      <Button
        title="Refresh"
        onPress={() => {
          setData(isRefreshing ? Array.from({length: 10}, () => Math.floor(Math.random() * 10)) : []);
          setIsRefreshing(!isRefreshing);
        }}
      />
    </View>
  );
};

export default App;
