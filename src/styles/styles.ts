import styled from 'styled-components';

function pixelToRem(...values: number[]) {
  return values
    .reduce((acc, current) => (acc += current / 16 +`rem `), "")
    .trim();
}

export const Header = styled.div`
  display: flex;
  width: 100%;
`;

export const Logo = styled.div`
  width: ${pixelToRem(201)};
  height: ${pixelToRem(81)};  
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FirstTitle = styled.p`
  color: var(--sun);
  font-size: var(--text-3);
  text-transform: uppercase;
`;

export const SecondTitle = styled.p`
  color: var(--text);
  font: var(--font-display)
`;

export const Subtitle = styled.p`
  color: var(--gray-05);
  font: var(--font-heading-3)
`;