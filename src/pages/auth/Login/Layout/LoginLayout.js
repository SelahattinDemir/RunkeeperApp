import React from 'react';
import {SafeAreaView, Text, Image, View} from 'react-native';
import {Formik} from 'formik';

import Input from '../../../../Component/Input';
import Button from '../../../../Component/Button';

import styles from './LoginLayout.styles';

const initialFormValues = {
  usermail: '',
  password: '',
};

export default function LoginLayout({onSignUp, onSignIn, loading}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo_container}>
        <Image
          source={require('../../../../assets/Logo3.png')}
          style={styles.image}
        />
        <Text style={styles.header}>Runkeeper</Text>
      </View>

      <Formik initialValues={initialFormValues} onSubmit={onSignIn}>
        {({values, handleChange, handleSubmit}) => (
          <>
            <Input
              onChangeText={handleChange('usermail')}
              value={values.usermail}
              placeholder="e postanızı giriniz.."
            />
            <Input
              onChangeText={handleChange('password')}
              value={values.password}
              placeholder="şifrenizi giriniz.."
              isSecure
            />
            <Button text="Giriş Yap" onPress={handleSubmit} loading={loading} />
          </>
        )}
      </Formik>
      <Button text="Kayıt Ol" theme="secondary" onPress={onSignUp} />
    </SafeAreaView>
  );
}
