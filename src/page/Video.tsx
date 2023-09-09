import React from "react";
import { useLocation } from "react-router-dom";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { BsReplyAll } from "react-icons/bs";
import { BiAddToQueue } from "react-icons/bi";
import styled from "styled-components";

interface VideoProps {
  title: string;
  pic: string;
  name: string;
  desc: string;
  vidUrl: string;
}

const Video: React.FC = () => {
  const location = useLocation();
  const state = location.state as VideoProps;

  if (!state) {
    return <div>Video not found</div>;
  }

  const { title, pic, name, desc, vidUrl } = state;

  return (
   <div className="flex gap-6">
   <div>
     <div>
     <iframe
            width={"100%"}
            height={"570px"}
            src={vidUrl}
            title="HyperGroTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          ></iframe>
     </div>
     <Title className="text-md font-semibold mt-5 mb-2.5">{title}</Title>
     <div className="flex items-center justify-between">
       <Info>7,948,154 views • Jun 22, 2022</Info>
       <Buttons className="flex gap-5">
         <button className="flex items-center gap-2 cursor-pointer">
           <AiOutlineLike /> 123
         </button>
         <button className="flex items-center gap-2 cursor-pointer">
           <AiOutlineDislike /> Dislike
         </button>
         <button className="flex items-center gap-2 cursor-pointer">
           <BsReplyAll /> Share
         </button>
         <button className="flex items-center gap-2 cursor-pointer">
           <BiAddToQueue /> Save
         </button>
       </Buttons>
     </div>
     <Hr  className="my-4"  />
     <div className="flex justify-between">
       <div className="flex gap-5">
         <img className="w-12 h-12 rounded-full" alt="h" src={pic} />
         <ChannelDetail className="flex flex-col">
           <span className="font-semibold">{name}</span>
           <p className="text-sm">
            {desc}
           </p>
         </ChannelDetail>
       </div>
     </div>
     <Hr className="my-4" />
   </div>
 </div>
  );
};

export default Video;


const Title = styled.h1`
  color: ${({ theme }) => theme.text};
`;


const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div`
  color: ${({ theme }) => theme.text};
`;

const Hr = styled.hr`
  border: 0.5px solid ${({ theme }) => theme.soft};
`;


const ChannelDetail = styled.div`
  color: ${({ theme }) => theme.text};
`;
