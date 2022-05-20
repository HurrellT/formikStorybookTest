import {Alert, Button, Text, TextInput, View} from 'react-native';
import * as yup from 'yup';
import {Formik} from 'formik';
import React from 'react';

export const Form = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      onSubmit={values => Alert.alert(JSON.stringify(values))}
      validationSchema={yup.object().shape({
        name: yup.string().required('Please, provide your name!'),
        email: yup.string().email().required(),
        password: yup
          .string()
          .min(4)
          .max(10, 'Password should not excced 10 chars.')
          .required(),
      })}>
      {({
        values,
        handleChange,
        errors,
        setFieldTouched,
        touched,
        isValid,
        handleSubmit,
      }) => (
        <View>
          <TextInput
            value={values.name}
            onChangeText={handleChange('name')}
            onBlur={() => setFieldTouched('name')}
            placeholder="Name"
          />
          {touched.name && errors.name && (
            <Text style={{fontSize: 12, color: '#FF0D10'}}>{errors.name}</Text>
          )}
          <TextInput
            value={values.email}
            onChangeText={handleChange('email')}
            onBlur={() => setFieldTouched('email')}
            placeholder="E-mail"
          />
          {touched.email && errors.email && (
            <Text style={{fontSize: 12, color: '#FF0D10'}}>{errors.email}</Text>
          )}
          <TextInput
            value={values.password}
            onChangeText={handleChange('password')}
            placeholder="Password"
            onBlur={() => setFieldTouched('password')}
            secureTextEntry={true}
          />
          {touched.password && errors.password && (
            <Text style={{fontSize: 12, color: '#FF0D10'}}>
              {errors.password}
            </Text>
          )}
          <Button
            color="#3740FE"
            title="Submit"
            disabled={!isValid}
            onPress={handleSubmit}
          />
        </View>
      )}
    </Formik>
  );
};
