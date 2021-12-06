import React from 'react';
import {FlatList, View} from 'react-native';
import {ListItem} from 'react-native-elements';
import user from '../data/user';

export default props => {
  function getUserItem({item: user}) {
    return <ListItem leftAvatar={{source: {uri: user.avatarUrl}}} />;
  }

  return (
    <View>
      <FlatList
        keyExtractor={user => user.id.toString()}
        data={user}
        renderItem={getUserItem}
      />
    </View>
  );
};
