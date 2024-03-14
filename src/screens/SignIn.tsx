import { Center, Heading, Image, Text, VStack, ScrollView } from "native-base";

import BackgroundImg from "@assets/background.png";
import LogoSVG from "@assets/logo.svg";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

export default function SignIn() {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
      alwaysBounceVertical={false}
      automaticallyAdjustKeyboardInsets
      bounces={false}
    >
      <VStack
        flex={1}
        bgColor={"gray.700"}
        px={10}
        pb={16}
        style={{ justifyContent: "space-between" }}
      >
        <Image
          source={BackgroundImg}
          alt="Duas pessoas fazendo exercício de spinning"
          resizeMode="contain"
          position="absolute"
        />

        <Center mt={12}>
          <LogoSVG />
          <Text color="gray.100" fontSize="sm">
            Treine sua mente e o seu corpo
          </Text>
        </Center>

        <Center mt={24}>
          <Heading color="gray.100" fontFamily="heading" fontSize="xl" mb={6}>
            Acesse sua conta
          </Heading>

          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Input placeholder="Senha" secureTextEntry />

          <Button title="Acessar" mt={8} />
        </Center>

        <Center mt={24}>
          <Text color="gray.100" fontSize="md" mb={3} fontFamily="body">
            Ainda não tem acesso?
          </Text>
          <Button title="Criar conta" variant="outline" />
        </Center>
      </VStack>
    </ScrollView>
  );
}
