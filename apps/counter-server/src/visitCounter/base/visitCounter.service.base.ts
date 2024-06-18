/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, VisitCounter as PrismaVisitCounter } from "@prisma/client";

export class VisitCounterServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.VisitCounterCountArgs, "select">
  ): Promise<number> {
    return this.prisma.visitCounter.count(args);
  }

  async visitCounters(
    args: Prisma.VisitCounterFindManyArgs
  ): Promise<PrismaVisitCounter[]> {
    return this.prisma.visitCounter.findMany(args);
  }
  async visitCounter(
    args: Prisma.VisitCounterFindUniqueArgs
  ): Promise<PrismaVisitCounter | null> {
    return this.prisma.visitCounter.findUnique(args);
  }
  async createVisitCounter(
    args: Prisma.VisitCounterCreateArgs
  ): Promise<PrismaVisitCounter> {
    return this.prisma.visitCounter.create(args);
  }
  async updateVisitCounter(
    args: Prisma.VisitCounterUpdateArgs
  ): Promise<PrismaVisitCounter> {
    return this.prisma.visitCounter.update(args);
  }
  async deleteVisitCounter(
    args: Prisma.VisitCounterDeleteArgs
  ): Promise<PrismaVisitCounter> {
    return this.prisma.visitCounter.delete(args);
  }
}
