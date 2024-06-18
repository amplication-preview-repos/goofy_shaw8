import { VisitCounter as TVisitCounter } from "../api/visitCounter/VisitCounter";

export const VISITCOUNTER_TITLE_FIELD = "id";

export const VisitCounterTitle = (record: TVisitCounter): string => {
  return record.id?.toString() || String(record.id);
};
