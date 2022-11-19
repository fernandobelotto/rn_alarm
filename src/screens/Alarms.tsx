import { Feather } from "@expo/vector-icons";
import { Heading, HStack, IconButton, Spacer, VStack } from "native-base";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AlarmList from "../components/AlarmList";

export default function Alarms({ navigation }: any) {
  return (
    <>
      <SafeAreaView>
        <VStack padding={5} space={3}>
          <HStack alignItems="center">
            <Heading>Alarmes</Heading>
            <Spacer />
            <IconButton
              onPress={() => navigation.navigate("AlarmDetail")}
              icon={<Feather name="plus" size={32} color="black" />}
            />
          </HStack>

          <AlarmList />
        </VStack>
      </SafeAreaView>
    </>
  );
}
