import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { VisitCounterActionsService } from "./visitcounteractions.service";

@swagger.ApiTags("visitCounterActions")
@common.Controller("visitCounterActions")
export class VisitCounterActionsController {
  constructor(protected readonly service: VisitCounterActionsService) {}

  @common.Get("/counter")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetVisitCounter(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.GetVisitCounter(body);
      }

  @common.Post("/increment")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async IncrementVisitCounter(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.IncrementVisitCounter(body);
      }
}
