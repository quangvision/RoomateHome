import { Pipe, PipeTransform } from '@angular/core';
import { getItem, getBranches, filterArea, getDevices, getCamp } from '../storage/storage';
import { IBranch, IFilterBranch, IDevice, ICampaign } from '../../app/admin/shared/services.service';
@Pipe({
  name: 'branchName'
})
export class BranchNamePipe implements PipeTransform {
  public data = [];

  transform(id: string) {
    this.data = getBranches().filter((branch: IBranch) => branch.id === id);
    if (this.data[0]) {
      return this.data[0].name;
    }

  }
}
@Pipe({
  name: 'branchDeviceName'
})
export class BranchDeviceNamePipe implements PipeTransform {
  public data = [];

  transform(id: string) {
    this.data = getBranches().filter((branch: IBranch) => branch.id === id);
    if (this.data[0]) {
      return this.data[0].name;
    }

  }
}
@Pipe({
  name: 'branchMonitorDeviceName'
})
export class BranchMonitorDeviceNamePipe implements PipeTransform {
  public data = [];

  transform(id: string) {
    this.data = getBranches().filter((branch: IBranch) => branch.id === id);
    if (this.data[0]) {
      return this.data[0].name;
    }

  }
}
@Pipe({
  name: 'campMonitorName'
})
export class CampMonitorNamePipe implements PipeTransform {
  public data = [];

  transform(id: string) {
    this.data = getCamp().filter((camp: ICampaign) => camp.id === id);
    if (this.data[0]) {
      console.log('xxx909090ppp',this.data[0])
      
      return this.data[0].name;
    }

  }
}
@Pipe({
  name: 'areaFilter'
})
export class AreaFilterNamePipe implements PipeTransform {
  public data = [];



  transform(value: IBranch[]) {

    this.data = getBranches().filter((branch: IBranch) => branch.level === 0);
    return this.data
  }
}
@Pipe({
  name: 'branchFilter'
})
export class BranchFilterNamePipe implements PipeTransform {
  public data = [];

  transform(id: string) {
    return this.data = getBranches().filter((branch: IBranch) => branch.level === 1);
  }
}
@Pipe({
  name: 'storeFilter'
})
export class StoreFilterNamePipe implements PipeTransform {
  public data = [];

  transform(id: string) {
    return this.data = getBranches().filter((branch: IBranch) => branch.level === 2);
  }
}
@Pipe({ name: 'deviceByBranch' })
export class DeviceByBranchPipe implements PipeTransform {
  transform(fabrics: any[], fabricTypes: string[]): any[] {
    if (fabrics) {
      if (!fabricTypes || fabricTypes.length === 0) return fabrics;
      return fabrics.filter(fabric => fabricTypes.includes(fabric.branch_id));
    }

  }

}
@Pipe({ name: 'deviceCampaignByBranch' })
export class DeviceCampaignByBranchPipe implements PipeTransform {
  transform(fabrics: any[], fabricTypes: string[]): any[] {
    if (fabrics) {
      if (!fabricTypes || fabricTypes.length === 0) return null;
      return fabrics.filter(fabric => fabricTypes.includes(fabric.branch_id));
    }

  }

}
@Pipe({ name: 'areaParent' })
export class AreaParentPipe implements PipeTransform {
  transform(fabrics: any[], fabricTypes: string[]): any[] {
    if (!fabricTypes || fabricTypes.length === 0) return null;
    return fabrics.filter(fabric => fabricTypes.includes(fabric.parent));
  }
}
@Pipe({ name: 'branchParent' })
export class BranchParentPipe implements PipeTransform {
  transform(fabrics: any[], fabricTypes: string[]): any[] {
    if (!fabricTypes || fabricTypes.length === 0) return null;
    return fabrics.filter(fabric => fabricTypes.includes(fabric.parent));
  }
}
@Pipe({ name: 'areaCampaignParent' })
export class AreaCampaignParentPipe implements PipeTransform {
  transform(fabrics: any[], fabricTypes: string[]): any[] {
    if (!fabricTypes || fabricTypes.length === 0) return null;
    return fabrics.filter(fabric => fabricTypes.includes(fabric.parent));
  }
}
@Pipe({ name: 'branchCampaignParent' })
export class BranchCampaignParentPipe implements PipeTransform {
  transform(fabrics: any[], fabricTypes: string[]): any[] {
    if (!fabricTypes || fabricTypes.length === 0) return null;
    return fabrics.filter(fabric => fabricTypes.includes(fabric.parent));
  }
}
@Pipe({ name: 'areaListParent' })
export class ListAreaParentPipe implements PipeTransform {
  transform(fabrics: any[], fabricTypes: string[]): any[] {
    if (!fabricTypes || fabricTypes.length === 0) return null;
    return fabrics.filter(fabric => fabricTypes.includes(fabric.parent));
  }
}
@Pipe({ name: 'branchListParent' })
export class ListBranchParentPipe implements PipeTransform {
  transform(fabrics: any[], fabricTypes: string[]): any[] {
    if (!fabricTypes || fabricTypes.length === 0) return null;
    if (fabrics) {
      return fabrics.filter(fabric => fabricTypes.includes(fabric.parent));
    }
  }
}
@Pipe({ name: 'branchCommonListParent' })
export class ListBranchCommonParentPipe implements PipeTransform {
  transform(fabrics: any[], fabricTypes: string[]): any[] {
    if (!fabricTypes || fabricTypes.length === 0) return fabrics;
    if (fabrics) {
      return fabrics.filter(fabric => fabricTypes.includes(fabric.parent));

    }
  }
}

