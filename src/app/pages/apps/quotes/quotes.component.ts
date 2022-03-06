import { Component, OnInit } from '@angular/core';

import { revenueAreaChart, targetsBarChart, salesDonutChart, ordersData } from './data';

import { ChartType, OrdersTable } from './quotes.model';
import { DataApiService } from '../../../core/services/data-api.service';
import { TixInterface } from '../../../core/models/tix-interface'; 
import { QuoteInterface } from '../../../core/models/quote-interface'; 
import { UserWService } from "../../../core/services/user-w.service";
import { ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})


export class QuotesComponent implements OnInit {
    public tix:TixInterface;
    public tixs:TixInterface;
    public quote:QuoteInterface;
    public quoteDetail:QuoteInterface;
    public quotes:QuoteInterface;
  breadCrumbItems: Array<{}>;
  constructor(  private dataApi: DataApiService,
    public _uw:UserWService,
    private location: Location,
        private route:ActivatedRoute,
    private router: Router) { }

  revenueAreaChart: ChartType;
  targetsBarChart: ChartType;
  salesDonutChart: ChartType;
  ordersData: OrdersTable[];
  getAllQuotes(){
        this.dataApi.getAllQuotesReturn().subscribe((res:any) => {
      if (res[0] === undefined){
        console.log("hey");
       }else{
        this.quotes=res;            
        }
     });  
    }
    loadDetail(quote:QuoteInterface){
      let quoteTo=quote;
      //console.log(email);
      this.quoteDetail=quoteTo;
    }
  ngOnInit() {
    this.quoteDetail={};
    this.getAllQuotes();
    this.breadCrumbItems = [{ label: 'Solicitudes', active: true }];

    /**
     * Fetches the data
     */
    this._fetchData();
  }

  /**
   * fetches the dashboard value
   */
  private _fetchData() {
    this.revenueAreaChart = revenueAreaChart;
    this.targetsBarChart = targetsBarChart;
    this.salesDonutChart = salesDonutChart;
    this.ordersData = ordersData;
  }
}