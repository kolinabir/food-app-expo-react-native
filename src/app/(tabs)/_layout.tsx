import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/src/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen name="index" options={{ href: null, headerShown: false }} />

      <Tabs.Screen
        name="menu"
        options={{
          headerShown: false,
          title: "menu",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="pizza" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Orders",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="list" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
