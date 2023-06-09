import { Container, Grid } from "@chakra-ui/react";
import { postSignUp } from "components/Api/Sign";
import SignForm from "components/Sign/SignForm";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SighUp = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = window.localStorage.getItem("access_token");
    if (token) {
      navigate("/todo");
    }
  }, [navigate]);

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = (e.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value;
    const isSuccess = await postSignUp({ email, password });
    if (isSuccess) {
      navigate("/signin");
    }
  };

  return (
    <Container maxW={"50%"}>
      <Grid justifyItems="center">
        <SignForm title={"회원가입"} onSubmit={submitHandler} />
      </Grid>
    </Container>
  );
};

export default SighUp;
