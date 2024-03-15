import { useNavigation } from "@react-navigation/native";
import { Center, Heading, Image, Text, VStack, ScrollView } from "native-base";

import BackgroundImg from "@assets/background.png";
import LogoSVG from "@assets/logo.svg";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function SignUp() {
  const navigation = useNavigation();

  const handleGoToSignIn = () => {
    navigation.goBack();
  };

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
        px={10}
        pb={16}
        style={{ justifyContent: "space-between" }}
      >
        <Image
          source={BackgroundImg}
          defaultSource={BackgroundImg}
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
            Crie sua conta
          </Heading>

          <Input placeholder="Nome" autoCapitalize="words" />
          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Input placeholder="Senha" secureTextEntry />
          <Input placeholder="Confirme a senha" secureTextEntry />

          <Button title="Criar e acessar" mt={8} />
        </Center>

        <Center mt={24}>
          <Button
            title="Voltar para o login"
            variant="outline"
            onPress={handleGoToSignIn}
          />
        </Center>
      </VStack>
    </ScrollView>
  );
}
