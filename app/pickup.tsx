import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Screen from "@/components/Screen";
import { Box, Location } from "iconsax-react-native";
import { TextInput } from "react-native-gesture-handler";
import { router } from "expo-router";

const Pickup = () => {
  return (
    <Screen label="Pick up">
      <View className="py-6">
        <Text className="font-semibold text-lg">
          Have your package picked up
        </Text>
        <Text className="text-sm text-gray-500">
          Enter your delivery details to get your package delivered
        </Text>
      </View>
      <View className="bg-white px-4 py-8 rounded-[20px]">
        <View className="flex-row gap-3 items-center">
          <View className="h-10 w-10 border border-gray-300 items-center justify-center bg-gray-100 rounded-full">
            <Box color="black" />
          </View>
          <View className="flex-1 gap-y-3 -top-5">
            <Text className="text-gray-500">Pickup - Point</Text>
            <TextInput className="py-4  rounded-2xl px-3 bg-gray-100 w-full" />
          </View>
        </View>
        <View className="h-[100px] w-[1px] absolute left-9 top-[45%] z-[-1]  border border-gray-300  border-dashed"></View>
        <View className="flex-row gap-3 items-center">
          <View className="h-10 w-10 border-gray-300 items-center justify-center bg-gray-100 rounded-full">
            <Location color="black" />
          </View>
          <View className="flex-1 gap-y-3 -top-5">
            <Text className="text-gray-500">Drop Off - Point</Text>
            <TextInput className="py-4  rounded-2xl px-3 bg-gray-100 w-full" />
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => router.push("/package")}
        className="bg-[#4641A7] rounded-2xl absolute w-full left-4 bottom-8 py-3 items-center"
      >
        <Text className="text-lg text-white">Get Courier</Text>
      </TouchableOpacity>
    </Screen>
  );
};

export default Pickup;
