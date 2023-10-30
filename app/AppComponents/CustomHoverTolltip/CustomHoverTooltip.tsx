import styled from '@emotion/styled';
import { TooltipProps, Tooltip, tooltipClasses } from '@mui/material';
import React from 'react'

const CustomHoverTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />

  ))({
    [`& .${tooltipClasses.tooltip}`]: {
      position:"absolute",
        zIndex:"50",
        padding:"10px 20px",
        borderRadius:"10px",
        backgroundColor:"#7C35F1",
        width:"fit-content",
        maxWidth:200,
        fontSize:"16px",
        color:"#EBEDFC",
        fontWeight:"bold",
        fontFamily:"sans-serif",
    },
  });
  

export default CustomHoverTooltip
