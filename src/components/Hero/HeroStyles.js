import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const Img = styled.img`
  height: 240px;
  width: 250px;
  overflow: hidden;
  object-fit: cover;
  border-radius: 10px;
  margin-top: 60px;
  margin-right: 10px;

`

export const WhiteLink = styled.a`
  border-radius: 5px;
  padding: 0 10px 0 10px;
  cursor: pointer;
  margin: 0 10px 0 10px;
  border: 1px solid rgba(255, 255, 255, 0.66);
  transition: border 0.2s
  box-shadow: inset 0 0 0 0 #54b3d6;

  &:hover {
    border: 1px solid white;
  }
`;