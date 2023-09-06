import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';

import Animation1 from '../../assets/animation1.json';
import Animation2 from '../../assets/animation2.json';
import Animation3 from '../../assets/animation3.json';

export default function OnboardingScreen() {
  const navigation = useNavigation();

  const handleDone = () => {
    navigation.navigate('SignIn');
  };

  return (
    <View style={{ flex: 1 }}>
      <Onboarding
        onDone={handleDone}
        onSkip={handleDone}
        bottomBarHighlight={false}
        containerStyles={{ paddingHorizontal: 15 }}
        pages={[
          {
            backgroundColor: '#081c15',
            image: (
              <LottieView style={{ width: 300, height: 400 }} source={Animation1} autoPlay loop />
            ),
            title: 'Dê um passo em direção à estabilidade financeira!',
            subtitle: 'E mantenha suas transações financeiras sob controle',
          },
          {
            backgroundColor: '#081c15',
            image: (
              <View style={{ width: 300, height: 400 }}>
                <LottieView style={{ width: 300, height: 400 }} source={Animation2} autoPlay loop />
              </View>
            ),
            title: 'Suas economias merecem atenção!',
            subtitle: 'Comece a monitorar suas despesas e receitas de maneira inteligente',
          },
          {
            backgroundColor: '#081c15',
            image: (
              <View style={{ width: 300, height: 400 }}>
                <LottieView style={{ width: 300, height: 400 }} source={Animation3} autoPlay loop />
              </View>
            ),
            title: 'Faça login agora!',
            subtitle: 'E descubra como nosso aplicativo pode simplificar sua vida financeira',
          },
        ]}
      />
    </View>
  );
}
