import * as moment from 'moment';

export interface IChangeLogTableModel {
  weldId: number;
  isoCode: string;
  lineNumber: string;
  area: string;
  spoolNumber: string;
  weldNumber: string;
  applicationNumber: string;
  conclusionNumber: string;
  dateAdded: string;
  timeAdded: string;
  labIds: number[];
  loading: boolean;
  subData: IChangeLogApproveInfoModel[];
  displayText: string;
  toggleHeadIcon: boolean;
  conclusions: IReferences[];
  applications: IReferences[];
  access: boolean;
}



export interface IReferences {
  id: number;
  number: string;
  objectId: number;
  labid: number;
  organizationId: number;
  template: string;
}


export interface IChangeLogApproveInfoModel {
  id: number;
  columnName: string;
  comment: string;
  date: string;
  dateTime: string;
  time: string;
  login: string;
  newValue: string;
  oldValue: string;
  weldId: string;
  status?: number;
  displayText: string;
  subIdent: IChangeLogApproveInfoModel[];
}

export class ChangeLogTableModel implements IChangeLogTableModel {

  weldId = 0;
  isoCode = '';
  spoolNumber = '';
  lineNumber = '';
  loading = false;
  area = '';
  weldNumber = '';
  date = '';
  dateTime = '';
  time = '';
  applicationNumber = '';
  conclusionNumber = '';
  dateAdded = '';
  timeAdded = '';
  subData: any[] = [];
  labIds = [];
  displayText = '';
  toggleHeadIcon = false;
  access = false;
  conclusions = [];
  applications = [];

  constructor(obj?: any) {
    if (obj) Object.keys(this).forEach(key => {
      if (key === 'dateTime') {
        this.time = moment(obj[key]).format('HH:mm');
        this.date = moment(obj[key]).format('DD.MM.YYYY');
      } else {
        this[key] = obj[key] ? obj[key] : this[key];
      }

    });
    this.labIds = this.labIds.filter(Boolean);
  }


}

export class ChangeLogApproveInfoModel implements IChangeLogApproveInfoModel {

  id = 0;
  columnName = '';
  comment = '';
  date = '';
  dateTime = '';
  time = '';
  login = '';
  newValue = '';
  oldValue = '';
  weldId = '';
  displayText = '';
  subIdent = [];
  canceled = false;
  status = null;

  constructor(obj?: any) {
    if (obj) Object.keys(this).forEach(key => {
      if (key === 'dateTime') {
        this.date = moment(obj[key]).format('DD.MM.YYYY');
        this.time = moment(obj[key]).format('HH:mm');
      } else {
        this[key] = obj[key] ? obj[key] : this[key];
      }

    });
    else return this;
  }
}
