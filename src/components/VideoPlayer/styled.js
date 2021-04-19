import styled from "styled-components"
import { withStyles } from '@material-ui/core/styles'
import Slider from '@material-ui/core/Slider'
import PlayImg from '../../Videos/PlayButton.png'

export const VideoContainer = styled.div`
  height: 156px;
  width: 100%;
`;

export const PlayButton = styled.div`
background-image: url(${PlayImg});
background-repeat: no-repeat;
background-position-x: center;
width: 100%;
height: 100%;
`;

export const ControlsWrapper = styled.div`
    color: #FFC558;
    height: 20px;
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 5px 0 9%;
    z-index: 1;
`;

export const PrettoSlider = withStyles({
    root: {
      color: '#FFC558',
      height: 1,
      width: 210,
      alignSelf: "center"
    },
    thumb: {
      height: 0,
      width: 0,
      backgroundColor: '#FFC558',
      marginTop: 0,
      marginLeft: -12,
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    track: {
      height: 2,
      borderRadius: 4,
      backgroundColor: "FFFFFF"
    },
    rail: {
      height: 2,
      borderRadius: 4,
    },
  })(Slider);

  export const TimeElapsed = styled.h5`
    color: white;
    display: inline;
    font-weight: 400;
    font-size: 0.8rem;
    margin-right: 10%;
  `;