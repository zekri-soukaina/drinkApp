// import "./Button.css";

// export const Button = ({ text, onClick }) => (
//   <button className="button" onClick={onClick}>
//     {text}
//   </button>
// );

// import { Button as CButton } from "@chakra-ui/react";

// export const Button = ({ clickFn, ...props }) => (
//   <CButton colorScheme="teal" onClick={clickFn} {...props}>
//     {props.children}
//   </CButton>
// );

import { Button as CButton } from "@chakra-ui/react";

export const Button = ({ clickFn, ...props }) => (
  <CButton colorScheme="teal" onClick={clickFn} {...props}>
    {props.children}
  </CButton>
);
