import { Component } from "react";
import {motion} from "framer-motion";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color:white;
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVar={
  hover:{scale:1.5, rotateZ:90},
  click:{scale:1, borderRadius:"100px"}
}

class HoverNTap extends Component{
    render(){
        return(
            <Wrapper><Box variants={boxVar}
            whileHover="hover"
            whileTap="click"
            />
            </Wrapper>
        );
    }
}
export default HoverNTap;