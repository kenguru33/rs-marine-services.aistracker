import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AisDataDocument = Aisdata & Document;

const DAYS = 7;

@Schema()
export class Aisdata {
  @Prop({ required: true, unique: false })
  mmsi: number;

  @Prop({ required: false })
  shipName: string;

  @Prop({ required: true })
  lat: string;

  @Prop({ required: true })
  lng: string;

  @Prop({ required: true })
  timeStamp: string;

  @Prop({ required: true })
  sog: string;

  @Prop({ required: true })
  cog: string;

  @Prop({
    default: Date.now,
    expires: 60 * 60 * 24 * DAYS,
    immutable: true,
  })
  createdAt: Date;
}

// @Schema()
// export class Aisdata {
//   @Prop({ required: true, unique: false })
//   MMSI: number;

//   @Prop({ required: false })
//   Ship_name: string;

//   @Prop({ required: true })
//   Latitude: string;

//   @Prop({ required: true })
//   Longitude: string;

//   @Prop({ required: true })
//   Decimal_Latitude: string;

//   @Prop({ required: true })
//   Decimal_Longitude: string;

//   @Prop({ required: true })
//   Time_stamp: string;

//   @Prop({ required: true })
//   SOG: string;

//   @Prop({ required: true })
//   COG: string;

//   // TODO: This should not depend on env variable. Use factory provider!
//   @Prop({
//     default: Date.now,
//     expires: 60 * 60 * 24 * DAYS,
//     immutable: true,
//   })
//   createdAt: Date;
// }

export const AisdataSchema = SchemaFactory.createForClass(Aisdata);
// Do not allow duplicate postions
AisdataSchema.index({ MMSI: 1, Time_stamp: 1 }, { unique: true });
