import MapView, { LatLng, Marker, Polyline } from "react-native-maps";
import React, { useEffect, useRef, useState } from "react";
import Screen from "@/components/Screen";

import { Box, Call, Location, Message } from "iconsax-react-native";
import { Image, Text, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useRoute } from "@react-navigation/native";
import PulsingText from "@/components/App/Home/RiderLoading";
import { useWebSocket } from "@/socket/SocketContext";
import { Package as PackageType, Rider } from "@/types/app";
import { getPath } from "@/utils/getDistance";

const Package = () => {
  const route = useRoute();

  const { webSocketManager } = useWebSocket();
  const [rider, setRider] = useState<Rider | null>();
  const [accepted, setAccepted] = useState(false);
  const [polyline, setPolyline] = useState<LatLng[]>([]);
  const {
    //@ts-ignore
    details: { pickup, drop },
    //@ts-ignore
    data: { coordinates },
  } = route.params;
  useEffect(() => {
    webSocketManager
      .getSocket()
      ?.on("packagedAccepted", (data: PackageType) => {
        console.log(data.assignedTo);
        setRider(data.assignedTo);
        webSocketManager.getSocket()?.emit("path", coordinates);
      });
  }, []);

  useEffect(() => {
    if (rider) {
      (async () => {
        const path = await getPath(
          `${rider.location.coordinates[0]},${rider.location.coordinates[1]}`,
          `${pickup.latLng.latitude},${pickup.latLng.longitude}`
        );
        console.log({ path });
        path && setPolyline(path?.coordinates);
      })();
    }
  }, [rider]);

  const [coords, setCoords] = useState<LatLng[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    setCoords([...polyline, ...coordinates]);
    const interval = setInterval(() => {
      console.log(coords);
      if (currentIndex < coords.length - 1) {
        setCurrentIndex(currentIndex + 1);
        setRiderLocation(coords[currentIndex + 1]);
      } else {
        clearInterval(interval);
      }
    }, 1000); // Adjust the interval duration (in milliseconds)

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, polyline, polyline]);
  const mapRef = useRef<MapView | null>(null);
  // Function to set the map's zoom and position to fit between the two points

  const [riderLocation, setRiderLocation] = useState<LatLng | null>();
  useEffect(() => {
    rider &&
      setRiderLocation({
        latitude: Number(rider.location.coordinates[0]),
        longitude: Number(rider.location.coordinates[1]),
      });
  }, [rider]);
  const fitMapBetweenCoordinates = () => {
    if (mapRef.current) {
      const latitudes = coordinates.map((coord: LatLng) => coord.latitude);
      const longitudes = coordinates.map((coord: LatLng) => coord.longitude);

      const minLat = Math.min(...latitudes);
      const maxLat = Math.max(...latitudes);
      const minLng = Math.min(...longitudes);
      const maxLng = Math.max(...longitudes);

      const southwest = { latitude: minLat, longitude: minLng };
      const northeast = { latitude: maxLat, longitude: maxLng };

      const padding = 50; // Adjust this value as needed for padding around the edges
      const edgePadding = {
        top: padding,
        right: padding,
        bottom: padding,
        left: padding,
      };

      mapRef.current.fitToCoordinates([southwest, northeast], {
        edgePadding,
        animated: true,
      });
    }
  };

  return (
    <Screen label="Live Tracking">
      <View className=" flex-1 relative mt-5 rounded-xl">
        {!rider && <PulsingText />}
        <MapView
          ref={mapRef}
          className="rounded-2xl z-[-1] relative"
          style={{ flex: 1 }}
          initialRegion={{
            latitude: Number(pickup.latLng.split(",")[0]),
            longitude: Number(pickup.latLng.split(",")[1]),
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
          minZoomLevel={10}
        >
          <Marker
            coordinate={{
              latitude: Number(pickup.latLng.split(",")[0]),
              longitude: Number(pickup.latLng.split(",")[1]),
            }}
            title={pickup.name}
          />
          <Marker
            image={require("@/assets/images/package.png")}
            coordinate={{
              latitude: Number(drop.latLng.split(",")[0]),
              longitude: Number(drop.latLng.split(",")[1]),
            }}
            title={drop.name}
          />
          {rider && riderLocation && (
            <Marker title={rider.name} coordinate={riderLocation} />
          )}
          <Polyline coordinates={coordinates} fillColor="#6965b9" />
          <Polyline coordinates={polyline} fillColor="#6965b9" />
        </MapView>
      </View>
      <View className="bg-[#4641A7] px-4 py-8 rounded-[20px] mt-6">
        <View className="flex-row gap-3 items-center">
          <View className="h-10 w-10  items-center justify-center bg-[#6965b9] rounded-full">
            <Box color="white" />
          </View>
          <View className="flex-1 pt-4 ">
            <Text className="text-[#ffffff6a] text-sm">From</Text>
            <Text className="text-white text-sm">{pickup?.name}</Text>
          </View>
        </View>
        <View className="h-[70px] w-[1px] absolute left-9 top-[45%] z-[-1]  border border-gray-300  border-dashed"></View>
        <View className="flex-row gap-3 items-center">
          <View className="h-10 w-10  items-center justify-center bg-[#6965b9] rounded-full">
            <Location color="white" />
          </View>
          <View className="flex-1 pt-4 ">
            <Text className="text-[#ffffff6a] text-sm">To</Text>
            <Text className="text-white text-sm">{drop.name}</Text>
          </View>
        </View>
      </View>
      {rider && (
        <View className="bg-white p-4 py-5 mt-4 rounded-[20px]">
          <View className="flex-row gap-3 items-center">
            <Image
              className="h-10 w-10 rounded-full"
              source={require("@/assets/images/rider.jpeg")}
            />
            <View className="flex-1">
              <Text className="font-semibold">{rider.name}</Text>
              <Text className="text-sm text-gray-400">
                Vehicle #: {rider.vehicleNumber}{" "}
                {rider.location.coordinates.toString()}
              </Text>
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
      )}
    </Screen>
  );
};

export default Package;
