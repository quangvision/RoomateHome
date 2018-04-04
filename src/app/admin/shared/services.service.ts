import { getSession } from '../../../x/storage/storage';
import { Http } from '@angular/http';
import { HttpApi } from '../../../x/http/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class ServicesService {
    httpApi = new HttpApi(this.http)
    token = { token: getSession('session_id') }
    constructor(private http: Http) { }
    getAllBranch() {
        return this.httpApi.Get<IFilterBranch[]>('api/private/org/branch/get_all', this.token)
    }
    getBranchById(id: string) {
        return this.httpApi.Get<IBranch>('api/private/org/branch/get', { token: getSession('session_id'), id: id })
    }
    CreateBranch(data: any) {
        return this.httpApi.Post('api/private/org/branch/create', { token: getSession('session_id') }, data).subscribe(d => { });
    }
    UpdateBranch(id: string, data: any) {
        return this.httpApi.Post('api/private/org/branch/update', { token: getSession('session_id'), id: id }, data).subscribe(d => { });

    }
    DeleteBranch(id: string) {
        return this.httpApi.Post('api/private/org/branch/mark_delete', { token: getSession('session_id'), id: id });
    }
    getDevicesByBranch(branch_id: string) {
        return this.httpApi.Get('api/private/center/device/search', { token: getSession('session_id'), branch_id: branch_id })

    }
    getDevicesById(id: string) {
        return this.httpApi.Get<IDevice>('api/private/center/device/get', { token: getSession('session_id'), id: id })
    }
    getAllDevices() {
        return this.httpApi.Get<IFilterDevice[]>('api/private/center/device/get_all', { token: getSession('session_id') })
    }
    CreateDevice(data: any) {
        return this.httpApi.Post('api/private/center/device/create', { token: getSession('session_id') }, data);

    }
    DeleteDevice(id: string) {
        return this.httpApi.Post('api/private/center/device/mark_delete', { token: getSession('session_id'), id: id });

    }
    UpdateDevices(id: string, data: any) {
        return this.httpApi.Post('api/private/center/device/update', { token: getSession('session_id'), id: id }, data);
    }
    CreateContent(data: any) {
        return this.httpApi.Post('api/private/center/content/create', { token: getSession('session_id') }, data);
    }
    DeleteContent(id: string) {
        return this.httpApi.Post('api/private/center/content/mark_delete', { token: getSession('session_id'), id: id });
    }
    UpdateContent(id: string, data: any) {
        return this.httpApi.Post('api/private/center/content/update', { token: getSession('session_id'), id: id }, data);
    }
    getAllContent() {
        return this.httpApi.Get('api/private/center/content/get_all', { token: getSession('session_id') })
    }
    getContentByID(id: string) {
        return this.httpApi.Get<IContent>('api/private/center/content/get', { token: getSession('session_id'), id: id })
    }
    UploadFile() {
        return this.httpApi.Post('library/upload', { token: getSession('session_id')});
    }
    getAllLibrary() {
        return this.httpApi.Get('library/directory', { token: getSession('session_id') })
    }
    public get_level = new BehaviorSubject<any>(null);
    getLevel(data) {
        this.get_level.next(data)
    }
    public branch_common = new BehaviorSubject<any>(null);
    setBranchCommon(data) {
        this.branch_common.next(data)
    }
    public device_online = new BehaviorSubject<any>(null);
    setDeviceOnline(data) {
        this.device_online.next(data);
        console.log(this.device_online)
    }
    public _tab_active = new BehaviorSubject<any>('upload');
    setActiveTab(value){
        this._tab_active.next(value)
        console.log(this._tab_active)
    }
    CreateCampaign(data: any){
        return this.httpApi.Post('api/private/center/campain/create', {token: getSession('session_id')},data);
    }
    getAllCampaign() {
        return this.httpApi.Get('api/private/center/campain/get_all', { token: getSession('session_id') })
    }
    DeleteCampaign(id: string) {
        return this.httpApi.Post('api/private/center/campain/mark_delete', { token: getSession('session_id'), id: id });
    }
    getCampaignById(id: string) {
        return this.httpApi.Get<ICampaign>('api/private/center/campain/get', { token: getSession('session_id'), id: id })
    }
    UpdateCampaign(id: string, data: any) {
        return this.httpApi.Post('api/private/center/campain/update', { token: getSession('session_id'), id: id }, data);
    }
    ReloadSocket(id: string) {
        return this.httpApi.Post('service/signal/send', { token: getSession('session_id'), device_id: id });
    }
    getDeviceByCampaingID(id: string) {
        console.log(this.httpApi)
        return this.httpApi.Get('api/private/center/device/search', { token: getSession('session_id'), campain_id: id })
    }
    getAllReportPer(start: string,end:string) {
        return this.httpApi.Get<IReportPer[]>('api/private/report/performance/aggregate', { token: getSession('session_id'), start: start, end: end })
    }
}

export interface Service {
    id: string
    service_name: string
    avg_rate: number
    active: boolean
    i18n: I18N
}
export class I18N {
    vi: string
    en: string
}
export class Criteria {
    id: string
    criteria_name: string
    avg_rate: number
    active: boolean
    i18n: I18N

}

export interface IBranch {
    name: string,
    address: string,
    level: number,
    id: string
    parent: string
    user_id: string
    mtime: number
    dtime: number

}
export class Branch {
    constructor(private agg: IBranch) { }
    name = this.agg.name || '';
    address = this.agg.address || '';

}
export interface IFilterBranch {
    name: string,
    address: string,
    level: number,
    parent: string,
    id: string,
    selected: boolean
}

// export class FilterBranch{
//     constructor(private br: IFilterBranch) { }
//     name = this.agg.name|| '';
//     address = this.agg.address || '';
// }
const definePipe = {
    branch: 'abc',
    userName: 'name'
}
export interface IDevice {
    format: string,
    name: string,
    branch_id: string,
    campain_id: any,
    id: string
}
export interface IFilterDevice {
    format: string,
    name: string,
    branch_id: string,
    campain_id: any,
    id: string,
    selected: boolean
}
// export interface IFilterDevice {
//     format: string,
//     name: string,
//     branch_id: string
//     selected: boolean
//     id: string
// }

export interface ICampaign {
    id: string
    name: string;
    device_id: any;
    alway: boolean;
    time_live: ITimeLive;
    time_frame: any;
    cycle: any
}
export interface ICycle {
    content_id: string;
    minute: number;
}
export interface ITimeLive {
    from: string;
    come: string;
}
export interface ITimeFrame {
    from: string;
    come: string;
    day_of_week: string;
}
export interface IContent {
    dtime: number,
    id: string,
    images: any[],
    name: string,
    news: any[],
    template: string,
    user_id: string,
    videos: any[],
}
export interface IReportPer{
    id: string,
    mtime: number,
    dtime: number,
    user_id: string,
    branch_id: string,
    ctime: string,
    device_id: string,
    campain_id: string,
    logout_time: string
  }
export var dayOfWeek = [
    { 'id': 'cMon', 'values': 'monday', 'text': 'Mon' },
    { 'id': 'cTue', 'values': 'tuesday', 'text': 'Tue' },
    { 'id': 'cWed', 'values': 'wednesday', 'text': 'Wed' },
    { 'id': 'cThu', 'values': 'thursday', 'text': 'Thu' },
    { 'id': 'cFri', 'values': 'friday', 'text': 'Fri' },
    { 'id': 'cSat', 'values': 'saturday', 'text': 'Sat' },
    { 'id': 'cSun', 'values': 'sunday', 'text': 'Sun' }
]
