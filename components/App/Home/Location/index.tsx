import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Notification, Profile } from "iconsax-react-native";
import { router } from "expo-router";

const Location = () => {
  return (
    <View className="flex-row items-center relative z-[99] ">
      <TouchableOpacity className="w-12 h-12 rounded-full bg-[#ffffff1f] justify-center items-center">
        <Profile color="white" size={24} />
      </TouchableOpacity>
      <View className="flex-1 items-center ">
        <Text className="text-xs text-gray-200">Your Location</Text>
        <Text className="text-white text-sm">Tarkwa, Agric Hill, Ghana</Text>
      </View>
      <TouchableOpacity
        onPress={() => router.push("/notifications")}
        className="w-12 h-12 rounded-full bg-[#ffffff1f] justify-center items-center"
      >
        <Notification color="white" size={24} />
      </TouchableOpacity>
    </View>
  );
};

export default Location;
