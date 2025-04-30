import {StyleProp, View, ViewStyle} from 'react-native';
import LoaderKit from 'react-native-loader-kit';
import {styles} from './style.loader';
import {memo} from 'react';

interface LoaderIProps {
  viewStyle?: StyleProp<ViewStyle>;
  color?: string;
  width?: number;
  height?: number;
  name?: string;
  isLoading?: boolean;
  LoaderStyle?:StyleProp<ViewStyle>
}

// AuthLoader Component
export const LoaderCompoment = memo(
  ({isLoading, color, width, height, name,LoaderStyle}: LoaderIProps) => {
    if (!isLoading) {return null;}
    return (
      <View style={[styles.loader,LoaderStyle]}>
        <LoaderKit
          style={{width: width, height: height}}
          name={name} // Optional: see list of animations below
          color={color} // Optional: color can be: 'red', 'green',... or '#ddd', '#ffffff',...
        />
      </View>
    );
  },
);

export default LoaderCompoment;
