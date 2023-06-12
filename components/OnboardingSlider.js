import React from "react";
import Swiper from 'react-native-swiper/src';
import Onboarding01 from './Onboarding01';
import Onboarding02 from './Onboarding02';
import Onboarding03 from './Onboarding03';

export default function OnboardingSlider({navigation}) {
  return (
    <Swiper>
      <Onboarding01 />
      <Onboarding02 />
      <Onboarding03 navigation={navigation} />
    </Swiper>
  )
}