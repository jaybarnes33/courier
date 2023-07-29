import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import Screen from "@/components/Screen";
import { Calendar } from "iconsax-react-native";

const Notifications = () => {
  return (
    <Screen label="Notifications">
      <ScrollView className="mt-5">
        <Text className="text-xl">Today</Text>
        {new Array(5).fill(0).map((_, i) => (
          <View className="mt-2 bg-white py-3 rounded flex-row items-center gap-x-2">
            <Image source={require("@/assets/images/clearance.png")} />
            <View>
              <Text className="text-lg font-semibold">Delivery Update</Text>
              <Text className="text-base text-gray-700">
                Your package is {i % 2 === 0 ? `being picked up` : "in transit"}
              </Text>
              <View className="flex-row gap-2 items-center">
                <Calendar size={15} color="grey" />
                <Text className="text-sm text-gray-500">
                  {new Date().toISOString().split("T")[0]}{" "}
                  {new Date().toISOString().split("T")[1].slice(0, 8)}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </Screen>
  );
};

export default Notifications;
