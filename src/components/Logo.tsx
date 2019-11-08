
import React, {  } from 'react';
import posed from 'react-pose';


type LogoProps = {
    size?: string;
    variant?: 'standard' | 'light',
    color?: string,
}

const defaultProps: LogoProps = {
    size: '48px',
    variant: 'standard',
    color: '#3F51B5'
};


export function Logo(props: LogoProps) {
    props = {...defaultProps, ...props};
    const G = posed.g({
        light: {
          fill: '#7B8DF1',
          transition: {
            duration: 500
          },
          strokeWidth: 0,
        },
        standard: {
            fill: props.color,
          transition: {
            duration: 500
          },
          width: 100,
          strokeWidth: 0.5,
        }
      });


    return (
        <svg version="1.1" id="Capa_1" xmlns='http://www.w3.org/2000/svg'  xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px" y="0px" 
          width={props.size} height={props.size} viewBox="0 0 44.086 44.086" 
          // style="enable-background:new 0 0 44.086 44.086;"
          xmlSpace="preserve">
            <G pose={props.variant}>
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
    );
}