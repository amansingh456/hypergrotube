import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";

import { useToast } from "@chakra-ui/react";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";
import styled from "styled-components";
import Loader from "../components/Loader";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
   const [page, setPage] = useState<number>(1);
   const [allData, setAllData] = useState<any[]>([]);
   const [loading, setLoading] = useState<boolean>(true);
  
   const toast = useToast();

   const getData = async (arg = {}) => {
      await axios.get(` https://internship-service.onrender.com/videos?page=${page}`)
         .then((res) => {
            setAllData(res.data.data.posts);
            setTimeout(()=>{
               setLoading(false)
            },1000)
         })
         .catch((err) => {
            console.log(err);
            setLoading(true)
         });
   };

   const handleLeftArrow = () => {
      if (page === 1) {
         toast({
            title: "Warning",
            description: "minimum page limit reached ..!",
            status: "info",
            duration: 3000,
            isClosable: true,
            position: "bottom-right",
         });
         return;
      }
      setPage((prev) => prev - 1);
   };

   const handleRightArrow = () => {
      if (page === 9) {
         toast({
            title: "Warning",
            description: "maximum page limit reached ..!",
            status: "info",
            duration: 3000,
            isClosable: true,
            position: "bottom-right",
         });
         return;
      }
      setPage((prev) => prev + 1);
   };

   useEffect(() => {
      getData();
   }, [page]);

   return (
      <>
         <Container className="grid gap-5 py-5">
            { !loading && allData?.map((item) => <Card key={item.postId} desc={item.submission.description} vidUrl={item.submission.mediaUrl} thumbnail={item.submission.thumbnail} id={item.postId} title={item.submission.title} name={item.creator.handle} pic={item.creator.pic} />)}
         </Container>
         {loading && <Loader/>}
         <div className="flex items-center justify-center gap-3 mt-6 sm:mt-8 md:mt-5 lg:mt-5">
            <div onClick={handleLeftArrow} className="px-2 py-1 border border-red-600 text-red-600 rounded-lg font-semibold flex items-center gap-5 text-2xl cursor-pointer">
               <FaLongArrowAltLeft />
            </div>
            <div className="px-2 border-2 border-red-600 text-red-600 rounded-full font-semibold flex items-center gap-5 text-2xl cursor-pointer">{page}</div>
            <div onClick={handleRightArrow} className="px-2 py-1 border border-red-600 text-red-600 rounded-lg font-semibold flex items-center gap-5 text-2xl cursor-pointer">
               <FaLongArrowAltRight />
            </div>
         </div>
      </>
   );
};

export default Home;

const Container = styled.div`
  grid-template-columns: repeat(4, 1fr);
  
  @media all and (min-width: 950px) and (max-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }
  @media all and (min-width: 650px) and (max-width: 951px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
  @media all and (min-width: 260px) and (max-width: 651px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 30px;
    padding: 0 0px;
  }
`;
