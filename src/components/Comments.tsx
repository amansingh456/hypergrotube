import React, { useState } from "react";
import styled from "styled-components";
import Comment from "./Comment";
import { BiSolidSend } from "react-icons/bi"

interface CommentsProps {
   pic: string;
   creatorName: string
}

const Comments: React.FC<CommentsProps> = ({ pic, creatorName }) => {
   const [com, setCom] = useState<string>("")


   const storedData = localStorage.getItem("allComment");
   let allComment: string[] = [];

   if (storedData) {
      try {
         allComment = JSON.parse(storedData);
         if (!Array.isArray(allComment)) {
            allComment = [];
         }
      } catch (error) {
         console.error("Error parsing data from localStorage:", error);
      }
   }

   const handleComments = () => {
      allComment.push(com)
      localStorage.setItem("allComment", JSON.stringify(allComment))
      setCom("")
   }

   return (
      <Container>
         <div className="flex items-center gap-2.5">
            <Input className="border-0 outline-none p-1 w-full bg-transparent" placeholder="Add a comment..." value={com} onChange={(e) => setCom(e.target.value)} />
            <Div className="text-[30px]">
               <BiSolidSend onClick={handleComments} />
            </Div>
         </div>
         <Comment pic={pic} creatorName={creatorName} allComment={allComment} />
      </Container>
   );
};

export default Comments;

const Container = styled.div``;

const Input = styled.input`
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
`;
const Div = styled.div`
   background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
   &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`