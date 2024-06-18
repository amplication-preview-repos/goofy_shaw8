import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VisitCounterServiceBase } from "./base/visitCounter.service.base";

@Injectable()
export class VisitCounterService extends VisitCounterServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
