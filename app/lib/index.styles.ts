import styled from "styled-components";

export const StyledContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.m};
  border: 2px dashed rebeccapurple;

  > * + * {
    margin-top: ${({ theme }) => theme.spacing.xs};
  }
`;
