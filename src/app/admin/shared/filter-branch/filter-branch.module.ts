import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterBranchComponent } from './filter-branch.component';
import { AreaLibPipe, BranchLibPipe, DeviceByBranchLibPipe, DeviceLibByBranchPipe } from '../../../../x/pipe/branchPipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [FilterBranchComponent, AreaLibPipe, BranchLibPipe, DeviceLibByBranchPipe],
  exports: [FilterBranchComponent]

})
export class FilterBranchModule { }
