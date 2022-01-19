import React, { useEffect, useRef, useState } from "react";
import { ReactComponent as Arrow } from "../images/arrow.svg";
import sliderArray from "./SliderArray";
const Slider = () => {
  const sliderTrack = useRef();
  const sliderDiv = useRef();
  const controller = useRef();
  const prev = useRef();
  const next = useRef();

  useEffect(() => {
    const sliderTrackHeight = sliderTrack.current.offsetHeight;
    console.log(sliderTrackHeight);
    controller.current.style.height = sliderTrackHeight / 6 + "px";
    makeClone();
    initfunction();
  }, []);

  function makeClone() {
    let cloneSlideFirst = sliderTrack.current.childNodes[0].cloneNode(true);
    let cloneSlideLast = sliderTrack.current.lastElementChild.cloneNode(true);
    sliderTrack.current.append(cloneSlideFirst);
    sliderTrack.current.insertBefore(
      cloneSlideLast,
      sliderTrack.current.firstElementChild
    );
  }

  function initfunction() {
    const trackCHildCount = sliderTrack.current.childElementCount;
    console.log(trackCHildCount);
    const sliderDivWid = sliderDiv.current.clientWidth;
    sliderTrack.current.style.width = trackCHildCount * sliderDivWid + "px";
    console.log(sliderTrack.current.style.width);
    sliderTrack.current.style.left = -sliderDivWid + "px";
    console.log(sliderTrack.current.style.left);
  }

  useEffect(() => {
    sliderTrack.current.style.left =
      -(sliderDiv.current.clientWidth / 2) + "px";
  });

  useEffect(() => {
    let currentIdx = 0;
    let slideCount = sliderTrack.current.childElementCount;
    const sliderDivWid = sliderDiv.current.clientWidth;
    // 다음 버튼
    next.current.addEventListener("click", function () {
      console.log("test");
      // currentIdx가 작을 때
      if (currentIdx <= slideCount - 3) {
        sliderTrack.current.style.left =
          -(currentIdx + 2) * sliderDivWid + sliderDivWid / 2 + "px";
        console.log(sliderTrack.current.style.left);
        sliderTrack.current.style.transition = `${0.5}s ease-out`;
      }
      // 마지막 슬라이드 일 때
      if (currentIdx == slideCount - 3) {
        setTimeout(function () {
          sliderTrack.current.style.left =
            -sliderDivWid + sliderDivWid / 2 + "px";
          sliderTrack.current.style.transition = `${0}s ease-out`;
        }, 500);
        currentIdx = -1;
      }
      currentIdx += 1;
    });
    // 이전 버튼
    prev.current.addEventListener("click", function () {
      console.log(currentIdx);
      if (currentIdx >= 0) {
        sliderTrack.current.style.left =
          -currentIdx * sliderDivWid + sliderDivWid / 2 + "px";
        sliderTrack.current.style.transition = `${0.5}s ease-out`;
      }
      if (currentIdx == 0) {
        setTimeout(function () {
          sliderTrack.current.style.left =
            -(slideCount - 1) * sliderDivWid + sliderDivWid / 2 + "px";
          sliderTrack.current.style.transition = `${0}s ease-out`;
        }, 500);
        currentIdx = slideCount;
      }
      currentIdx -= 1;
    });

    setInterval(() => {
      if (currentIdx <= slideCount - 3) {
        sliderTrack.current.style.left =
          -(currentIdx + 2) * sliderDivWid + sliderDivWid / 2 + "px";
        console.log(sliderTrack.current.style.left);
        sliderTrack.current.style.transition = `${0.5}s ease-out`;
      }
      // 마지막 슬라이드 일 때
      if (currentIdx == slideCount - 3) {
        setTimeout(function () {
          sliderTrack.current.style.left =
            -sliderDivWid + sliderDivWid / 2 + "px";
          sliderTrack.current.style.transition = `${0}s ease-out`;
        }, 500);
        currentIdx = -1;
      }
      currentIdx += 1;
    }, 4000);
  }, []);
  return (
    <>
      <div className="slider">
        <div className="sliderTrack" ref={sliderTrack}>
          {sliderArray.map((el, idx) => {
            return (
              <div className="sliderDiv" key={idx} ref={sliderDiv}>
                <img src={el.url} alt="" />
                <div className="infoBox">
                  <div className="infoTop">
                    <h2>{el.title}</h2>
                    <p>{el.subTitle}</p>
                  </div>
                  <div className="infoBot">
                    <p>바로가기</p>
                    <Arrow color="#3366ff" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="controller" ref={controller}>
          <p className="prev" ref={prev}>
            <Arrow />
          </p>
          <p className="next" ref={next}>
            <Arrow />
          </p>
        </div>
      </div>
    </>
  );
};

export default Slider;
