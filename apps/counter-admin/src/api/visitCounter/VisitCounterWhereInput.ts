import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type VisitCounterWhereInput = {
  count?: IntNullableFilter;
  id?: StringFilter;
};
