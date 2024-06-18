import { Module } from "@nestjs/common";
import { VisitCounterModuleBase } from "./base/visitCounter.module.base";
import { VisitCounterService } from "./visitCounter.service";
import { VisitCounterController } from "./visitCounter.controller";
import { VisitCounterResolver } from "./visitCounter.resolver";

@Module({
  imports: [VisitCounterModuleBase],
  controllers: [VisitCounterController],
  providers: [VisitCounterService, VisitCounterResolver],
  exports: [VisitCounterService],
})
export class VisitCounterModule {}
