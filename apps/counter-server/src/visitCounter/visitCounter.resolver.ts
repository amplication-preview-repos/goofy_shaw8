import * as graphql from "@nestjs/graphql";
import { VisitCounterResolverBase } from "./base/visitCounter.resolver.base";
import { VisitCounter } from "./base/VisitCounter";
import { VisitCounterService } from "./visitCounter.service";

@graphql.Resolver(() => VisitCounter)
export class VisitCounterResolver extends VisitCounterResolverBase {
  constructor(protected readonly service: VisitCounterService) {
    super(service);
  }
}
