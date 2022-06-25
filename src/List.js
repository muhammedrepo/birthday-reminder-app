import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

export const PersonDetail = styled.article`
  ${tw`grid grid-template-columns[auto 1fr] gap-3 mb-6 items-center`}
`;
export const Image = styled.img`
  ${tw`w-20 h-20 object-cover rounded-[50%]`}
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;
function List({ people }) {
  if (!people) return;
  return (
    <>
      {people.map((person) => {
        const { id, name, birthday, image } = person;
        return (
          <PersonDetail key={id}>
            <Image src={image} alt={name} />
            <div>
              <h4 className="text-sm md:text-lg mb-2">{name}</h4>

              <p className="mb-0 text-gray-600">{HowOld(birthday)} years</p>
            </div>
          </PersonDetail>
        );
      })}
    </>
  );
}

export default List;

//how old the person is
function HowOld(personAge) {
  let year = new Date(personAge).getFullYear();
  let currentYear = new Date().getFullYear();

  let age = currentYear - year;

  return age;
}
