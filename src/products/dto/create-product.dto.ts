import { ApiModelProperty } from '@nestjs/swagger';
export class CreateProductDto {
  readonly id: string;
  @ApiModelProperty()
  readonly name: string;
  @ApiModelProperty()
  readonly price: Number;
  @ApiModelProperty()
  readonly available: Boolean;
  @ApiModelProperty()
  readonly dateCreated: Date;
}
