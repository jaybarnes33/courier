import { View } from "@/components/Themed";
import React, { ComponentType, ReactNode } from "react";
import { Text, TextInput } from "react-native";
import {
  GooglePlaceData,
  GooglePlaceDetail,
  GooglePlacesAutocomplete,
} from "react-native-google-places-autocomplete";
const GooglePlacesInput = ({
  label,
  onSelect,
  left,
}: {
  label: string;
  onSelect: (data: GooglePlaceData, details: GooglePlaceDetail | null) => void;
  left: ComponentType<{}>;
}) => {
  return (
    <>
      <Text>{label}</Text>
      <GooglePlacesAutocomplete
        fetchDetails
        placeholder="Search"
        listViewDisplayed={false}
        onPress={onSelect}
        enablePoweredByContainer={false}
        listEmptyComponent={() => (
          <View>
            <Text>No results found</Text>
          </View>
        )}
        styles={{
          container: {
            height: "30%",
          },
          textInput: {
            backgroundColor: "#f5f5f5",
            margin: 10,
            borderRadius: 24,
            borderColor: "#f2f2f7",
            borderWidth: 1,
          },
          textInputContainer: {
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "white",
          },
        }}
        renderLeftButton={() => left}
        numberOfLines={4}
        onTimeout={() => console.log("Timed out")}
        onFail={(e) => console.log(e)}
        query={{
          key: "AIzaSyDBip8f6XGvMW1vgn8p1ThCPeVqKyjfLOE",
        }}
      />
    </>
  );
};

export default GooglePlacesInput;
