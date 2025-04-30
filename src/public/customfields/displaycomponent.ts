// interface DropdownItem {
//   label: string;
//   value: string;
// }
// interface FieldConfig {
//   type: string;
//   label: string;
//   data?: DropdownItem[];
//   placeholder?: string;
// }
// interface customFieldDispaly {
//   fieldConfig: FieldConfig;
//   values: {[key: string]: any};

//   touched: {[key: string]: boolean};
//   errors: {[key: string]: string};
// }

// export const displayField = ({
//   fieldConfig,
//   values,
//   toouched,
//   erros,
// }: customFieldDispaly) => {
//   switch (fieldConfig.type) {
//     case 'dropdown':
//       return (
//         return (
//             <>
//               <Label text={fieldConfig.label} style={styles.textStyle} />
//               <Dropdown
//                 style={styles.dropdown}
//                 data={fieldConfig.data || []}
//                 onChange={(item: any) =>
//                   setFieldValue?.(fieldConfig.name, item.value)
//                 }
//                 labelField="label"
//                 valueField="value"
//                 placeholder={fieldConfig.placeholder}
//                 value={values[fieldConfig.name]}
//               />
//               {touched[fieldConfig.name] && errors[fieldConfig.name] && (
//                 <Text style={styles.errorText}>{errors[fieldConfig.name]}</Text>
//               )}
//             </>
//           );
//     );
//   }
// };
