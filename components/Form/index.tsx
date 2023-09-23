import { useState } from 'react';
import { ButtonIcon } from '@/components/Button/ButtonIcon';
import Input from './input';
import TextArea from './textarea';
import { AiOutlineArrowRight } from 'react-icons/ai';
import {
  FormControl,
  FormLabel,
  Box,
  useToast,
  useColorMode,
} from '@chakra-ui/react';
import { validateDetails, addFormToDB } from '@/helpers/form';
import { randomUniqueId } from '@/helpers/randomUniqueId';

const Form = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loadState, setLoadState] = useState(false);
  const { colorMode } = useColorMode();
  const toast = useToast();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (!validateDetails(name, email, message)) {
      const toast_id = email;
      if (!toast.isActive(toast_id)) {
        toast({
          id: email,
          position: 'top',
          title: 'Error',
          description: 'Please fill in all the fields',
          status: 'error',
          duration: 1000,
          isClosable: false,
          containerStyle: { color: 'black' },
        });
      }
    } else {
      setLoadState(true);
      await addFormToDB(randomUniqueId(), name, email, message).then(() => {
        setTimeout(() => {
          setLoadState(false);
          clearState().then(() => {
            toast({
              position: 'top',
              title: 'Success',
              description: 'Thanks for reaching out!',
              status: 'success',
              duration: 3000,
              isClosable: false,
              containerStyle: { color: 'black' },
            });
          });
        }, 1000);
      });
    }
  };

  const clearState = async () => {
    setForm({
      ...form,
      name: '',
      email: '',
      message: '',
    });
  };

  const handleChange = (event: any) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      handleSubmit(event);
    }
  };

  const { name, email, message } = form;

  return (
    <FormControl isRequired>
      <Box mb="5" mt="8">
        <FormLabel>First name</FormLabel>
        <Input
          type="text"
          name="name"
          size="md"
          placeholder="First name"
          onKeyDown={handleKeyDown}
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
          placeholder="Email address"
          onKeyDown={handleKeyDown}
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
          onKeyDown={handleKeyDown}
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
          colorScheme={colorMode === 'dark' ? 'gray' : 'telegram'}
        >
          Send
        </ButtonIcon>
      </Box>
    </FormControl>
  );
};

export default Form;
