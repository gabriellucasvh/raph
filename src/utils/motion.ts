// Motion utils to be used across components
export const fadeInUp = {
    hidden: { 
      opacity: 0, 
      y: 40 
    },
    visible: (i = 0) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        delay: i * 0.1,
        ease: "easeOut"
      }
    })
  };
  
  export const fadeIn = {
    hidden: { 
      opacity: 0
    },
    visible: (i = 0) => ({ 
      opacity: 1,
      transition: { 
        duration: 0.5,
        delay: i * 0.1
      }
    })
  };
  
  export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };
  
  export const slideInFromLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: (i = 0) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.25, 0.25, 0.25, 0.75]
      }
    })
  };
  
  export const slideInFromRight = {
    hidden: { x: 100, opacity: 0 },
    visible: (i = 0) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.25, 0.25, 0.25, 0.75]
      }
    })
  };
  
  export const scaleUp = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (i = 0) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.5
      }
    })
  };
  
  export const floatAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  };
  
  export const glowPulse = {
    animate: {
      boxShadow: [
        '0 0 10px rgba(255, 214, 0, 0.3)',
        '0 0 20px rgba(255, 214, 0, 0.5)',
        '0 0 10px rgba(255, 214, 0, 0.3)'
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  };
  
  export const rotateAnimation = {
    animate: {
      rotate: 360,
      transition: {
        duration: 15,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };
  
  export const pathAnimation = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 1.5, ease: "easeInOut" },
        opacity: { duration: 0.3 }
      }
    }
  };