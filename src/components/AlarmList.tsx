import { Pressable, StyleSheet, Switch, Text } from "react-native";
import React from "react";
import { FlatList, HStack, Spacer, View, VStack } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { useAppDispatch, useAppSelector } from "../store";
import { setAlarmActive } from "../store/alarm.slice";

const EmptyComponent = () => {
  return (
    <View>
      <Text>No alarms</Text>
    </View>
  );
};

type Props = {};

const AlarmList = (props: Props) => {
  const alarmsState = useAppSelector((state) => state.alarm.alarms);

  const alarms = Object.values(alarmsState);

  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const handleEdit = (id: string) => {
    navigation.navigate("AlarmDetail", { id });
  };
  const handleActive = (value: boolean, id: string) => {
    dispatch(setAlarmActive({ value, id }));
  };

  return (
    <VStack space={4}>
      <FlatList
        data={alarms}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={EmptyComponent}
        contentContainerStyle={{ paddingBottom: 200 }}
        renderItem={({ item: alarm }) => (
          <View key={alarm.id} mt={3}>
            <View borderColor="gray.400" borderWidth={1} rounded="md">
              <HStack w="full" alignItems="center">
                <VStack padding={4} flex={1} w="full" display="flex">
                  <Pressable onPress={() => handleEdit(alarm.id)}>
                    <Text>{alarm.time}</Text>
                    <Text>{alarm.description}</Text>
                  </Pressable>
                </VStack>

                <View padding={4}>
                  <Switch
                    value={alarm.active}
                    onValueChange={(value) => handleActive(value, alarm.id)}
                  />
                </View>
              </HStack>
            </View>
          </View>
        )}
      />
    </VStack>
  );
};

export default AlarmList;
