import { Module } from "@nestjs/common";
import { VisitCounterActionsService } from "./visitcounteractions.service";
import { VisitCounterActionsController } from "./visitcounteractions.controller";
import { VisitCounterActionsResolver } from "./visitcounteractions.resolver";

@Module({
  controllers: [VisitCounterActionsController],
  providers: [VisitCounterActionsService, VisitCounterActionsResolver],
  exports: [VisitCounterActionsService],
})
export class VisitCounterActionsModule {}
