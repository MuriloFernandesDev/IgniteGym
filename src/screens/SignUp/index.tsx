import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base";

import BackGroundImg from "@assets/background.png";
import LogoSvg from "@assets/logo.svg";
import Input from "@components/Input";
import Button from "@components/Button";
import { useNavigation } from "@react-navigation/native";

function SignUp() {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} px={10}>
        <Image
          source={BackGroundImg}
          alt="Pessoas treinando"
          resizeMode="contain"
          defaultSource={BackGroundImg}
          position={"absolute"}
        ></Image>

        <Center my={24}>
          <LogoSvg />

          <Text color={"gray.100"} fontSize="sm">
            Treine sua mente e seu corpo
          </Text>
        </Center>

        <Center>
          <Heading
            color={"gray.100"}
            mb={6}
            fontSize="xl"
            fontFamily={"heading"}
          >
            Crie sua conta
          </Heading>

          <Input placeholder="Nome" />

          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize={"none"}
          />
          <Input placeholder="Senha" secureTextEntry />

          <Button title="Criar e acessar" />
        </Center>

        <Button
          title="Voltar para o login"
          onPress={handleGoBack}
          mt={24}
          variant="outline"
        />
      </VStack>
    </ScrollView>
  );
}

export default SignUp;
