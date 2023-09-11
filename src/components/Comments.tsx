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

   // console.log(allComment)

   return (
      <Container>
         <NewComment>
            <Avatar src={pic} />
            <Input placeholder="Add a comment..." value={com} onChange={(e) => setCom(e.target.value)} />
            <BiSolidSend onClick={handleComments} />
         </NewComment>
         <Comment pic={pic} creatorName={creatorName} allComment={allComment}/>
      </Container>
   );
};

export default Comments;

const Container = styled.div``;

const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  outline: none;
  padding: 5px;
  width: 100%;
`;