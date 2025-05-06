import {View} from 'react-native';
import {Text} from 'react-native-paper';
import { colors } from '../../utils/color';
// import { styles } from "./style"

const Search = () => {
  return (
    <View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:colors.black}}>
        <Text>Search Screen</Text>
      </View>
    </View>
  );
};
export default Search;
