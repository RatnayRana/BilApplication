import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import TextCompoment from '../TextComponent/index.text';
import { CardProps } from '../interface/card.interface';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../../utils/color';
import { iconLibraries } from '../Icon/icon';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Card: React.FC<CardProps> = ({
  item,
  imageandTitleStyle,
  titleStyle,
  onPress,
}) => {
  return (
    <View>
      {item?.map((itemCard, index) => {

        const IconComponent = itemCard.iconLib ? iconLibraries[itemCard.iconLib] : MaterialCommunityIcons;
        return (
          <TouchableOpacity
            key={index}
            onPress={(event) => {
              onPress(event, itemCard);
            }}
          >
            <View style={imageandTitleStyle}>
              <IconComponent name={itemCard.iconName} size={40} color={colors.primary} />
              <TextCompoment
                text={itemCard.item_name}
                style={[titleStyle, { color: colors.primary, fontWeight: '600' }]}
              />
              {itemCard?.icon && (
                <View>
                  <Icon name="chevron-forward" size={24} color={colors.primary} />
                </View>
              )}
            </View>
            <View
              style={{
                borderBottomWidth: 1,
                borderColor: '#ccc',
                marginVertical: 5,
              }}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Card;