import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base";
import { useNavigation } from "@react-navigation/native";
import BackGroundImg from "@assets/background.png";
import LogoSvg from "@assets/logo.svg";
import Input from "@components/Input";
import Button from "@components/Button";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

function SignIn() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  function handleNewAccount() {
    navigation.navigate("SignUp");
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} px={10}>
        <Image
          source={BackGroundImg}
          defaultSource={BackGroundImg}
          alt="Pessoas treinando"
          resizeMode="contain"
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
            Acesse sua conta
          </Heading>

          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize={"none"}
          />
          <Input placeholder="Senha" secureTextEntry />

          <Button title="Acessar" />
        </Center>
        <Center mt={24}>
          <Text color={"gray.100"} fontSize={"sm"} mb={3} fontFamily={"body"}>
            Ainda não tem acesso?
          </Text>
          <Button
            title="Criar conta"
            onPress={handleNewAccount}
            variant="outline"
          />
        </Center>
      </VStack>
    </ScrollView>
  );
}

export default SignIn;
