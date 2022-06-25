import { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import data from "./data";
import List from "./List";

export const Wrapper = styled.main`
  ${tw`min-h-screen flex items-center justify-center`}
`;

export const Container = styled.section`
  ${tw`w-[90vh] my-20 mx-0 max-w-[450px] bg-white rounded py-6 px-8 shadow`}
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
`;

export const Title = styled.h3`
  ${tw`text-xl md:text-3xl capitalize font-normal mb-8`}
`;

export const Button = styled.button`
  ${tw`py-4
   px-10
   lg:px-8
   xl:px-10
   w-full
   inline-flex
   items-center
   justify-center
   text-center text-white text-base capitalize
   bg-pink-400
   hover:bg-opacity-90
   font-normal
   rounded-md`}
`;

function App() {
  const [people, setPeople] = useState(data);

  return (
    <Wrapper>
      <Container>
        <Title>{people.length} birthdays today</Title>
        <List people={people} />
        <Button onClick={() => setPeople([])}>clear all</Button>
      </Container>
    </Wrapper>
  );
}

export default App;
