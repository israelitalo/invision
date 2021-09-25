import styled from 'styled-components';
import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  root: {
    fontFamily: 'Mulish, sans-serif',
    fontWeight: 700,
  }
}));

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & + div {
    margin-top: 1rem;
  }
`;