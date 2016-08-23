import {Mongo} from 'meteor/mongo';
import {EventModel} from '../models/eventmodel';

export const BackupEvents = new Mongo.Collection('backupevents');