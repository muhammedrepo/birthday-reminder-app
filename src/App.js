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
  ${tw` md:text-3xl capitalize font-normal mb-8 `}
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
   bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
   hover:from-pink-500 hover:to-indigo-500
   font-normal
   rounded-md`}
`;

function App() {
  const [people, setPeople] = useState(data);

  return (
    <Wrapper>
      <Container>
        <Title>{Today(people).length} birthday today</Title>
        <List people={Today(people)} />
        <Title>{Upcoming(people, 2).length} Upcoming Birthday</Title>
        <List people={Upcoming(people, 2)} />
        <Button onClick={() => setPeople([])}>clear all</Button>
      </Container>
    </Wrapper>
  );
}

export default App;

// Due for birthday Today

function Today(person) {
  let currentDay = new Date().getDate();
  let currentMonth = new Date().getMonth();

  let filter = person.filter((data) => {
    let day = new Date(data.birthday).getDate();
    let month = new Date(data.birthday).getMonth();

    return currentDay == day && currentMonth == month;
  });
  return filter;
}

// upcoming birthdays
function Upcoming(person, toMonth) {
  let currentMonth = new Date().getMonth();
  let currentDay = new Date().getDate();

  let filter = person.filter((data) => {
    let month = new Date(data.birthday).getMonth();
    let day = new Date(data.birthday).getDate();

    if (currentDay == day) return;
    return month >= currentMonth && month <= currentMonth + toMonth;
  });
  return filter;
}
