import { VisitCounterWhereInput } from "./VisitCounterWhereInput";
import { VisitCounterOrderByInput } from "./VisitCounterOrderByInput";

export type VisitCounterFindManyArgs = {
  where?: VisitCounterWhereInput;
  orderBy?: Array<VisitCounterOrderByInput>;
  skip?: number;
  take?: number;
};
