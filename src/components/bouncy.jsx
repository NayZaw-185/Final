    import { motion } from 'framer-motion';

    const containerVariants = {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 0.05, // Stagger animation for each child (character)
        },
      },
    };

    const itemVariants = {
      hidden: { opacity: 0, y: 50 }, // Start below and hidden
      show: {
        opacity: 1,
        y: [0, -20, 0], // Bounce animation: up, then down
        transition: {
          duration: 0.5,
          ease: 'easeOut',
          times: [0, 0.5, 1], // Timing for y values
        },
      },
    };

    const BouncyText = ({ text }) => {
      return (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          style={{ display: 'flex' }} // To display characters inline
        >
          {Array.from(text).map((char, i) => (
            <motion.span key={i} variants={itemVariants}>
              {char === ' ' ? '/' : char} {/* Handle spaces */}
            </motion.span>
          ))}
        </motion.div>
      );
    };

    export default BouncyText;
