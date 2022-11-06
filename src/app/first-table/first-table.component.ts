import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { Component, OnInit } from '@angular/core';
import { settings } from '../settings';
import {
  GridApi,
  GridReadyEvent
} from '@ag-grid-community/core';
import { MockData } from '../mock-data';

@Component({
  selector: 'app-first-table',
  templateUrl: './first-table.component.html',
  styleUrls: ['./first-table.component.css']
})
export class FirstTableComponent implements OnInit {
  columnDefs = [
    // { headerName: 'Make', field: 'make' },
    // { headerName: 'Model', field: 'model' },
    // { headerName: 'Price', field: 'price' }
  ];

  rowData = [{
    "MsgID": "636642fc78344ce18cc8e4df",
    "CreDtTm": "2014-11-06T07:34:51.262Z",
    "SttlmDt": "2010-02-01T13:59:19.551Z",
    "CptyRiad": "636642fc91995049d0a9d897",
    "OpeTp": "5019b171-8995-47ed-b027-631a9536a211",
    "CCRef": "7f4f9ba7-4108-4f5d-86a3-d30df1d86b18",
    "ECMSCCId": "636642fc3304a6d23c0b75a3",
    "InstrId": "08ad210d-952c-4734-b8fe-1ec68aaae7d9",
    "InstrSts": "excepteur",
    "RjctRsn": "id commodo",
    "MsgId_PR": "id",
    "SfkpgAcct": 12946
  },
  {
    "MsgID": "636642fc8b4996adebf1af35",
    "CreDtTm": "2012-04-20T08:36:04.121Z",
    "SttlmDt": "2014-01-28T11:02:31.680Z",
    "CptyRiad": "636642fc7f4c1d33edaaae59",
    "OpeTp": "5b5bf15f-c89d-47b9-a062-6e567ad968f1",
    "CCRef": "718fb61c-38f6-4921-a15a-4da192db82ac",
    "ECMSCCId": "636642fc8d590af72d358e8b",
    "InstrId": "57269d6e-c7a8-425b-9808-aa2399625c6c",
    "InstrSts": "laborum",
    "RjctRsn": "irure dolore",
    "MsgId_PR": "dolore",
    "SfkpgAcct": 12642
  }]
  modules = [ClientSideRowModelModule];
  agGridSettings = settings;
  gridOptionsTest = this.agGridSettings;
  gridApi: GridApi;

  constructor(
    // private mockData: MockData
  ) { }

  ngOnInit() {
    // this.mockData.getTable1data().subscribe((table1Data: any[]) => {
    //   console.log(table1Data);
    //   // this.schools = schools;
    // });
    // this.columnDefs = this.rowData[0]
    Object.keys(this.rowData[0]).forEach((item) => {
      this.columnDefs.push({ headerName: item, field: item });
    })

  }

  onFilterTextBoxChanged() {
    this.gridApi.setQuickFilter(
      (document.getElementById('filter-text-box') as HTMLInputElement).value
    );
  }
  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
  }

}
