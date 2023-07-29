import MapView, { Marker } from "react-native-maps";
import React from "react";
import Screen from "@/components/Screen";

import { Box, Call, Location, Message } from "iconsax-react-native";
import { Image, Text, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Package = () => {
  return (
    <Screen label="Live Tracking">
      <View className="h-[40%] mt-5 rounded-xl">
        <MapView
          className="rounded-2xl z-[-1] relative"
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
            title="Marker Title"
            description="Marker Description"
          />
        </MapView>
      </View>
      <View className="bg-[#4641A7] px-4 py-8 rounded-[20px] mt-6">
        <View className="flex-row gap-3 items-center">
          <View className="h-10 w-10  items-center justify-center bg-[#6965b9] rounded-full">
            <Box color="white" />
          </View>
          <View className="flex-1 pt-4 ">
            <Text className="text-[#ffffff6a] text-sm">From</Text>
            <Text className="text-white text-sm">
              32 East 98th Street, New York, NY 10065 , The United States of
              America
            </Text>
          </View>
        </View>
        <View className="h-[70px] w-[1px] absolute left-9 top-[45%] z-[-1]  border border-gray-300  border-dashed"></View>
        <View className="flex-row gap-3 items-center">
          <View className="h-10 w-10  items-center justify-center bg-[#6965b9] rounded-full">
            <Location color="white" />
          </View>
          <View className="flex-1 pt-4 ">
            <Text className="text-[#ffffff6a] text-sm">To</Text>
            <Text className="text-white text-sm">
              32 East 98th Street, New York, NY 10065 , The United States of
              America
            </Text>
          </View>
        </View>
      </View>
      <View className="bg-white p-4 py-5 mt-4 rounded-[20px]">
        <View className="flex-row gap-3 items-center">
          <Image
            className="h-10 w-10 rounded-full"
            source={require("@/assets/images/rider.jpeg")}
          />
          <View className="flex-1">
            <Text className="font-semibold">Akwasi Inkoom</Text>
            <Text className="text-sm text-gray-400">Courier - Express</Text>
          </View>
          <View className="flex-row gap-3">
            <TouchableOpacity className="h-10 w-10 items-center justify-center bg-[#4641A7] rounded-full">
              <Call color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <View className="flex-row justify-between gap-3 mt-3">
          <View>
            <Text className="text-gray-500">Status Order</Text>
            <View className="bg-[#32D4A4] px-5 py-2 mt-2 rounded-xl">
              <Text className="text-white">With Courier</Text>
            </View>
          </View>
          <View>
            <Text className="text-gray-500">Package Weight</Text>
            <Text className="mt-2 py-2">4kg</Text>
          </View>
        </View>
      </View>
    </Screen>
  );
};

export default Package;
