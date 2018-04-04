import { Component, OnInit, Input } from '@angular/core';
import { IFilterBranch, ServicesService, IFilterDevice } from '../services.service';
import { FilterBranchService } from '../filter-branch.service';

@Component({
  selector: 'app-filter-branch',
  templateUrl: './filter-branch.component.html',
  styleUrls: ['./filter-branch.component.css']
})
export class FilterBranchComponent implements OnInit {
  get selectedAreaParent() {
    return this.area.reduce((types, type) => {
      if (type.selected) {
        types.push(type.id);
        console.log(types)

      } else {
        //xoa mang con
        for (let i = 0; i < this.branch.length; i++) {
          if (this.branch[i].parent == type.id) {
            this.branch[i].selected = false;
          }
        }
      }
      return types;
    }, [])
  }
  get selectedBranchesParent() {
    return this.branch.reduce((types, type) => {
      if (type.selected) {
        this.branch
        types.push(type.id);
        console.log('dsadsa')

      } else {
        //xoa mang con
        for (let i = 0; i < this.store.length; i++) {
          if (this.store[i].parent == type.id) {
            this.store[i].selected = false;
          }
        }
      }
      return types;
    }, [])
  }
  get selectedBranchesCommon() {
    this.branchCommon = this.store.filter(filterlocal => filterlocal.selected === true);
    // this.branchCommon = this.branchCommon.concat(this.filterBranches.filter(filterlocal => filterlocal.selected === true));
    // this.branchCommon = this.branchCommon.concat(this.filterArea.filter(filterlocal => filterlocal.selected === true));
    this.service.setBranchCommon(this.branchCommon);
    return this.store.reduce((types, type) => {
      if (type.selected) {
        types.push(type.id);
      } else {
        //xoa mang con
        for (let i = 0; i < this.allDevice.length; i++) {
          if (this.allDevice[i].branch_id == type.id) {
            this.allDevice[i].selected = false;
          }
        }
      }
      return types;
    }, [])
  }
  // get selectedBranchesCommon() {

  //   this.branchCommon = this.store.filter(filterlocal => filterlocal.selected === true);
  //   this.branchCommon = this.branchCommon.concat(this.branch.filter(filterlocal => filterlocal.selected === true));
  //   this.branchCommon = this.branchCommon.concat(this.area.filter(filterlocal => filterlocal.selected === true));

  //   this.service.setBranchCommon(this.branchCommon);
  //   console.log('common branch', this.branchCommon)
  //   return this.branchCommon.reduce((types, type) => {
  //     if (type.selected) {
  //       types.push(type.id);
  //       console.log('store day ne')
  //     }
  //     return types;
  //   }, [])
  // }
  constructor(
    private service: ServicesService,
    private filterservice: FilterBranchService
  ) { }
  allDevice: IFilterDevice[] = []
  @Input() device: boolean
  ngOnInit() {
    console.log(this.device, 'mxxxxxxxxgg909')
    this.getAllBranch();
    this.service.getAllDevices()
    .map(d_=>{
      d_.map(a => {
        a.selected = true
      })
      return d_
    })
    .subscribe(val => {
      this.allDevice = val
      console.log('000909090333', this.allDevice)
      this.filterservice.setDataDevice(this.allDevice)
    })
  }
  setService() {
    this.dataStore = this.store.filter(val => val.selected === true)
    this.dataDevice = this.allDevice.filter(val => val.selected === true)
    this.filterservice.setDataStore(this.dataStore)
    this.filterservice.setDataDevice(this.dataDevice)
  }
  branchCommon: IFilterBranch[] = []
  allBranch: any
  area: IFilterBranch[] = [];
  branch: IFilterBranch[] = [];
  store: IFilterBranch[] = [];
  dataStore: IFilterBranch[] = [];
  dataDevice: IFilterDevice[] = []
  getAllBranch() {
    this.service.getAllBranch()
      .map(f_ => {
        f_.map(a => {
          a.selected = true
        })
        return f_
      })
      .subscribe(val => {
        this.allBranch = val
        this.area = this.allBranch.filter((area: IFilterBranch) => area.level === 0)
        this.branch = this.allBranch.filter((area: IFilterBranch) => area.level === 1)
        this.store = this.allBranch.filter((area: IFilterBranch) => area.level === 2)
        console.log('ooooooooooooooooooo', this.store)
        this.service.setBranchCommon(this.store);
      })
  }
}
