import {Mongo} from 'meteor/mongo';
import {sntGroupModel} from '../models/snt_group_model';

export const SNTgroups = new Mongo.Collection<sntGroupModel>('sntgroups');