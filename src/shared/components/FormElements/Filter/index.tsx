import { ChangeEvent, FC } from "react";
import {
  FilterContainer,
  FilterOption,
  FilterSelect,
  FilterTitle,
} from "./Filter.styled";

interface Props {
  data: string[];
  title: string;
  filterHandler: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const Filter: FC<Props> = ({ data, title, filterHandler }) => {
  return (
    <FilterContainer>
      <FilterTitle>{title}</FilterTitle>
      <FilterSelect title="filter" onChange={filterHandler}>
        {data.map((item) => (
          <FilterOption key={item}>{item}</FilterOption>
        ))}
      </FilterSelect>
    </FilterContainer>
  );
};

export default Filter;
