import styled from 'styled-components';

import pixelToRem from '../utils/pxToRem';

interface GalleryFlexContainerProps {
  flex?: "row" | "column";
  width?: string;
  margin?: string;
  padding?: string;
  alignItems?: "flex-start" | "flex-end" | "center" | "stretch";
  justifyContent?:
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly";
}

export const Container = styled.div<GalleryFlexContainerProps>`
  display: flex;
  flex-direction: ${(props) => props.flex};
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};   
`;

export const Header = styled.div`
  display: flex;
  padding-bottom:${pixelToRem(95)};
`;

export const Logo = styled.image<GalleryFlexContainerProps>`
  width: ${pixelToRem(201)};
  height: ${pixelToRem(41)};
  background-image: url("/images/logo.svg");
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${pixelToRem(815)};
  padding-bottom: ${pixelToRem(103)} ;
`;

export const FirstTitle = styled.div`
  color: var(--sun);
  font: var(--text-4);
  text-transform: uppercase;
  letter-spacing: ${pixelToRem(5)};
`;

export const SecondTitle = styled.p`
  color: var(--text);
  font: var(--font-display);
  
  span {
    color: var(--mars);
  }
`;

export const Subtitle = styled.p`
  color: var(--gray-05);
  font: var(--font-heading-3);
  max-width: ${pixelToRem(728)};
`;

export const AstrounautIllustration = styled.image`
  width: ${pixelToRem(472)};
  height: ${pixelToRem(600)};
  position: absolute;
  background-image: url('/images/home-mars-right.svg');
  background-repeat: no-repeat;
  right: 0;
  top: ${pixelToRem(10)};  
`;

export const DivButton = styled.div`
  width: ${pixelToRem(264)};
  padding-top: ${pixelToRem(32)};
`;

export const DivIcons = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: ${pixelToRem(1440)};
  align-items: center;
  
`;

export const SectionAbout = styled.div<GalleryFlexContainerProps>`
  display: flex;
  justify-content: center;
  flex-direction: ${(props) => props.flex};  
`;

export const ImageMars = styled.div`
  width: ${pixelToRem(621)};
  height: ${pixelToRem(621)};
  background-image: url('/images/Mars.svg');
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
`;

export const DivAboutMars = styled.div<GalleryFlexContainerProps>`
  max-width: ${pixelToRem(603)};
`;

export const SecondSubTitle = styled.div`
  font: var(--font-heading-1);
  color: var(--text);
  padding-top: ${pixelToRem(14)};
`;

export const TextMars = styled.div`
  font: var(--text-1);
  color: var(--gray-05);
  padding-top: ${pixelToRem(26)};
`;

export const ContainerAbout = styled.div<GalleryFlexContainerProps>`
  display: flex;
  flex-direction: ${(props) => props.flex};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  width: ${(props) => props.width};
  margin-top: ${pixelToRem(180)};
  gap: ${pixelToRem(200)};
`;
