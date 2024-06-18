import { SortOrder } from "../../util/SortOrder";

export type VisitCounterOrderByInput = {
  count?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
