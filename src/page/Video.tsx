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
   <Container>
   <Content>
     <VideoWrapper>
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
     </VideoWrapper>
     <Title>{title}</Title>
     <Details>
       <Info>7,948,154 views • Jun 22, 2022</Info>
       <Buttons>
         <Button>
           <AiOutlineLike /> 123
         </Button>
         <Button>
           <AiOutlineDislike /> Dislike
         </Button>
         <Button>
           <BsReplyAll /> Share
         </Button>
         <Button>
           <BiAddToQueue /> Save
         </Button>
       </Buttons>
     </Details>
     <Hr />
     <Channel>
       <ChannelInfo>
         <Image src={pic} />
         <ChannelDetail>
           <ChannelName>{name}</ChannelName>
           <Description>
            {desc}
           </Description>
         </ChannelDetail>
       </ChannelInfo>
     </Channel>
     <Hr />
   </Content>
 </Container>
  );
};

export default Video;


const Container = styled.div`
  display: flex;
  gap: 24px;
`;

const Content = styled.div`
`;
const VideoWrapper = styled.div``;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;


const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.span`
  font-weight: 500;
`;



const Description = styled.p`
  font-size: 14px;
`;

