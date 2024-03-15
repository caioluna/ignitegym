import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { FlatList, HStack, Heading, Text, VStack } from "native-base";

import { HomeHeader } from "@components/HomeHeader";
import { MuscleGroup } from "@components/MuscleGroup";
import { ExerciseCard } from "@components/ExerciseCard";

import { AppNavigatorRoutesProps } from "@routes/app.routes";

export function Home() {
  const [muscleGroup, setMuscleGroup] = useState([
    "costas",
    "bíceps",
    "tríceps",
    "ombro",
    "pernas",
  ]);
  const [exercises, setExercises] = useState([
    "Puxada frontal",
    "Remada curvada",
    "Remada unilateral",
    "Levantamento terra",
    "Leg press",
  ]);
  const [selectedMuscleGroup, setSelectedMuscleGroup] = useState("costas");

  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const handleOpenExercise = () => {
    navigation.navigate("exercise");
  };

  return (
    <VStack style={{ flex: 1 }}>
      <HomeHeader />

      <HStack>
        <FlatList
          data={muscleGroup}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <MuscleGroup
              name={item}
              isActive={
                selectedMuscleGroup.toLowerCase() === item.toLowerCase()
              }
              onPress={() => setSelectedMuscleGroup(item)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          _contentContainerStyle={{
            px: 8,
          }}
          my={10}
          maxH={10}
          minH={10}
        />
      </HStack>

      <VStack flex={1} px={8}>
        <HStack justifyContent="space-between" mb={5}>
          <Heading color="gray.200" fontSize="md" fontFamily="heading">
            Exercícios
          </Heading>
          <Text color="gray.200" fontSize="sm">
            {exercises.length}
          </Text>
        </HStack>

        <FlatList
          data={exercises}
          keyExtractor={(item) => item}
          renderItem={() => <ExerciseCard onPress={handleOpenExercise} />}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{ paddingBottom: 10 }}
        />
      </VStack>
    </VStack>
  );
}
