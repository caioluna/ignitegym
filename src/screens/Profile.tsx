import { useState } from "react";
import { TouchableOpacity } from "react-native";
import {
  Center,
  Heading,
  ScrollView,
  Skeleton,
  Text,
  VStack,
} from "native-base";

import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

export function Profile() {
  const [isPhotoLoading, setIsPhotoLoading] = useState(false);

  const PHOTO_SIZE = 33;

  return (
    <VStack style={{ flex: 1 }}>
      <ScreenHeader title="Perfil" />
      <ScrollView>
        <Center mt={6} mb={9} px={10}>
          {isPhotoLoading ? (
            <Skeleton
              w={PHOTO_SIZE}
              h={PHOTO_SIZE}
              rounded="full"
              startColor="gray.500"
              endColor="gray.900"
              borderWidth={1}
              borderColor="gray.400"
            />
          ) : (
            <UserPhoto
              source={{ uri: "https://github.com/caioluna.png" }}
              alt="Foto de perfil do usuário"
              size={PHOTO_SIZE}
            />
          )}

          <TouchableOpacity>
            <Text
              color="green.500"
              fontFamily="heading"
              fontSize="md"
              mt={2}
              mb={8}
            >
              Alterar foto
            </Text>
          </TouchableOpacity>

          <Input placeholder="Nome" bg="gray.600" />
          <Input placeholder="E-mail" bg="gray.600" isDisabled />

          <Heading
            color="gray.200"
            fontSize="md"
            fontFamily="heading"
            mt={10}
            mb={2}
            alignSelf="flex-start"
          >
            Alterar senha
          </Heading>
          <Input placeholder="Senha antiga" bg="gray.600" secureTextEntry />
          <Input placeholder="Nova senha" bg="gray.600" secureTextEntry />
          <Input
            placeholder="Confirme nova senha"
            bg="gray.600"
            secureTextEntry
          />

          <Button title="Atualizar" mt={4} />
        </Center>
      </ScrollView>
    </VStack>
  );
}
