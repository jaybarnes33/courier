import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React, { ComponentType, useState } from "react";
import Screen from "@/components/Screen";
import { ArrowRight, Box, Location } from "iconsax-react-native";

import GooglePlacesInput from "@/components/App/Home/Location/Selector";
import {
  GooglePlaceData,
  GooglePlaceDetail,
} from "react-native-google-places-autocomplete";
import { getDistance } from "@/utils/getDistance";
import { err } from "react-native-svg/lib/typescript/xml";

const Rates = () => {
  const [step, setStep] = useState(0);
  const [details, setDetails] = useState<{
    pickup: {
      latLng: string;
      name: string;
    };
    drop: {
      latLng: string;
      name: string;
    };
  }>({
    pickup: {
      latLng: "",
      name: "",
    },
    drop: {
      latLng: "",
      name: "",
    },
  });
  const [loading, setLoading] = useState(false);
  const [res, setRes] = useState({
    distance: "",
    duration: "",
    cost: 0,
  });
  const handleCalc = async () => {
    try {
      setLoading(true);
      const data = await getDistance(
        details.pickup.latLng,
        details.drop.latLng
      );
      data && setRes(data);
      setStep((step) => step + 1);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Screen label="Check Rates">
      <View className="py-6">
        <Text className="font-semibold text-lg">Calculate for shipment</Text>
        <Text className="text-sm text-gray-500">
          Enter your delivery details to get an estimation
        </Text>
      </View>
      {step < 2 && (
        <View className="bg-white flex-1 px-4 py-8 max-h-[40vh] rounded-[20px]">
          {step === 0 && (
            <GooglePlacesInput
              onSelect={(
                data: GooglePlaceData,
                details: GooglePlaceDetail | null
              ) =>
                details &&
                setDetails((prev) => ({
                  ...prev,
                  pickup: {
                    id: data.id,
                    name: details.formatted_address,
                    latLng: `${details.geometry.location.lat},${details.geometry.location.lng}`,
                  },
                }))
              }
              label="Pickup - Point"
              left={
                (
                  <View className="h-10 w-10 items-center justify-center bg-gray-100 rounded-full">
                    <Box color="black" />
                  </View>
                ) as unknown as ComponentType<{}>
              }
            />
          )}
          {/* <View className="flex-row gap-3 items-center">
          <View className="h-10 w-10 items-center justify-center bg-gray-100 rounded-full">
            <Box color="black" />
          </View>
          <View className="flex-1 gap-y-3 -top-5">
            <Text className="text-gray-500">Pickup - Point</Text>
            <TextInput className="py-4  rounded-2xl px-3 bg-gray-100 w-full" />
          </View>
        </View> */}
          {step === 1 && (
            <GooglePlacesInput
              label="Dropoff - Point"
              onSelect={(
                data: GooglePlaceData,
                details: GooglePlaceDetail | null
              ) =>
                details &&
                setDetails((prev) => ({
                  ...prev,
                  drop: {
                    id: data.id,
                    name: details.formatted_address,
                    latLng: `${details.geometry.location.lat},${details.geometry.location.lng}`,
                  },
                }))
              }
              left={
                (
                  <View className="h-10 w-10 items-center justify-center bg-gray-100 rounded-full">
                    <Location color="black" />
                  </View>
                ) as unknown as ComponentType<{}>
              }
            />
          )}
        </View>
      )}
      {step === 2 && (
        <View>
          <Text>Distance is {res.distance}</Text>
          <Text>Duration is {res.duration}</Text>
          <Text>Cost is {res.cost}</Text>
        </View>
      )}
      {step === 1 && (
        <TouchableOpacity
          className="bg-[#4641A7] rounded-2xl absolute w-full left-4 bottom-8 py-3 items-center"
          onPress={handleCalc}
        >
          {!loading ? (
            <Text className="text-lg text-white">Check Rates</Text>
          ) : (
            <ActivityIndicator />
          )}
        </TouchableOpacity>
      )}
      {step === 0 && (
        <TouchableOpacity
          className="flex-row items-center justify-end mt-9 ml-auto gap-x-3"
          onPress={() => setStep((step) => step + 1)}
        >
          <Text>Next</Text>
          <ArrowRight />
        </TouchableOpacity>
      )}
    </Screen>
  );
};

export default Rates;
