/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { VisitCounterWhereInput } from "./VisitCounterWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class VisitCounterListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => VisitCounterWhereInput,
  })
  @ValidateNested()
  @Type(() => VisitCounterWhereInput)
  @IsOptional()
  @Field(() => VisitCounterWhereInput, {
    nullable: true,
  })
  every?: VisitCounterWhereInput;

  @ApiProperty({
    required: false,
    type: () => VisitCounterWhereInput,
  })
  @ValidateNested()
  @Type(() => VisitCounterWhereInput)
  @IsOptional()
  @Field(() => VisitCounterWhereInput, {
    nullable: true,
  })
  some?: VisitCounterWhereInput;

  @ApiProperty({
    required: false,
    type: () => VisitCounterWhereInput,
  })
  @ValidateNested()
  @Type(() => VisitCounterWhereInput)
  @IsOptional()
  @Field(() => VisitCounterWhereInput, {
    nullable: true,
  })
  none?: VisitCounterWhereInput;
}
export { VisitCounterListRelationFilter as VisitCounterListRelationFilter };
