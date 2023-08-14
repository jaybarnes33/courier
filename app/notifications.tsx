import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import Screen from "@/components/Screen";

const Notifications = () => {
  return (
    <Screen label="Notifications">
      <ScrollView className="mt-5  -left-6 w-screen px-6">
        <Text className="text-xl">Today</Text>
        {new Array(5).fill(0).map((_, i) => (
          <View className="mt-2  py-3 rounded flex-1 flex-row items-start gap-x-2 border-b border-gray-200">
            <Image
              source={require("@/assets/images/clearance.png")}
              className="w-6 h-6"
            />
            <View>
              <View className="flex-row gap-2 items-center">
                <View className="flex-row items-center">
                  <Text className="text-sm text-gray-500">
                    {new Date().toISOString().split("T")[0]}
                  </Text>
                  <View className="h-1 w-1 bg-gray-300 rounded-full mx-1" />
                  <Text className="text-sm text-gray-500">
                    {new Date().toISOString().split("T")[1].slice(0, 5)}
                  </Text>
                </View>
              </View>
              <Text className="text-lg font-semibold">Delivery Update</Text>
              <Text className="text-base text-gray-700">
                Your package is {i % 2 === 0 ? `being picked up` : "in transit"}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </Screen>
  );
};

export default Notifications;
