import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { VisitCounterService } from "./visitCounter.service";
import { VisitCounterControllerBase } from "./base/visitCounter.controller.base";

@swagger.ApiTags("visitCounters")
@common.Controller("visitCounters")
export class VisitCounterController extends VisitCounterControllerBase {
  constructor(protected readonly service: VisitCounterService) {
    super(service);
  }
}
