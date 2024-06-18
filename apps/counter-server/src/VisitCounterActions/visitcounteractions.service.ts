import { Injectable } from "@nestjs/common";

@Injectable()
export class VisitCounterActionsService {
  constructor() {}
  async GetVisitCounter(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async IncrementVisitCounter(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
