import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Screen from "@/components/Screen";
import { Box, Location } from "iconsax-react-native";
import { TextInput } from "react-native-gesture-handler";

const rates = () => {
  return (
    <Screen label="Check Rates">
      <View className="py-6">
        <Text className="font-semibold text-lg">Calculate for shipment</Text>
        <Text className="text-sm text-gray-500">
          Enter your delivery details to get an estimation
        </Text>
      </View>
      <View className="bg-white px-4 py-8 rounded-[20px]">
        <View className="flex-row gap-3 items-center">
          <View className="h-10 w-10 items-center justify-center bg-gray-100 rounded-full">
            <Box color="black" />
          </View>
          <View className="flex-1 gap-y-3 -top-5">
            <Text className="text-gray-500">Pickup - Point</Text>
            <TextInput className="py-4  rounded-2xl px-3 bg-gray-100 w-full" />
          </View>
        </View>
        <View className="flex-row gap-3 items-center">
          <View className="h-10 w-10 items-center justify-center bg-gray-100 rounded-full">
            <Location color="black" />
          </View>
          <View className="flex-1 gap-y-3 -top-5">
            <Text className="text-gray-500">Drop Off - Point</Text>
            <TextInput className="py-4 rounded-2xl px-3 bg-gray-100 w-full" />
          </View>
        </View>
      </View>
      <TouchableOpacity className="bg-[#4641A7] rounded-2xl absolute w-full left-4 bottom-8 py-3 items-center">
        <Text className="text-lg text-white">Check Rates</Text>
      </TouchableOpacity>
    </Screen>
  );
};

export default rates;
