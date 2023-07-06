import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const FitnessLandingPage: NextPage = () => {
  const router = useRouter();

  const onLogoClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onExercisesClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='popularExercisesSection']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onTrainers1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='trainers']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onPricingClick = useCallback(() => {
    // Please sync "Page 2" to the project
  }, []);

  const onLoginClick = useCallback(() => {
    // Please sync "Page 2" to the project
  }, []);

  const onButtonClick = useCallback(() => {
    // Please sync "Page 2" to the project
  }, []);

  const onButton1Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='popularExercisesSection']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onButton2Click = useCallback(() => {
    // Please sync "Page 2" to the project
  }, []);

  const onButton3Click = useCallback(() => {
    // Please sync "Page 2" to the project
  }, []);

  return (
   <><div className="relative bg-black w-full flex flex-col items-start justify-start text-left text-3xs text-white font-poppins">
      <div className="self-stretch flex flex-col py-[53px] px-[120px] items-start justify-start lg:pl-[60px] lg:pr-[60px] lg:box-border md:pl-10 md:pr-10 md:box-border sm:py-[30px] sm:px-5 sm:box-border">
        <div className="self-stretch flex flex-row items-center justify-between">
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-lg tracking-[1px] leading-[22px] font-semibold font-poppins text-white text-left inline-block"
            onClick={onLogoClick}
          >
            WORKOUT
          </button>
          <div className="flex flex-row items-start justify-start gap-[10px]">
            <div className="flex flex-row items-start justify-start gap-[50px] md:hidden">
              <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-xs tracking-[1.5px] leading-[12px] font-poppins text-white text-left inline-block opacity-[0.67]"
                onClick={onExercisesClick}
              >
                EXERCISES
              </button>
              <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-xs tracking-[1.5px] leading-[12px] font-poppins text-white text-left inline-block opacity-[0.67]"
                onClick={onTrainers1Click}
              >
                TRAINERS
              </button>
              <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-xs tracking-[1.5px] leading-[12px] font-poppins text-white text-left inline-block opacity-[0.67]"
                onClick={onPricingClick}
              >
                PRICING
              </button>
              <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-xs tracking-[1.5px] leading-[12px] font-poppins text-white text-left inline-block opacity-[0.7]"
                onClick={onLoginClick}
              >
                LOGIN
              </button>
            </div>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-8 h-8 overflow-hidden shrink-0 hidden md:flex">
              <img
                className="absolute h-[46.88%] w-[63.55%] top-[26.56%] right-[18.23%] bottom-[26.56%] left-[18.23%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/group2.svg"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="self-stretch overflow-hidden flex flex-row py-[41px] pr-0 pl-[120px] items-center justify-center lg:flex-col lg:pl-[60px] lg:box-border md:pl-10 md:box-border sm:pl-5 sm:box-border">
        <div className="flex-1 flex flex-col pt-0 px-0 pb-[86px] items-start justify-start gap-[31px] z-[2] lg:flex-[unset] lg:self-stretch">
          <div className="relative w-[329px] h-9">
            <div className="absolute top-[0px] left-[0px] rounded-181xl bg-white w-[329px] h-9 opacity-[0.1]" />
            <div className="absolute top-[5px] left-[5px] rounded-181xl bg-mediumseagreen w-[46px] h-[26px]" />
            <div className="absolute top-[9px] left-[15px] tracking-[1.5px] leading-[18px] font-semibold">
              NEW
            </div>
            <div className="absolute top-[9px] left-[66px] text-xs tracking-[0.5px] leading-[18px] opacity-[0.8] sm:text-3xs sm:leading-[16px]">
              High Intensity workout to burn calories
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[46px] text-[200px]">
            <div className="self-stretch relative tracking-[-2px] leading-[170px] font-semibold lg:text-[150px] lg:leading-[130px] md:text-[100px] md:leading-[80px] sm:text-41xl sm:leading-[48px]">
              <p className="m-0">{`Cardio `}</p>
              <p className="m-0">Exercise</p>
            </div>
            <div className="relative text-base tracking-[0.5px] leading-[29px] inline-block w-[600px] opacity-[0.5] md:max-w-[90%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div className="w-[430px] flex flex-row items-start justify-start gap-[30px] md:max-w-[90%]">
              <button
                className="cursor-pointer [border:none] py-6 px-2.5 bg-mediumseagreen flex-1 rounded-3xs flex flex-row items-center justify-center hover:bg-seagreen"
                onClick={onButtonClick}
              >
                <div className="relative text-lg tracking-[1px] leading-[22px] font-semibold font-poppins text-white text-left sm:text-mini sm:leading-[20px]">
                  Get Started
                </div>
              </button>
              <button
                className="cursor-pointer [border:none] py-6 px-2.5 bg-gray-200 flex-1 rounded-3xs flex flex-row items-center justify-center hover:bg-gray-100"
                onClick={onButton1Click}
              >
                <div className="relative text-lg tracking-[1px] leading-[22px] font-semibold font-poppins text-white text-left sm:text-mini sm:leading-[20px]">
                  Preview
                </div>
              </button>
            </div>
          </div>
        </div>
        <img
          className="relative w-[651px] h-[717px] object-cover ml-[-141px] lg:max-w-[90%] lg:h-auto lg:ml-0"
          alt=""
          src="/vector@2x.png"
        />
      </div>
      <div
        className="self-stretch flex flex-col pt-[41px] px-[120px] pb-[94px] items-start justify-start text-[35px] lg:pl-[60px] lg:pr-[60px] lg:box-border md:pl-10 md:pr-10 md:box-border sm:pl-5 sm:pr-5 sm:box-border"
        data-scroll-to="popularExercisesSection"
      >
        <div className="self-stretch flex flex-col items-start justify-start gap-[50px]">
          <div className="self-stretch flex flex-row items-end justify-between">
            <div className="relative tracking-[0.3px] leading-[45px] font-semibold">
              Popular Exercises
            </div>
            <div className="relative text-xs tracking-[1.5px] leading-[12px] text-right opacity-[0.67]">
              SEE MORE EXERCISES
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-center gap-[40px] text-31xl lg:flex-col sm:gap-[0]">
            <div className="flex flex-col items-center justify-center gap-[82px] lg:flex-row md:flex-col sm:[transform:scale(0.8)]">
              <div className="w-[373.33px] flex flex-col items-center justify-start">
                <img
                  className="relative w-[373px] h-[250px] object-cover"
                  alt=""
                  src="/cardimage@2x.png"
                />
                <div className="self-stretch flex flex-row py-0 pr-0 pl-5 items-start justify-between mt-[-30px]">
                  <div className="flex flex-col items-start justify-start gap-[15px]">
                    <div className="relative tracking-[0.3px] leading-[45px] font-semibold">
                      Treadmill
                    </div>
                    <div className="relative text-smi tracking-[0.5px] leading-[14px] opacity-[0.67]">{`250 est calories `}</div>
                  </div>
                  <div className="relative w-[72px] h-[29px] text-xl">
                    <img
                      className="absolute top-[0px] left-[0px] w-[72px] h-[29px]"
                      alt=""
                      src="/rectangle-10.svg"
                    />
                    <div className="absolute top-[10px] left-[10px] tracking-[1.37px] leading-[19px] font-semibold">
                      58:24
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[373.33px] flex flex-col items-center justify-start">
                <img
                  className="self-stretch relative max-w-full overflow-hidden h-[250px] shrink-0 object-cover"
                  alt=""
                  src="/image@2x.png"
                />
                <div className="self-stretch flex flex-row py-0 pr-0 pl-5 items-start justify-between mt-[-30px]">
                  <div className="flex flex-col items-start justify-start gap-[15px]">
                    <div className="relative tracking-[0.3px] leading-[45px] font-semibold">
                      Running
                    </div>
                    <div className="relative text-smi tracking-[0.5px] leading-[14px] opacity-[0.67]">{`250 est calories `}</div>
                  </div>
                  <div className="relative w-[72px] h-[29px] text-xl">
                    <img
                      className="absolute top-[0px] left-[0px] w-[72px] h-[29px]"
                      alt=""
                      src="/rectangle-10.svg"
                    />
                    <div className="absolute top-[10px] left-[10px] tracking-[1.37px] leading-[19px] font-semibold">
                      58:24
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-[82px] lg:flex-row md:flex-col sm:[transform:scale(0.8)]">
              <div className="w-[373.33px] flex flex-col items-start justify-start">
                <img
                  className="self-stretch relative max-w-full overflow-hidden h-[250px] shrink-0 object-cover"
                  alt=""
                  src="/cardimage1@2x.png"
                />
                <div className="self-stretch flex flex-row py-0 pr-0 pl-5 items-start justify-between mt-[-30px]">
                  <div className="flex flex-col items-start justify-start gap-[15px]">
                    <div className="relative tracking-[0.3px] leading-[45px] font-semibold">
                      Stretching
                    </div>
                    <div className="relative text-smi tracking-[0.5px] leading-[14px] opacity-[0.67]">{`250 est calories `}</div>
                  </div>
                  <div className="relative w-[72px] h-[29px] text-xl">
                    <img
                      className="absolute top-[0px] left-[0px] w-[72px] h-[29px]"
                      alt=""
                      src="/rectangle-101.svg"
                    />
                    <div className="absolute top-[10px] left-[10px] tracking-[1.37px] leading-[19px] font-semibold">
                      58:24
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[373.33px] flex flex-col items-center justify-start">
                <img
                  className="self-stretch relative max-w-full overflow-hidden h-[250px] shrink-0 object-cover"
                  alt=""
                  src="/group-6@2x.png"
                />
                <div className="self-stretch flex flex-row py-0 pr-0 pl-5 items-start justify-between mt-[-30px]">
                  <div className="flex flex-col items-start justify-start gap-[15px]">
                    <div className="relative tracking-[0.3px] leading-[45px] font-semibold">
                      Lifting
                    </div>
                    <div className="relative text-smi tracking-[0.5px] leading-[14px] opacity-[0.67]">{`250 est calories `}</div>
                  </div>
                  <div className="relative w-[72px] h-[29px] text-xl">
                    <img
                      className="absolute top-[0px] left-[0px] w-[72px] h-[29px]"
                      alt=""
                      src="/rectangle-101.svg"
                    />
                    <div className="absolute top-[10px] left-[10px] tracking-[1.37px] leading-[19px] font-semibold">
                      58:24
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-[82px] lg:flex-row md:flex-col sm:[transform:scale(0.8)]">
              <div className="w-[373.33px] flex flex-col items-start justify-start">
                <img
                  className="self-stretch relative max-w-full overflow-hidden h-[250px] shrink-0 object-cover"
                  alt=""
                  src="/group-61@2x.png"
                />
                <div className="self-stretch flex flex-row py-0 pr-0 pl-5 items-start justify-between mt-[-30px]">
                  <div className="flex flex-col items-start justify-start gap-[15px]">
                    <div className="relative tracking-[0.3px] leading-[45px] font-semibold">
                      Yoga
                    </div>
                    <div className="relative text-smi tracking-[0.5px] leading-[14px] opacity-[0.67]">{`250 est calories `}</div>
                  </div>
                  <div className="relative w-[72px] h-[29px] text-xl">
                    <img
                      className="absolute top-[0px] left-[0px] w-[72px] h-[29px]"
                      alt=""
                      src="/rectangle-102.svg"
                    />
                    <div className="absolute top-[10px] left-[10px] tracking-[1.37px] leading-[19px] font-semibold">
                      58:24
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[373.33px] flex flex-col items-center justify-start">
                <img
                  className="self-stretch relative max-w-full overflow-hidden h-[250px] shrink-0 object-cover"
                  alt=""
                  src="/group-62@2x.png"
                />
                <div className="self-stretch flex flex-row py-0 pr-0 pl-5 items-start justify-between mt-[-30px]">
                  <div className="flex flex-col items-start justify-start gap-[15px]">
                    <div className="relative tracking-[0.3px] leading-[45px] font-semibold">
                      Pushup
                    </div>
                    <div className="relative text-smi tracking-[0.5px] leading-[14px] opacity-[0.67]">{`250 est calories `}</div>
                  </div>
                  <div className="relative w-[72px] h-[29px] text-xl">
                    <img
                      className="absolute top-[0px] left-[0px] w-[72px] h-[29px]"
                      alt=""
                      src="/rectangle-102.svg"
                    />
                    <div className="absolute top-[10px] left-[10px] tracking-[1.37px] leading-[19px] font-semibold">
                      58:24
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="self-stretch flex flex-col py-[54px] px-0 items-center justify-start text-[120px]"
        data-scroll-to="trainers"
      >
        <div className="self-stretch overflow-hidden flex flex-row py-[100px] px-[90px] items-center justify-center lg:pb-[341px] lg:box-border md:pl-10 md:pr-10 md:box-border sm:pl-5 sm:pr-5 sm:box-border">
          <div className="flex-1 flex flex-row items-start justify-between relative lg:flex-col">
            <div className="absolute my-0 mx-[!important] top-[-62px] left-[351px] bg-white w-[999px] h-[733px] opacity-[0.1] z-[0]" />
            <div className="flex flex-col pt-0 px-0 pb-[110px] items-center justify-start relative z-[1]">
              <h2 className="m-0 relative text-[inherit] tracking-[-2px] leading-[120px] font-semibold font-inherit z-[0] md:text-[90px] md:leading-[90px] sm:text-41xl sm:leading-[60px]">
                <p className="m-0">Workout</p>
                <p className="m-0">Program</p>
                <p className="m-0">Made</p>
                <p className="m-0">For You</p>
              </h2>
              <img
                className="absolute my-0 mx-[!important] bottom-[-8.84px] left-[2.69px] w-[517.61px] h-[206.84px] z-[1] md:w-[400px] sm:w-[300px]"
                alt=""
                src="/splash.svg"
              />
            </div>
            <div className="w-[587.7px] flex flex-col pt-[30px] px-0 pb-0 box-border items-start justify-start gap-[50px] z-[2] text-6xl md:w-[90%]">
              <div className="self-stretch relative tracking-[0.5px] leading-[50px] opacity-[0.7]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
                consectetur adipiscing.
              </div>
              <button
                className="cursor-pointer [border:none] py-6 px-[43px] bg-mediumseagreen rounded-3xs flex flex-row items-start justify-start hover:bg-seagreen"
                onClick={onButton2Click}
              >
                <div className="relative text-lg tracking-[1px] leading-[22px] font-semibold font-poppins text-white text-left">
                  Get Started
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col py-0 px-[120px] items-start justify-start gap-[10px] mt-[-120px] text-xl lg:pl-[60px] lg:pr-[60px] lg:box-border md:flex md:pl-10 md:pr-10 md:box-border sm:pl-5 sm:pr-5 sm:box-border">
          <div className="self-stretch relative h-auto aspect-[1.33] md:hidden">
            <div className="absolute h-[42.83%] w-[26.75%] top-[21.47%] right-[73.25%] bottom-[35.71%] left-[0%]">
              <img
                className="absolute h-[83.38%] w-full top-[0%] right-[0%] bottom-[16.62%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/group-142@2x.png"
              />
              <div className="absolute bottom-[19px] left-[0px] tracking-[0.5px] leading-[25px] font-medium">
                Samantha William
              </div>
              <div className="absolute bottom-[0px] left-[0px] text-sm tracking-[0.5px] leading-[14px] opacity-[0.5]">
                Trainer
              </div>
            </div>
            <div className="absolute h-[42.83%] w-[26.75%] top-[57.17%] right-[46.5%] bottom-[0%] left-[26.75%]">
              <img
                className="absolute h-[83.38%] w-full top-[0%] right-[0%] bottom-[16.62%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/group-147@2x.png"
              />
              <div className="absolute bottom-[19px] left-[0px] tracking-[0.5px] leading-[25px] font-medium">
                Karen Summer
              </div>
              <div className="absolute bottom-[0px] left-[0px] text-sm tracking-[0.5px] leading-[14px] opacity-[0.5]">
                Trainer
              </div>
            </div>
            <div className="absolute h-[64.29%] w-[46.5%] top-[0%] right-[0%] bottom-[35.71%] left-[53.5%]">
              <img
                className="absolute h-[88.93%] w-full top-[0%] right-[0%] bottom-[11.07%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/group-146@2x.png"
              />
              <div className="absolute bottom-[19px] left-[20px] tracking-[0.5px] leading-[25px] font-medium">
                Jonathan Wise
              </div>
              <div className="absolute bottom-[0px] left-[20px] text-sm tracking-[0.5px] leading-[14px] opacity-[0.5]">
                Trainer
              </div>
            </div>
          </div>
          <div className="self-stretch relative h-auto hidden aspect-[0.67] text-base md:flex">
            <div className="absolute h-[38.58%] w-6/12 top-[61.43%] right-[50%] bottom-[-0.01%] left-[0%]">
              <img
                className="absolute h-[82.58%] w-full top-[-0.18%] right-[0%] bottom-[17.59%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/group-1471@2x.png"
              />
              <div className="absolute bottom-[19.36px] left-[0px] tracking-[0.5px] leading-[25px] font-medium">
                Karen Summer
              </div>
              <div className="absolute bottom-[4.36px] left-[0px] text-xs tracking-[0.5px] leading-[14px] opacity-[0.5]">
                Trainer
              </div>
            </div>
            <div className="absolute h-[35.74%] w-6/12 top-[31.97%] right-[0%] bottom-[32.29%] left-[50%]">
              <img
                className="absolute h-[82.14%] w-full top-[0.11%] right-[0%] bottom-[17.74%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/group-1461@2x.png"
              />
              <div className="absolute bottom-[17.38px] left-[20px] tracking-[0.5px] leading-[25px] font-medium">
                Jonathan Wise
              </div>
              <div className="absolute bottom-[2.38px] left-[20px] text-xs tracking-[0.5px] leading-[14px] opacity-[0.5]">
                Trainer
              </div>
            </div>
            <div className="absolute h-[38.13%] w-6/12 top-[-0.04%] right-[50%] bottom-[61.9%] left-[0%]">
              <img
                className="absolute h-[83.56%] w-full top-[0.15%] right-[0%] bottom-[16.29%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/group-1421@2x.png"
              />
              <div className="absolute bottom-[17.46px] left-[0px] tracking-[0.5px] leading-[25px] font-medium">
                Samantha William
              </div>
              <div className="absolute bottom-[2.46px] left-[0px] text-xs tracking-[0.5px] leading-[14px] opacity-[0.5]">
                Trainer
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col py-[92px] px-[120px] items-start justify-start text-6xl lg:pl-20 lg:pr-20 lg:box-border md:pl-10 md:pr-10 md:box-border sm:py-10 sm:px-5 sm:box-border">
        <div className="self-stretch flex flex-col items-start justify-start gap-[50px]">
          <div className="self-stretch flex flex-row items-center justify-start gap-[22px]">
            <div className="relative leading-[35px] font-semibold opacity-[0.34] mix-blend-normal">
              01
            </div>
            <div className="flex-1 flex flex-row py-0 pr-0 pl-[262px] items-center justify-between text-31xl lg:pl-20 lg:box-border md:pl-5 md:box-border sm:pl-0 sm:box-border">
              <div className="flex flex-col items-start justify-start gap-[10px]">
                <div className="relative tracking-[0.83px] leading-[70px] md:text-9xl md:leading-[35px]">
                  Workout at Home
                </div>
                <div className="relative text-sm tracking-[0.5px] leading-[23px] opacity-[0.5] mix-blend-normal">
                  15 videos
                </div>
              </div>
              <img
                className="relative w-[26.22px] h-[21.45px]"
                alt=""
                src="/arrow.svg"
              />
            </div>
          </div>
          <img
            className="self-stretch relative max-w-full overflow-hidden h-px shrink-0 opacity-[0.4] mix-blend-normal"
            alt=""
            src="/separator.svg"
          />
          <div className="self-stretch flex flex-row items-center justify-start gap-[22px]">
            <div className="relative leading-[35px] font-semibold opacity-[0.34] mix-blend-normal">
              02
            </div>
            <div className="flex-1 flex flex-row py-0 pr-0 pl-[262px] items-center justify-between text-31xl lg:pl-20 lg:box-border md:pl-5 md:box-border sm:pl-0 sm:box-border">
              <div className="flex flex-col items-start justify-start gap-[10px]">
                <div className="relative tracking-[0.83px] leading-[70px] md:text-9xl md:leading-[35px]">
                  Stay Strong and Fit
                </div>
                <div className="relative text-sm tracking-[0.5px] leading-[23px] opacity-[0.5] mix-blend-normal">
                  48 videos
                </div>
              </div>
              <img
                className="relative w-[26.22px] h-[21.45px]"
                alt=""
                src="/arrow.svg"
              />
            </div>
          </div>
          <img
            className="self-stretch relative max-w-full overflow-hidden h-px shrink-0 opacity-[0.4] mix-blend-normal"
            alt=""
            src="/separator.svg"
          />
          <div className="self-stretch flex flex-row items-center justify-start gap-[22px]">
            <div className="relative leading-[35px] font-semibold opacity-[0.34] mix-blend-normal">
              03
            </div>
            <div className="flex-1 flex flex-row py-0 pr-0 pl-[262px] items-center justify-between text-31xl lg:pl-20 lg:box-border md:pl-5 md:box-border sm:pl-0 sm:box-border">
              <div className="flex flex-col items-start justify-start gap-[10px]">
                <div className="relative tracking-[0.83px] leading-[70px] md:text-9xl md:leading-[35px]">
                  High Intensity
                </div>
                <div className="relative text-sm tracking-[0.5px] leading-[23px] opacity-[0.5] mix-blend-normal">
                  48 videos
                </div>
              </div>
              <img
                className="relative w-[26.22px] h-[21.45px]"
                alt=""
                src="/arrow.svg"
              />
            </div>
          </div>
          <img
            className="self-stretch relative max-w-full overflow-hidden h-px shrink-0 opacity-[0.4] mix-blend-normal"
            alt=""
            src="/separator.svg"
          />
          <div className="self-stretch flex flex-row items-center justify-start gap-[22px]">
            <div className="relative leading-[35px] font-semibold opacity-[0.34] mix-blend-normal">
              04
            </div>
            <div className="flex-1 flex flex-row py-0 pr-0 pl-[262px] items-center justify-between text-31xl lg:pl-20 lg:box-border md:pl-5 md:box-border sm:pl-0 sm:box-border">
              <div className="flex flex-col items-start justify-start gap-[10px]">
                <div className="relative tracking-[0.83px] leading-[70px] md:text-9xl md:leading-[35px]">
                  Simple Workout
                </div>
                <div className="relative text-sm tracking-[0.5px] leading-[23px] opacity-[0.5] mix-blend-normal">
                  48 videos
                </div>
              </div>
              <img
                className="relative w-[26.22px] h-[21.45px]"
                alt=""
                src="/arrow.svg"
              />
            </div>
          </div>
          <img
            className="self-stretch relative max-w-full overflow-hidden h-px shrink-0 opacity-[0.4] mix-blend-normal"
            alt=""
            src="/separator.svg"
          />
          <div className="self-stretch flex flex-row items-center justify-start gap-[22px]">
            <div className="relative leading-[35px] font-semibold opacity-[0.34] mix-blend-normal">
              05
            </div>
            <div className="flex-1 flex flex-row py-0 pr-0 pl-[262px] items-center justify-between text-31xl lg:pl-20 lg:box-border md:pl-5 md:box-border sm:pl-0 sm:box-border">
              <div className="flex flex-col items-start justify-start gap-[10px]">
                <div className="relative tracking-[0.83px] leading-[70px] md:text-9xl md:leading-[35px]">
                  Burn Calories
                </div>
                <div className="relative text-sm tracking-[0.5px] leading-[23px] opacity-[0.5] mix-blend-normal">
                  48 videos
                </div>
              </div>
              <img
                className="relative w-[26.22px] h-[21.45px]"
                alt=""
                src="/arrow.svg"
              />
            </div>
          </div>
          <img
            className="self-stretch relative max-w-full overflow-hidden h-px shrink-0 opacity-[0.4] mix-blend-normal"
            alt=""
            src="/separator.svg"
          />
        </div>
      </div>
      <div className="self-stretch bg-black flex flex-col pt-[76px] px-0 pb-[124px] items-center justify-start text-center text-41xl">
        <div className="w-[743px] flex flex-col items-center justify-start gap-[47px] max-w-[90%]">
          <div className="self-stretch relative tracking-[-2px] leading-[60px] font-semibold">
            Get the Newsletter
          </div>
          <form
            className="self-stretch flex flex-row items-start justify-start gap-[21px] md:flex-col"
          
            method="post"
            id="formID"
          >
            <input
              className="font-semibold font-roboto text-lg bg-[transparent] flex-1 rounded-md box-border h-[70px] flex flex-row py-[30px] px-10 items-center justify-start text-[#FFFFFF] border-[1px] border-solid border-white md:flex-[unset] md:self-stretch"
              type="text"
              placeholder="Email"
            />
            <button
              className="cursor-pointer [border:none] py-6 px-[43px] bg-mediumseagreen rounded-3xs flex flex-row items-start justify-center hover:bg-seagreen md:w-full"
              type="submit"
              form="formID"
             
            >
              <div className="relative text-lg tracking-[1px] leading-[22px] font-semibold font-poppins text-white text-left">
                Subscribe
              </div>
            </button>
          </form>
        </div>
      </div>
    </div></> 
  );
};

export default FitnessLandingPage;
