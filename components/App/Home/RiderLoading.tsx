import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";

const PulsingText: React.FC = () => {
  const pulseAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const pulse = () => {
      Animated.sequence([
        Animated.timing(pulseAnimation, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnimation, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]).start(() => {
        // Repeat the pulse animation when it completes
        pulse();
      });
    };

    // Start the pulsing animation
    pulse();
  }, []);

  // Interpolate the animated value to control opacity and scale
  const opacity = pulseAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0.2, 1],
  });

  const scale = pulseAnimation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 1.1, 1],
  });

  return (
    <View className="absolute flex-1 justify-center items-center w-full py-5 ">
      <Animated.Text
        className="text-lg text-blue-700"
        style={[{ opacity, transform: [{ scale }] }]}
      >
        Looking for a rider...
      </Animated.Text>
    </View>
  );
};

export default PulsingText;
