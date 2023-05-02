import { useState } from "react";
import { ButtonIcon } from "../Button/ButtonIcon";
import Input from "./input";
import TextArea from "./textarea";
import { AiOutlineArrowRight } from "react-icons/ai";
import {
  FormControl,
  FormLabel,
  Box,
  useToast,
  useColorMode,
} from "@chakra-ui/react";
import { supabase } from "../../superbase";
import { v4 as uuidv4 } from "uuid";


const Form = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loadState, setLoadState] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const toast = useToast();

  const postDB = async (uuid: any, name: any, email: any, message: any) => {
    let result = await supabase.from("form").insert({
      uuid: uuid,
      name: name,
      email: email,
      message: message,
    });

    const { error } = result;
    if (error === null) {
      console.log("Sent to database");
      return true;
    }
    return false;
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (!validateDetails(name, email, message)) {
      const toast_id = email;
      if (!toast.isActive(toast_id)) {
        toast({
          id: email,
          position: "top",
          title: "Error",
          description: "Please fill in all the fields",
          status: "error",
          duration: 1000,
          isClosable: false,
        });
      }
    } else {
      setLoadState(true);
      await postDB(uuidv4(), name, email, message).then(() => {
        setTimeout(() => {
          setLoadState(false);
          clearState().then(() => {
            toast({
              position: "top",
              title: "Success",
              description: "Thanks for reaching out!",
              status: "success",
              duration: 3000,
              isClosable: false,
            });
          });
        }, 1000);
      });
    }
  };

  const validateDetails = (name: any, email: any, message: any) => {
    if (name === "" || email === "" || message === "") {
      return false;
    }
    return /\S+@\S+\.\S+/.test(email);
  };

  const clearState = async () => {
    setForm({
      ...form,
      name: "",
      email: "",
      message: "",
    });
  };

  const handleChange = (event: any) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const { name, email, message } = form;

  return (
    <FormControl isRequired>
      <Box mb="5">
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          name="name"
          size="md"
          placeholder="Joshua"
          data={handleChange}
          value={name}
        />
      </Box>

      <Box mb="5">
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          name="email"
          size="md"
          placeholder="joshuadavidang@outlook.sg"
          data={handleChange}
          value={email}
        />
      </Box>

      <Box mb="5">
        <FormLabel>Message</FormLabel>
        <TextArea
          name="message"
          size="md"
          placeholder="Leave a message..."
          rows={5}
          data={handleChange}
          value={message}
        />
      </Box>

      <Box mt="7">
        <ButtonIcon
          isLoading={loadState}
          loadingText="Sending..."
          size="md"
          variant="solid"
          onClick={(event: any) => handleSubmit(event)}
          leftIcon={<AiOutlineArrowRight />}
          isDisabled={false}
          colorScheme={colorMode == "dark" ? "gray" : "blue"}
        >
          Send
        </ButtonIcon>
      </Box>
    </FormControl>
  );
};

export default Form;
