import { View, Text, Image, Pressable, TouchableOpacity } from "react-native";
import React, { ReactNode } from "react";
import Screen from "@/components/Screen";
import {
  ArrowRight2,
  Location,
  LocationDiscover,
  Profile,
} from "iconsax-react-native";

const profile = () => {
  const settings: Record<string, ReactNode> = {
    edit_profile: <Profile color="#4641a7" />,
    tracking: <Location color="#4641a7" />,
    address: <LocationDiscover color="#4641a7" />,
  };

  return (
    <Screen label="Profile">
      <View className="items-center my-3  ">
        <Image
          source={require("@/assets/images/rider.jpeg")}
          className="h-16 w-16 rounded-full"
        />
        <Text className="mt-1 font-semibold text-lg">Akwasi Inkoom</Text>
        <Text className="text-gray-400">Gold Member</Text>
      </View>
      <View className="flex-row my-3 justify-around">
        <View className="bg-white rounded-[20px]  h-32 shadow min-w-[43%] items-center justify-center ">
          <Image source={require("@/assets/images/package.png")} />
          <Text className="mt-2 font-semibold text-md ">All Packages</Text>
          <Text className="text-gray-400 text-sm">5 packages</Text>
        </View>
        <View className="bg-white rounded-[20px]  h-32 shadow min-w-[43%] items-center justify-center ">
          <Image source={require("@/assets/images/discount.png")} />
          <Text className="mt-2 font-semibold text-md ">All Packages</Text>
          <Text className="text-gray-400 text-sm">5 packages</Text>
        </View>
      </View>

      <View>
        <Text className="mt-4 text-gray-600">General</Text>
        {Object.keys(settings).map((item) => (
          <TouchableOpacity
            className="flex-row items-center my-4 gap-x-3"
            key={item}
          >
            {settings[item]}
            <Text className="capitalize flex-1">{item.replace("_", " ")}</Text>
            <ArrowRight2 color="gray" size={20} />
          </TouchableOpacity>
        ))}
      </View>
    </Screen>
  );
};

export default profile;
