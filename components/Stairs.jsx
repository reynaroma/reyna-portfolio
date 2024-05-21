import { motion } from "framer-motion";

// variants
const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

// calculate the reverse inde for the staggered delay
const reverseIndex = (index) => {
  const totalSteps = 6; // number os steps in the stairs
  return totalSteps - index - 1;
}

function Stairs() {
  return (
    <>

      {/* render 6 motion divs, each representiong a step of the stairs.  Each will have the same animation defined by the stairsAnimation object. The delay for each div is calculated dynamically based on it's reversed index, creating a staggered effect with decreasing delay for each subsequent step.*/}
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.1,
          }}
          className="h-full w-full bg-white relative"
        />
      ))}
    </>
  )
}

export default Stairs
