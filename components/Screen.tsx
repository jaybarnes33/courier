import { View, Text, TouchableOpacity } from "react-native";
import React, { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeft2 } from "iconsax-react-native";
import { router } from "expo-router";

const Screen = ({
  children,
  label,
}: {
  children: ReactNode;
  label: string;
}) => {
  return (
    <SafeAreaView className="px-6 py-3 flex-1 bg-[#fafafa]">
      <View className="justify-between flex-row gap-3 items-center ">
        <TouchableOpacity onPress={() => router.back()}>
          <ArrowLeft2 className="text-neutral-800" size={24} />
        </TouchableOpacity>
        <Text className="text-xl font-bold flex-1 text-center">{label}</Text>
      </View>
      {children}
    </SafeAreaView>
  );
};

export default Screen;
