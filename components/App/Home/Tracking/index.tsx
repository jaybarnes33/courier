import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Scanner, SearchNormal } from "iconsax-react-native";
import { TextInput } from "react-native-gesture-handler";
import Search from "./Search";

const Tracking = () => {
  return (
    <View className="-mt-9 bottom-0 absolute w-full  ">
      <Text className="text-xl text-white text-center font-semibold">
        Track Your Package!
      </Text>
      <Text className="text-center text-lg text-[#ffffffaa]">
        Please enter your tracking number
      </Text>
      <Search />
    </View>
  );
};

export default Tracking;
