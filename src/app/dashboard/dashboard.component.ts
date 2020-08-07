import { Component, OnInit } from '@angular/core';
import {CovidserviceService}from '../covidservice.service';
import {Chart} from 'chart.js';
import { from } from 'rxjs';
import { XlsxExporterService } from 'mat-table-exporter';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  result:any=[];
  chart=[];
  
totalactive:number;
totalconfirmed:number;
totalrecovered:number;

  days:number;
death:number;
states:any=[];
confirmed:any=[];
recovered:any=[];
deaths:any=[];
listcases:any=[];
updatedtime:any;
cases:any=[];
i:number;
fileName="covid19.xlsx"
  constructor(private obj:CovidserviceService) {
    
   }

  ngOnInit(): void {
    let obj=this.obj.getStatus();
    obj.subscribe((response)=>
    {
      this.result=response;
      for( let i=0;i<this.result.statewise.length;i++){
        this.listcases[i] = this.result.statewise[i];
        console.log(this.listcases[i])
        
    }
      this.totalactive=this.result.statewise[0].active;
      this.totalconfirmed=this.result.statewise[0].confirmed;
      this.totalrecovered=this.result.statewise[0].recovered;
      this.death=this.result.statewise[0].deaths;
      console.log(this.result)
      console.log(this.totalactive)
      console.log(this.totalconfirmed)
      console.log(this.totalrecovered)
      for(let i=1;i<this.result.statewise.length;i++){
        this.states[i]=this.result.statewise[i].state;
        this.confirmed[i]=this.result.statewise[i].confirmed;
        this.recovered[i]=this.result.statewise[i].recovered;
        this.deaths[i]=this.result.statewise[i].deaths;
        console.log(this.states[i])
      }
      this.updatedtime=this.result.statewise[0].lastupdatedtime;
      console.log(this.updatedtime)


      //  console.log(this.result.cases_time_series);
      //  this.days=this.result.cases_time_series.length;
      //  for(let i=0;i<this.result.cases_time_series.length;i++){
      //  this.dailycases=this.result.cases_time_series[i].totalconfirmed;
      // //console.log(this.result.cases_time_series[i].totalconfirmed)
      //  console.log(this.dailycases)


      this.chart=new Chart('canvas',{
     type:'line',
   data:{
     labels:this.states,
      datasets:[
         {
           label:'Confirmed Cases',
            data:this.confirmed,
            backgroundColor:"yellow",
            borderColor:"red",
            fill:false,
        },
        {
          label:'Recovered  Cases',
          data:this.recovered,
          backgroundColor:"green",
          borderColor:"red",
          fill:false,

        },
        {
          label:'Deceased',
          data:this.deaths,
          backgroundColor:"red",
          borderColor:"red",
          fill:false,
        }
     ]
    }
 })
    

  })

  

}
exportexcel():void{
  let element=document.getElementById("excel-table");
  const ws:XLSX.WorkSheet=XLSX.utils.table_to_sheet(element);

  const wb:XLSX.WorkBook=XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb,ws,"Sheet1");
  XLSX.writeFile(wb,this.fileName);

}
}
