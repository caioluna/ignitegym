import { HistoryCard } from "@components/HistoryCard";
import { ScreenHeader } from "@components/ScreenHeader";
import {
  Center,
  FlatList,
  Heading,
  SectionList,
  Text,
  VStack,
} from "native-base";
import { useState } from "react";

export function History() {
  const [exercises, setExercises] = useState([
    {
      title: "26.08.22",
      data: ["Puxada frontal", "Remada unilateral"],
    },
    {
      title: "25.08.22",
      data: ["Puxada frontal"],
    },
  ]);
  return (
    <VStack style={{ flex: 1 }}>
      <ScreenHeader title="Histórico de Exercícios" />

      <SectionList
        sections={exercises}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <HistoryCard />}
        renderSectionHeader={({ section }) => (
          <Heading
            color="gray.200"
            fontSize="md"
            mt={10}
            mb={3}
            fontFamily="heading"
          >
            {section.title}
          </Heading>
        )}
        px={8}
        contentContainerStyle={
          exercises.length === 0 && { flex: 1, justifyContent: "center" }
        }
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text color="gray.200" textAlign="center" fontSize="md">
            Não há exercícios registrados. {"\n"} Vamos treinar?
          </Text>
        )}
      />
    </VStack>
  );
}
