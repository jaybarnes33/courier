import { View, Text, TouchableOpacity } from "react-native";
import React, { ReactNode } from "react";

import { BottomTabBarProps } from "@react-navigation/bottom-tabs";

import {
  Add,
  Box1,
  Home,
  Icon,
  Profile,
  TicketDiscount,
} from "iconsax-react-native";
import { router } from "expo-router";

const TabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  const icons: Record<string, [ReactNode, ReactNode]> = {
    index: [<Home color="gray" />, <Home variant="Bold" color="black" />],
    packages: [<Box1 color="gray" />, <Box1 variant="Bold" color="black" />],
    profile: [
      <Profile color="gray" />,
      <Profile variant="Bold" color="black" />,
    ],
    discounts: [
      <TicketDiscount color="gray" />,
      <TicketDiscount variant="Bold" color="black" />,
    ],
  };

  return (
    <View className="bg-[#fafafa] px-4">
      <View className="flex-row h-16 items-center shadow-md">
        {state.routes.slice(0, 2).map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            navigation.navigate(route.name);
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={route.name}
              accessibilityRole="button"
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ flex: 1, alignItems: "center" }}
            >
              {!isFocused ? (
                icons[route.name]?.at(0)
              ) : (
                <View className="relative -top-2 scale-105">
                  {icons[route.name]?.at(1)}
                  {isFocused && (
                    <View className="h-1 w-1 mx-auto rounded-full -bottom-2 bg-black " />
                  )}
                </View>
              )}
            </TouchableOpacity>
          );
        })}
        <TouchableOpacity
          onPress={() => router.push("/pickup")}
          className="h-12  w-12 bg-[#F9CE68] -mt-4 items-center justify-center rounded-full"
        >
          <Add className="text-neutral-700" />
        </TouchableOpacity>
        {state.routes.slice(2, 4).map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index + 2;

          const onPress = () => {
            navigation.navigate(route.name);
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={route.name}
              accessibilityRole="button"
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ flex: 1, alignItems: "center" }}
            >
              {!isFocused ? (
                icons[route.name]?.at(0)
              ) : (
                <View className="relative -top-2 scale-105">
                  {icons[route.name]?.at(1)}
                  {isFocused && (
                    <View className="h-1 w-1 mx-auto rounded-full -bottom-2 bg-black " />
                  )}
                </View>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default TabBar;
