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

const Path = posed.path({
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
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
          width="200" height="300"
          viewBox="0 0 25 25" preserveAspectRatio='true'>
          <g strokeWidth="0" stroke="#3F51B5">
            <Path pose={animationState ? 'visible' : 'hidden'}
              d="M12 9c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 8.55C9.64 9.35 6.48 8 3 8v11c3.48 0 6.64 1.35 9 3.55 2.36-2.19 5.52-3.55 9-3.55V8c-3.48 0-6.64 1.35-9 3.55zm7 5.58c-2.53.34-4.93 1.3-7 2.82-2.06-1.52-4.47-2.49-7-2.83v-6.95c2.1.38 4.05 1.35 5.64 2.83L12 14.28l1.36-1.27c1.59-1.48 3.54-2.45 5.64-2.83v6.95z">
            </Path>
          </g>
        </svg>
        <Typography variant="overline" display="block" gutterBottom>
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


