import React, { useState } from 'react';
import { Dimensions } from "react-native";
import { View } from 'react-native';
import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';
import ThirdScreen from './screens/ThirdScreen';
import FourthScreen from './screens/FourthScreen';
import FifthScreen from './screens/FifthScreen';
import Carousel, { Pagination } from 'react-native-snap-carousel';


export default function PerfilScreen({ navigation }) {
    const [data] = useState([FirstScreen(), SecondScreen(), ThirdScreen(), FourthScreen(), FifthScreen()])
    const [activeSlide, setActiveSlide] = useState(0)
    const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

    const renderItem = ({ item }) => {
        return (
            <View style={{ height: 90*viewportHeight/100 }}>{item}</View>
        );
}

return (
    <View>
        <Carousel
            data={data}
            renderItem={renderItem}
            sliderWidth={viewportWidth}
            itemWidth={viewportWidth}
            slideStyle={{ width: viewportWidth }}
            inactiveSlideOpacity={1}
            inactiveSlideScale={1}
            onSnapToItem={(index) => setActiveSlide(index)}
            scrollEnabled={false}
        />
        <Pagination
            dotsLength={data.length}
            activeDotIndex={activeSlide}
            containerStyle={{ backgroundColor: '#FFFFFF' }}
            dotStyle={{
                width: 15,
                height: 15,
                borderRadius: 10,
                marginHorizontal: 8,
                backgroundColor: '#4460F1'
            }}
            inactiveDotStyle={{
                borderWidth: 1,
                backgroundColor: '#FFFFFF',
                borderColor: '#4460F1'
            }}
        />
    </View>
);
}