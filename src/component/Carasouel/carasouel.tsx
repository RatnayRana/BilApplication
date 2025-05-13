import React from 'react';
import {Modal, View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface CarasouelData {
  id?:number;
  title?:string;
  image?:any
  description?:string
}

const Carousel: React.FC<CarasouelData> = ({
  id,
  title,
  description,
  image
}) => {
    return (
    
    <View>

    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(2, 2, 2, 0.5)',
  },
  dialogContainer: {
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    padding: 20,
    position: 'relative',

  },
  iconContainer: {
    position: 'absolute',
    top: -20,
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 10,
    elevation: 5,
  },
  icon: {
    width: 50,
    height: 50,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#D32F2F',
    marginTop: 40,
    textAlign: 'center',
  },
  message: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginVertical: 15,
  },
  button: {
    // '#D32F2F'
    // backgroundColor: '#0AA06E',
    width: '100%',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Carousel;

// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { BaseToastProps } from 'react-native-toast-message';

// interface CustomToastProps extends BaseToastProps {
//   text1?: string;
//   text2?: string;
// }

// const toastConfig = {
//   error: ({ text1, text2 }: CustomToastProps) => (
//     <View style={styles.errorContainer}>
//       {text1 && <Text style={styles.errorText}>{text1}</Text>}
//       {text2 && <Text style={styles.subText}>{text2}</Text>}
//     </View>
//   ),
//   success: ({ text1, text2 }: CustomToastProps) => (
//     <View style={styles.successContainer}>
//       {text1 && <Text style={styles.successText}>{text1}</Text>}
//       {text2 && <Text style={styles.subText}>{text2}</Text>}
//     </View>
//   ),
//   delete: ({ text1, text2 }: CustomToastProps) => (
//     <View style={styles.errorContainer}>
//       {text1 && <Text style={styles.errorText}>{text1}</Text>}
//       {text2 && <Text style={styles.subText}>{text2}</Text>}
//     </View>
//   ),
// };

// const styles = StyleSheet.create({
//   errorContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//     width: '90%',
//     height: 52,
//     borderWidth: 1,
//     borderColor: '#D92D20',
//     backgroundColor: '#FEF3F2',
//     padding: 10,
//     borderRadius: 8,
//   },
//   successContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//     width: '90%',
//     height: 52,
//     borderWidth: 1,
//     borderColor: '#ABEFC6',
//     backgroundColor: '#ECFDF3',
//     padding: 10,
//     borderRadius: 8,
//   },
//   errorText: {
//     color: '#D92D20',
//     fontSize: 12,
//     fontWeight: 'bold',
//   },
//   successText: {
//     color: '#067647',
//     fontSize: 12,
//     fontWeight: 'bold',
//   },
//   subText: {
//     color: '#333', // Changed from white for better visibility
//     fontSize: 12,
//   },
// });

// export default toastConfig;
