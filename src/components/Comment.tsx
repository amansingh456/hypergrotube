import React from "react";
import styled from "styled-components";


interface CommentProps {
   pic: string;
   creatorName: string;
   allComment: string[]
}



const Comment: React.FC<CommentProps> = ({ pic, creatorName, allComment }) => {
   console.log(creatorName)
   return (
      <>
         {allComment?.map((cmnt, ind) => {
            return (
               <div className="flex gap-2 my-7" key={ind}> 
                  <img src={pic} alt="h" className="w-8 h-8 rounded-full"/>
                  <Details className="flex flex-col gap-2">
                     <span className="text-[14px] font-semibold">
                        {creatorName} <DateText className="text-[10px] ml-1">now</DateText>
                     </span>
                     <p className="text-[13px]">
                        {cmnt}
                     </p>
                  </Details>
               </div>
            )
         })}

      </>
   );
};

export default Comment;



const Details = styled.div`
  color: ${({ theme }) => theme.text};
`;


const DateText = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;

