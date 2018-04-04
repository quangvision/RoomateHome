import { getSession, filterArea, filterBranches, filterStores, saveBranches } from '../../../x/storage/storage';
import { Http } from '@angular/http';
import { HttpApi } from '../../../x/http/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { IFilterBranch, ServicesService } from './services.service';
@Injectable()
export class FilterBranchService {
  httpApi = new HttpApi(this.http)
  token = { token: getSession('session_id') }
  constructor(private http: Http,
    private service: ServicesService
  ) { }

  public b: IFilterBranch[] = [];

  i: number = 0;
  j: number = 0;
  k: number = 0;
  a: any = []
  BehaviorSubject
  public listArea = new BehaviorSubject<any>(null);
  public listBranches: IFilterBranch[] = [];
  public listStores: IFilterBranch[] = [];
  saveFilterArea() {
    let filterArea: IFilterBranch[] = [];
    let filterBranches: IFilterBranch[] = [];
    let filterStores: IFilterBranch[] = [];
    this.service.getAllBranch().
      map(d => {
        d['selected'] = true
      })
      .subscribe(val => {
        this.a = val;

      })

    if (this.a.length > 0) {
      this.a.forEach(obj => {
        if (obj.level == 0) {
          let test: IFilterBranch = {
            name: '',
            address: '',
            id: '',
            level: null,
            selected: true,
            parent: ''
          }
          filterArea.push(test);
          filterArea[this.i].id = obj.id;
          filterArea[this.i].level = obj.level;
          filterArea[this.i].name = obj.name;
          filterArea[this.i].parent = obj.parent;
          filterArea[this.i].address = obj.address;
          this.i++;
        }
        else if (obj.level == 1) {
          let test: IFilterBranch = {
            name: '',
            address: '',
            id: '',
            level: null,
            selected: true,
            parent: ''
          }
          filterBranches.push(test);
          filterBranches[this.j].id = obj.id;
          filterBranches[this.j].level = obj.level;
          filterBranches[this.j].name = obj.name;
          filterBranches[this.j].parent = obj.parent;
          filterBranches[this.j].address = obj.address;
          this.j++;
        }
        else if (obj.level == 2) {
          let test: IFilterBranch = {
            name: '',
            address: '',
            id: '',
            level: null,
            selected: true,
            parent: ''
          }
          filterStores.push(test);
          filterStores[this.k].id = obj.id;
          filterStores[this.k].level = obj.level;
          filterStores[this.k].name = obj.name;
          filterStores[this.k].parent = obj.parent;
          filterStores[this.k].address = obj.address;
          this.k++;
        }
      })

    }
    this.listArea.next(filterArea);
    console.log(555555555555, this.listArea)
    this.listBranches = filterBranches;
    this.listStores = filterStores;

  }
  public data_store = new BehaviorSubject<any>(null);
  setDataStore(data) {
    this.data_store.next(data)
  }
  public data_device = new BehaviorSubject<any>(null);
  setDataDevice(data) {
    this.data_device.next(data)
  }
}