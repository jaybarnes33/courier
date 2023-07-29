import Location from "@/components/App/Home/Location";
import Tracking from "@/components/App/Home/Tracking";
import { useRouter } from "expo-router";

import { View, SafeAreaView, Image, Text, Pressable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function TabOneScreen() {
  const router = useRouter();
  const qa = [
    {
      name: "Check Rates",
      image: require("@/assets/images/rate.png"),
    },
    {
      name: "Pick up",
      image: require("@/assets/images/delivery.png"),
    },
  ];
  return (
    <View className="bg-[#fafafa] flex-1">
      <View className="bg-[#4641a7] pt-6 relative h-[85%] rounded-b-[40px]">
        <SafeAreaView className="mx-6">
          <Location />
          <View className="h-[75%] -mt-[12%]">
            <Image
              source={require("@/assets/images/track.png")}
              className="w-full h-full"
            />
          </View>
          <Tracking />
        </SafeAreaView>
        <View className="mt-10 px-6 flex-row gap-x-3 justify-around">
          {qa.map((item) => (
            <Pressable
              onPress={() =>
                router.push(item.name.includes("Rates") ? "/rates" : "/pickup")
              }
              className="min-w-[145px] h-40  rounded-3xl shadow  bg-white items-center justify-center py-4"
            >
              <Image className="w-16" source={item.image} />
              <Text className="pt-4">{item.name}</Text>
            </Pressable>
          ))}
        </View>
      </View>
    </View>
  );
}
