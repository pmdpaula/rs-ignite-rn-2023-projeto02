import styled, { css } from 'styled-components/native';

export const Form = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};

  flex-direction: row;
  justify-content: center;

  border-radius: 6px;
`;

export const HeaderList = styled.View`
  width: 100%;

  flex-direction: row;
  /* justify-content: space-between; */
  align-items: center;

  margin: 32px 0 12px;
`;

export const NumberOfPlayers = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`;