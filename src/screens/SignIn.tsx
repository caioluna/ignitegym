import { Center, Heading, Image, Text, VStack } from "native-base";
import BackgroundImg from "@assets/background.png";
import LogoSVG from "@assets/logo.svg";

export default function SignIn() {
  return (
    <VStack flex={1} bgColor={"gray.700"}>
      <Image
        source={BackgroundImg}
        alt="Duas pessoas fazendo exercício de spinning"
        resizeMode="contain"
        position="absolute"
      />

      <Center my={24}>
        <LogoSVG />
        <Text color="gray.100" fontSize="sm">
          Treine sua mente e o seu corpo
        </Text>
      </Center>

      <Center>
        <Heading color="gray.100" fontFamily="heading" fontSize="xl" mb={6}>
          Acesse sua conta
        </Heading>
      </Center>
    </VStack>
  );
}
