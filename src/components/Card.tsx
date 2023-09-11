import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface CardProps {
  type?: any;
  id: string;
  title: string;
  name: string;
  pic: string;
  thumbnail: string;
  vidUrl: string;
  desc: string;
  creatorName:string;
}

const Card: React.FC<CardProps> = ({ type, id, title, name, pic, thumbnail, vidUrl, desc, creatorName }) => {
  const navigate = useNavigate();

  const handleProceed = () => {
    navigate(`/video/${id}`, { state: { vidUrl, name, pic, title, desc, creatorName } });
  };

  return (
    <>
      <Container onClick={handleProceed} className="cursor-pointer gap-2.5 rounded-md pb-1" >
        <Image src={thumbnail} alt={"creator_pic"} className="w-full object-contain h-56 sm:h-56 rounded-md"/>
        <div className="flex mt-4 gap-3 flex-1 ml-2.5">
          <ChannelImage className="w-9 h-9 rounded-full" src={pic} alt="channel_img" />
          <div>
            <Title className="text-4 font-semibold ">{title}</Title>
            <ChannelName className="text-3 mb-2">{name}</ChannelName>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Card;

const Container = styled.div`
  box-shadow: 0px 2px 10px 0px ${({ theme }) => theme.text};
  transition: transform 0.6s, box-shadow 0.3s;
  height: 300px;
  &:hover {
    transform: scale(1.01);
    box-shadow: 0px 5px 15px ${({ theme }) => theme.text};
  }
`;
const Image = styled.img`
   background-color: ${({theme})=>theme.textSoft};
   flex: 1;
  
`;
const ChannelImage = styled.img`
  background-color: ${({theme})=>theme.text};
  
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  color: ${({ theme }) => theme.textSoft};
`;