import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import {
  HStack,
  Heading,
  Image,
  Text,
  VStack,
  useTheme,
  Icon,
} from "native-base";
import { Entypo } from "@expo/vector-icons";

type Props = TouchableOpacityProps & {};

export function ExerciseCard({ ...rest }: Props) {
  const { fonts } = useTheme();
  return (
    <TouchableOpacity {...rest}>
      <HStack
        bg="gray.500"
        alignItems="center"
        p={2}
        pr={4}
        rounded="md"
        mb={3}
      >
        <Image
          alt="Exercício de ..."
          source={{
            uri: "https://static.tuasaude.com/media/article/pb/gk/treino-costas_39685_l.webp",
          }}
          h={16}
          w={16}
          rounded="md"
          mr={4}
          resizeMode="cover"
        />

        <VStack flex={1}>
          <Heading fontSize="lg" color="white" fontFamily={fonts.heading}>
            Remada unilateral
          </Heading>
          <Text fontSize="sm" color="gray.200" mt={1} numberOfLines={2}>
            3 séries x 12 repetições
          </Text>
        </VStack>

        <Icon as={Entypo} name="chevron-thin-right" color="gray.300" />
      </HStack>
    </TouchableOpacity>
  );
}