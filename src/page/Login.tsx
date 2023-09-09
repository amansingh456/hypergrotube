import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useAppState } from "../provider/StateProvider";
import styled from "styled-components";

const Login = () => {
   const [obj, setObj] = useState<{ [key: string]: string }>({});
   const [obj2, setObj2] = useState<{ [key: string]: string }>({});
   const toast = useToast();
   const navigate = useNavigate();
   const { setState } = useAppState();
   const tubeToken = localStorage.getItem("tubeToken") || "";

   const onLogin = async () => {
      if (!tubeToken) {
         if (obj2.email === undefined || obj2.password === undefined) {
            toast({
               title: "Warning",
               description: "Please fill all the details",
               status: "warning",
               duration: 5000,
               isClosable: true,
               position: "top-right",
            });
         } else {
            try {
               const {
                  data: { token },
               } = await axios.post(
                  "https://cute-rose-quail-robe.cyclic.app/api/login",
                  obj2
               );

               localStorage.setItem("tubeToken", token);
               toast({
                  title: "Success",
                  description: "Login Successful",
                  status: "success",
                  duration: 3000,
                  isClosable: true,
                  position: "top-right",
               });
               setState((prev:boolean) => !prev);
               navigate("/");
            } catch (error:any) {
               toast({
                  title: "Error",
                  description: error.message,
                  status: "error",
                  duration: 3000,
                  isClosable: true,
                  position: "top-right",
               });
            }
         }
      } else {
         toast({
            title: "Success",
            description: "You are already logged in, Please logged out first..!",
            status: "success",
            duration: 3000,
            isClosable: true,
            position: "top-right",
         });
      }
   };

   const onSignup = async () => {
      if (
         obj.email === undefined ||
         obj.password === undefined ||
         obj.username === undefined
      ) {
         console.log("1");
         toast({
            title: "Warning",
            description: "Please fill all the details",
            status: "warning",
            duration: 5000,
            isClosable: true,
            position: "top-right",
         });
      } else {
         try {
            const { data } = await axios.post(
               "https://cute-rose-quail-robe.cyclic.app/api/register",
               obj
            );
            toast({
               title: "Success",
               description: "User registered successfully",
               status: "success",
               duration: 5000,
               isClosable: true,
               position: "top-right",
            });
            navigate("/");
         } catch (error:any) {
            toast({
               title: "Error",
               description: error.message,
               status: "error",
               duration: 5000,
               isClosable: true,
               position: "top-right",
            });
         }
      }
   };

   return (
      <Container className="flex flex-col items-center justify-center">
      <Wrapper className="flex flex-col items-center py-4 px-14 mr-5 gap-2.5">
         <h1 className="text-2xl">Log In</h1>
         <Input className="bg-transparent rounded-sm p-3 w-full" placeholder="email" type="email" name="email" onChange={(e) => setObj2({ ...obj2, [e.target.name]: e.target.value })} />
         <Input className="bg-transparent rounded-sm p-3 w-full" type="password" placeholder="password" name="password" onChange={(e) => setObj2({ ...obj2, [e.target.name]: e.target.value })} />
         <Button className="rounded-3 border-none px-2 py-1 font-semibold cursor-pointer" onClick={onLogin}>Log In</Button>
         <h1 className="text-2xl"> || </h1>
         <h1 className="text-2xl">Sign Up</h1>
         <Input className="bg-transparent rounded-sm p-3 w-full" placeholder="username" type="text" name="username" onChange={(e) => setObj({ ...obj, [e.target.name]: e.target.value })} />
         <Input className="bg-transparent rounded-sm p-3 w-full" placeholder="email" type="email" name="email" onChange={(e) => setObj({ ...obj, [e.target.name]: e.target.value })} />
         <Input className="bg-transparent rounded-sm p-3 w-full" type="password" placeholder="password" name="password" onChange={(e) => setObj({ ...obj, [e.target.name]: e.target.value })} />
         <Button className="rounded-3 border-none px-2 py-1 font-semibold cursor-pointer" onClick={onSignup}>Sign Up</Button>
      </Wrapper>
      <More className="flex mt-7 mr-5 text-sm">
         India(USA)
         <div className="ml-12.5">
            <span className="ml-7">Help</span>
            <span className="ml-7">Privacy</span>
            <span className="ml-7">Terms</span>
         </div>
      </More>
   </Container>
   );
};

export default Login;

const Container = styled.div`
  color: ${({ theme }) => theme.text};
`;

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.bgLighter};
  border: 1px solid ${({ theme }) => theme.soft};
`;

const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
`;

const More = styled.div`
  color: ${({ theme }) => theme.textSoft};
`;

