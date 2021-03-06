import styled from 'styled-components';
import {AnimatePresence, motion} from "framer-motion";
import { useState } from 'react';


const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content:space-around;
  align-items: center;
`;
const Box = styled(motion.div)`
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  width: 50vw;
  gap: 10px;
  div:first-child,
  div:last-child{
    grid-column:span 2;
  }
`;
const OverLay = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.7);
  position:absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function LayoutId2(){
    const [id,setId]=useState<null|string>(null);
  console.log(id);
 return(
   <Wrapper>
     <Grid>
       {[1,2,3,4].map(n=><Box onClick={()=>setId(n+"")} key={n} layoutId={n+""}/>)}
    </Grid>
    <AnimatePresence>{id? 
    <OverLay 
    onClick={()=>setId(null)}
    initial={{opacity:0}}
     animate={{opacity:1}}
      exit={{opacity:0}}
      >
        <Box  layoutId={id} style={{width:400,height:200}}/>
      </OverLay>:null}
      </AnimatePresence>
   
   </Wrapper>)
}
export default LayoutId2;