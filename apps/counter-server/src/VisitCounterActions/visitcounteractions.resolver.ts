import * as graphql from "@nestjs/graphql";
import { VisitCounterActionsService } from "./visitcounteractions.service";

export class VisitCounterActionsResolver {
  constructor(protected readonly service: VisitCounterActionsService) {}

  @graphql.Query(() => String)
  async GetVisitCounter(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.GetVisitCounter(args);
  }

  @graphql.Mutation(() => String)
  async IncrementVisitCounter(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.IncrementVisitCounter(args);
  }
}
