import {
  DepartureContainer,
  DepartureFilters,
  DepartureList,
  DepartureSection,
  DepartureTitle,
} from "./DeparturePage.styled";

const DeparturePage = () => {
  return (
    <DepartureContainer>
      <DepartureTitle>departure</DepartureTitle>

      <DepartureSection>
        <DepartureFilters>filters...</DepartureFilters>

        <DepartureList>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item) => (
            <h1 key={item}>{item}</h1>
          ))}
        </DepartureList>
      </DepartureSection>
    </DepartureContainer>
  );
};

export default DeparturePage;
