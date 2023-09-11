import React from "react";
import styled from "styled-components";


interface CommentProps {
   pic: string;
   creatorName: string;
   allComment: string[]
}



const Comment: React.FC<CommentProps> = ({ pic, creatorName, allComment }) => {
   return (
      <>
         {allComment?.map((cmnt, ind) => {
            return (
               <Container>
                  <Avatar src={pic} />
                  <Details>
                     <Name>
                        {creatorName} <DateText>now</DateText>
                     </Name>
                     <Text>
                        {cmnt}
                     </Text>
                  </Details>
               </Container>
            )
         })}

      </>
   );
};

export default Comment;


const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.text};
`;

const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`;

const DateText = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;

const Text = styled.span`
  font-size: 14px;
`;