@Pipe({ name: 'areaLibParent' })
export class AreaLibPipe implements PipeTransform {
  transform(fabrics: any[], fabricTypes: string[]): any[] {
    if (!fabricTypes || fabricTypes.length === 0) return null;
    return fabrics.filter(fabric => fabricTypes.includes(fabric.parent));
  }
}
@Pipe({ name: 'branchLibParent' })
export class BranchLibPipe implements PipeTransform {
  transform(fabrics: any[], fabricTypes: string[]): any[] {
    if (!fabricTypes || fabricTypes.length === 0) return null;
    return fabrics.filter(fabric => fabricTypes.includes(fabric.parent));
  }
}
@Pipe({ name: 'deviceLibBranch' })
export class DeviceByBranchLibPipe implements PipeTransform {
  transform(fabrics: any[], fabricTypes: string[]): any[] {
    if (fabrics) {
      if (!fabricTypes || fabricTypes.length === 0) return null;
      return fabrics.filter(fabric => fabricTypes.includes(fabric.branch_id));
    }

  }

}
@Pipe({ name: 'deviceLibByBranch' })
export class DeviceLibByBranchPipe implements PipeTransform {
  transform(fabrics: any[], fabricTypes: string[]): any[] {
    if (fabrics) {
      if (!fabricTypes || fabricTypes.length === 0) return null;
      return fabrics.filter(fabric => fabricTypes.includes(fabric.branch_id));
    }

  }

}

@Pipe({
  name: 'deviceReportName'
})
export class DeviceReportNamePipe implements PipeTransform {
  public data = [];

  transform(id: string) {
    this.data = getDevices().filter((device: IDevice) => device.id === id);
    if (this.data[0]) {
      return this.data[0].name;
    }

  }
}
@Pipe({
  name: 'branchReportName'
})
export class BranchReportNamePipe implements PipeTransform {
  public data = [];

  transform(id: string) {
    this.data = getBranches().filter((branch: IBranch) => branch.id === id);
    if (this.data[0]) {
      return this.data[0].name;
    }

  }
}
@Pipe({
  name: 'branchParentReport'
})
export class BranchParentReportPipe implements PipeTransform {
  public data = [];
  public parent = []
  transform(id: string) {

    this.data = getBranches().filter((branch: IBranch) => branch.id === id);
    if (this.data[0]) {
      this.parent = getBranches().filter((branch: IBranch) => branch.id === this.data[0].parent);
      return this.parent[0].name;
    }

  }
 
}
@Pipe({ name: 'deviceReportByBranch' })
export class DeviceReportByBranchPipe implements PipeTransform {
  transform(fabrics: any[], fabricTypes: string[]): any[] {
    if (fabrics) {
      if (!fabricTypes || fabricTypes.length === 0) return fabrics;
      return fabrics.filter(fabric => fabricTypes.includes(fabric.branch_id));
    }

  }

}