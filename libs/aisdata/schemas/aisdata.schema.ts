import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AisDataDocument = Aisdata & Document;

@Schema()
export class Aisdata {
  @Prop({ required: true, unique: false })
  MMSI: number;

  @Prop({ required: false })
  Ship_name: string;

  @Prop({ required: true })
  Latitude: string;

  @Prop({ required: true })
  Longitude: string;

  @Prop({ required: true })
  Decimal_Latitude: string;

  @Prop({ required: true })
  Decimal_Longitude: string;

  @Prop({ required: true })
  Time_stamp: string;

  @Prop({ required: true })
  SOG: string;

  @Prop({ required: true })
  COG: string;

  @Prop({
    default: Date.now,
    expires: 60 * 60 * 24 * parseInt(process.env.AIS_DATA_STORED_IN_DAYS),
  })
  createdAt: Date;
}

export const AisdataSchema = SchemaFactory.createForClass(Aisdata);
// Do not allow duplicate postions
AisdataSchema.index({ MMSI: 1, Time_stamp: 1 }, { unique: true });
