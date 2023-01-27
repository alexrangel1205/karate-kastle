import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useGsapLinkDownFall = (arr) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        y: -500,
      },
      {
        y: 0,
        duration: 1.5,
        stagger: 0.1,
        ease: "Power4.out",
      }
    );
  }, [arr]);
};

export const useGsapHeadingRevile = (arr) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        y: -100,
        opacity: 0,
      },
      {
        opacity: 1,
        y: 1,
        duration: 1,
        delay: 1.8,
        ease: "Power4.out",
      }
    );
  }, [arr]);
};

export const useGsapTextUnvile = (arr) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        x: 0,
      },
      {
        x: "100%",
        duration: 1,
        delay: 2.1,
        ease: "Power4.out",
      }
    );
  }, [arr]);
};

export const useGsapTextForward = (arr) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        x: 500,
        opacity: 0,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 2.5,
        ease: "Power4.out",
      }
    );
  }, [arr]);
};

export const useGsapCtaUpward = (arr) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 3,
        ease: "Power4.out",
      }
    );
  }, [arr]);
};

export const useGsapsectionTextUnvile = (item, obs) => {
  useEffect(() => {
    const el = item.current;
    const trig = obs.current;
    gsap.fromTo(
      el,
      {
        x: "-100%",
      },
      {
        x: "100%",
        duration: 1,
        ease: "Power4.out",
        scrollTrigger: {
          trigger: trig,
          start: "top center",
          end: "bottom center",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, [item, obs]);
};

export const useGsapRedLineDownFall = (item, obs) => {
  useEffect(() => {
    const el = item.current;
    const trig = obs.current;

    gsap.fromTo(
      el,
      {
        y: -100,
      },
      {
        y: 0,
        duration: 1.5,
        ease: "Power4.out",
        scrollTrigger: {
          trigger: trig,
          start: "top center",
        },
      }
    );
  }, [item, obs]);
};

export const useGsapAboutDescUpward = (item, obs) => {
  useEffect(() => {
    const el = item.current;
    const trig = obs.current;

    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 1,
        ease: "Power4.out",
        scrollTrigger: {
          trigger: trig,
          start: "top center",
        },
      }
    );
  }, [item, obs]);
};

export const useGsapKarateStyleDownFall = (arr, obs) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);
    const trig = obs.current;

    gsap.fromTo(
      el,
      {
        y: -500,
      },
      {
        y: 0,
        delay: 1.5,
        duration: 1.5,
        stagger: 0.2,
        ease: "Power4.out",
        scrollTrigger: {
          trigger: trig,
          start: "top center",
        },
      }
    );
  }, [arr, obs]);
};

export const useGsapAboutBackward = (item, obs) => {
  useEffect(() => {
    const el = item.current;
    const trig = obs.current;

    gsap.fromTo(
      el,
      {
        transform: "rotate(60deg)",
        x: "120%",
        opacity: 0,
      },
      {
        opacity: 1,
        transform: "rotate(0deg)",
        x: 0,
        delay: 1.5,
        duration: 1,
        ease: "Power4.out",
        scrollTrigger: {
          trigger: trig,
          start: "top center",
        },
      }
    );
  }, [item, obs]);
};

export const useGsapGallarySubtitle = (item, obs) => {
  useEffect(() => {
    const el = item.current;
    const trig = obs.current;

    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: -100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 1,
        ease: "Power4.out",
        scrollTrigger: {
          trigger: trig,
          start: "top center",
        },
      }
    );
  }, [item, obs]);
};

export const useGsapGallaryForward = (item, obs, delay) => {
  useEffect(() => {
    const el = item.current;
    const trig = obs.current;

    gsap.fromTo(
      el,
      {
        opacity: 0,
        x: -100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: delay,
        ease: "Power4.out",
        scrollTrigger: {
          trigger: trig,
          start: "top center",
        },
      }
    );
  }, [item, obs]);
};

export const useGsapGallaryBackward = (item, obs, delay) => {
  useEffect(() => {
    const el = item.current;
    const trig = obs.current;

    gsap.fromTo(
      el,
      {
        opacity: 0,
        x: 100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: delay,
        ease: "Power4.out",
        scrollTrigger: {
          trigger: trig,
          start: "top center",
        },
      }
    );
  }, [item, obs]);
};

export const useGsapGallaryDownFall = (item, obs, delay) => {
  useEffect(() => {
    const el = item.current;
    const trig = obs.current;

    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: -100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: delay,
        ease: "Power4.out",
        scrollTrigger: {
          trigger: trig,
          start: "top center",
        },
      }
    );
  }, [item, obs]);
};

export const useGsapGallaryUpward = (item, obs, delay) => {
  useEffect(() => {
    const el = item.current;
    const trig = obs.current;

    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: delay,
        ease: "Power4.out",
        scrollTrigger: {
          trigger: trig,
          start: "top center",
        },
      }
    );
  }, [item, obs]);
};
