import React, { useState } from 'react';
import styled from 'styled-components';


const Video = ()=>{
    /* function playPause() { 
        if (myVideo.paused) 
          myVideo.play(); 
        else 
          myVideo.pause(); 
      }  */

      const [showPlay,SetShowPlay]= useState(false)

      const handleClickPlay =()=>{
        SetShowPlay(!showPlay)
      } 

    return(
        <BoxContent>
          <div className="container">
            <video autoPlay /* poster="./images/home/imgvideo.jpg" */ onClick={handleClickPlay} controls muted  loop> 
                <source src="./images/home/FSH-1620144927828-chanelcruise2022showhpcollectionhd.mp4" type="video/mp4" />
                Your browser does not support HTML video.
            </video>
            {/* {showPlay
            ?
                ""
            :
                <svg version="1.1"  id="play" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" height="100px" width="100px" viewBox="0 0 100 100" enableBackground="new 0 0 100 100" xmlSpace="preserve">
                    <path className="stroke-solid" fill="none" stroke="#fff" d="M49.9,2.5C23.6,2.8,2.1,24.4,2.5,50.4C2.9,76.5,24.7,98,50.3,97.5c26.4-0.6,47.4-21.8,47.2-47.7
                    C97.3,23.7,75.7,2.3,49.9,2.5" />
                    <path className="icon" fill="#fff" d="M38,69c-1,0.5-1.8,0-1.8-1.1V32.1c0-1.1,0.8-1.6,1.8-1.1l34,18c1,0.5,1,1.4,0,1.9L38,69z" />
                </svg>  
            } */}
                
          </div>

        </BoxContent>
    );
}

const BoxContent = styled.div`
    position: relative;

    #play {
        cursor: pointer;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateY(-50%) translateX(-50%);
    }

    @keyframes spin {
    to { transform: rotate(360deg); }
  }

  .stroke-solid {
    stroke-dashoffset: 0;
    stroke-dashArray: 300;
    stroke-width: 4px;
    transition: stroke-dashoffset 1s ease, 
                opacity 1s ease;
  }

  .icon {
    transform: scale(.8);
    transform-origin: 50% 50%;
    transition: transform 200ms ease-out;
  }

  // Hover
  #play:hover {
    .stroke-solid {
      opacity: 1;
      stroke-dashoffset: 300;
    }
    .icon {
      transform: scale(.9);
    }
  }

    video{
        width: 100%;
        height: 100%;
        position: relative;

        svg{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
        }
    }
`

export default Video