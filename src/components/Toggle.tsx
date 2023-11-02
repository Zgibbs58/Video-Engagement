import * as React from "react";
import { motion } from "framer-motion";
import "../App.css";

const Path = (props) => <motion.path fill="transparent" strokeWidth="3" stroke="white" strokeLinecap="round" {...props} />;

import PropTypes from "prop-types";

export const Toggle = ({ toggle, isOpen }) => (
  <button className="toggleButton" onClick={toggle}>
    <svg width="23" height="23" viewBox="0 0 23 23" className="block mx-auto">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 6 6 L 17 17", originX: 11.5, originY: 11.5 },
        }}
        initial={false}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        initial={false}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 6 17 L 17 6", originX: 11.5, originY: 11.5 },
        }}
        initial={false}
      />
    </svg>
  </button>
);

Toggle.propTypes = {
  toggle: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};
