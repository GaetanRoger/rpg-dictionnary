import React, { useState, useEffect } from 'react';
import { CSSProperties } from '@material-ui/styles';
import posed from 'react-pose';
import { Container, Typography } from '@material-ui/core';
import SplitText from 'react-pose-text';

const charPoses = {
  exit: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    delay: (e: any) => e.charIndex * 30
  }
};

type BigLoaderProps = {
  text?: string;
}

const G = posed.g({
  hidden: {
    fill: '#7B8DF1',
    transition: {
      duration: 500
    },
    strokeWidth: 0,
  },
  visible: {
    fill: '#3F51B5',
    transition: {
      duration: 500
    },
    width: 100,
    strokeWidth: 0.5,
  }
});

export function FullScreenLoader(props: BigLoaderProps) {
  const [animationState, setAnimationState] = useState<boolean>(true);



  useEffect(() => {
    const interval = setInterval(() => {
      console.log('t')
      setAnimationState(currAnimationState => !currAnimationState);
    }, 1000);
    return () => clearInterval(interval);
  }, []);


  return (
    <div>
      <Container maxWidth='lg' style={containerStyle}>
        {/* <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
          width="200" height="300"
          viewBox="0 0 25 25" preserveAspectRatio='true'>
          <g strokeWidth="0" stroke="#3F51B5">
            <Path pose={animationState ? 'visible' : 'hidden'}
              d="M12 9c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 8.55C9.64 9.35 6.48 8 3 8v11c3.48 0 6.64 1.35 9 3.55 2.36-2.19 5.52-3.55 9-3.55V8c-3.48 0-6.64 1.35-9 3.55zm7 5.58c-2.53.34-4.93 1.3-7 2.82-2.06-1.52-4.47-2.49-7-2.83v-6.95c2.1.38 4.05 1.35 5.64 2.83L12 14.28l1.36-1.27c1.59-1.48 3.54-2.45 5.64-2.83v6.95z">
            </Path>
          </g>
        </svg> */}
        <svg version="1.1" id="Capa_1" xmlns='http://www.w3.org/2000/svg'  xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px" y="0px" 
          width="100px" height="100px" viewBox="0 0 44.086 44.086" 
          // style="enable-background:new 0 0 44.086 44.086;"
          xmlSpace="preserve">
            <G pose={animationState ? 'visible' : 'hidden'}>
              <path d="M9.342,38.157c-0.093,0-0.169-0.076-0.169-0.169v-2.371H8.354c-0.657,0-1.269-0.12-1.833-0.367v2.679
                c0,1.54,1.061,2.994,2.652,2.994c0.514,0,2.314,0,2.314,0v-2.766H9.342z"/>
              <path d="M34.595,34.984c-0.495,1.816-2.141,3.173-4.111,3.173H21.93v2.766h8.554c3.926,0,7.082-3.149,7.082-7.078v-0.823
                C36.776,33.852,35.717,34.531,34.595,34.984z"/>
              <path d="M31.18,0H8.355C7.352,0,6.521,0.785,6.521,1.787v29.191c0,1.002,0.831,1.815,1.834,1.815H31.18
                c3.526,0,6.386-2.86,6.386-6.392V6.364C37.565,2.834,34.706,0,31.18,0z"/>
              <path d="M13.407,43.521c0,0.211,0.102,0.407,0.292,0.504c0.08,0.041,0.158,0.061,0.246,0.061c0.116,0,0.229-0.037,0.328-0.109
                l2.075-1.529c0.1-0.072,0.214-0.11,0.333-0.11s0.235,0.038,0.335,0.11l2.077,1.529c0.098,0.072,0.215,0.109,0.333,0.109
                c0.088,0,0.184-0.02,0.266-0.061c0.19-0.098,0.319-0.293,0.319-0.504v-7.904h-6.604V43.521z"/>
            </G>
          </svg>

        <Typography variant="overline" display="block" gutterBottom style={{marginTop: '10px'}}>
          <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
            {props.text}
          </SplitText>
        </Typography>
      </Container>


    </div>

  )

}


const containerStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  background: '#F0F0F0'
};


