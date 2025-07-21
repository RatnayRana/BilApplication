import React, { useEffect } from 'react';
import { View, ScrollView, Text, Dimensions } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import NavComponent from '../../component/NavComponent/navvomponent';
import { colors } from '../../utils/color';
import ImageComponent from '../../component/Image/index.image';
import { styles } from './splash-style';
import { RootStackNavigatorParamsList } from '../../component/interface/routeinterface';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
const { width } = Dimensions.get('window');
type SplashScreenNavigationProp = NativeStackScreenProps<RootStackNavigatorParamsList, 'SplashScreen'>;



const SplashScreen:React.FC<SplashScreenNavigationProp>= ({navigation}) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('SignInStack'); // <-- Make sure this matches your defined route
        }, 2000);

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={{ flex: 1, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <ImageComponent
                    imageSource={require('../../assets/billogo.png')}
                    width={200}
                    height={200}
                    style={styles.headerImage}
                />
                <Text style={{
                    fontSize: width * 0.06,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    color: 'white'
                }}>Welcome to Bhutan Insurance Limited (eBIL)</Text>

            </View>


        </View>
    );
};

export default SplashScreen;

