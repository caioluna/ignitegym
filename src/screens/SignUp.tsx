import { useNavigation } from "@react-navigation/native";
import {
  Center,
  Heading,
  Image,
  Text,
  VStack,
  ScrollView,
  useToast,
} from "native-base";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import BackgroundImg from "@assets/background.png";
import LogoSVG from "@assets/logo.svg";

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { api } from "@services/api";
import axios from "axios";
import { Alert } from "react-native";
import { AppError } from "@utils/AppError";

type FormDataProps = {
  name: string;
  email: string;
  password: string;
  password_confirm: string;
};

const signUpSchema = yup.object({
  name: yup.string().trim().required("Campo obrigatório"),
  email: yup
    .string()
    .required("Campo obrigatório")
    .email("E-mail inválido")
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      "E-mail precisa ter o seguinte formato: nome@email.xyz"
    ),
  password: yup
    .string()
    .trim()
    .required("Campo obrigatório")
    .min(6, "A senha deve ter no mínimo 6 dígitos"),
  password_confirm: yup
    .string()
    .trim()
    .required("Campo obrigatório")
    .oneOf([yup.ref("password")], "As senhas precisam ser idênticas"),
});

export function SignUp() {
  const toast = useToast();
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema),
  });

  const handleGoToSignIn = () => {
    navigation.goBack();
  };

  const handleSignUp = async ({ email, name, password }: FormDataProps) => {
    // const response = await fetch("http://192.168.15.145:3333/users", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ name, email, password }),
    // });
    try {
      const response = await api.post("/users", { email, name, password });

      console.log(response.data);
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError
        ? error.message
        : "Não foi possível criar a conta. Tente novamente mais tarde.";

      return toast.show({
        title: title,
        placement: "bottom",
        bgColor: "red.500",
      });
    }
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

          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Nome"
                autoCapitalize="words"
                onChangeText={onChange}
                value={value}
                errorMessage={errors.name?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="E-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={onChange}
                value={value}
                errorMessage={errors.email?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Senha"
                secureTextEntry
                onChangeText={onChange}
                value={value}
                errorMessage={errors.password?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="password_confirm"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Confirme a senha"
                secureTextEntry
                onChangeText={onChange}
                value={value}
                errorMessage={errors.password_confirm?.message}
                onSubmitEditing={handleSubmit(handleSignUp)}
                returnKeyType="send"
              />
            )}
          />

          <Button
            onPress={handleSubmit(handleSignUp)}
            title="Criar e acessar"
            mt={8}
          />
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
