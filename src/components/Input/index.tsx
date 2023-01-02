import { IInputProps, Input as NativeBaseInput } from "native-base";

interface InputProps extends IInputProps {}

const Input = ({ ...rest }: InputProps) => {
  return (
    <NativeBaseInput
      bg="gray.700"
      h={14}
      px={4}
      color="white"
      fontSize="md"
      borderWidth={0}
      fontFamily="body"
      mb={4}
      placeholderTextColor="gray.300"
      _focus={{
        bg: "gray.700",
        borderWidth: 1,
        borderColor: "green.500",
      }}
      {...rest}
    />
  );
};

export default Input;
