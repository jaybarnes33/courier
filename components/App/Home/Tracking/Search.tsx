import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Scanner, SearchNormal } from "iconsax-react-native";
import { TextInput } from "react-native-gesture-handler";

const Search = () => {
  return (
    <View className="flex-row items-center gap-3 pt-3">
      <View className="flex-1 bg-white w-[60%] py-3 px-2 rounded-[24px] flex-row gap-x-2 items-center">
        <SearchNormal className="text-neutral-700" />
        <TextInput className="w-full h-full" />
      </View>
      <TouchableOpacity className="w-12 h-12 rounded-full bg-[#f9ce68] justify-center items-center">
        <Scanner className="text-neutral-700" size={24} />
      </TouchableOpacity>
    </View>
  );
};

export default Search;
