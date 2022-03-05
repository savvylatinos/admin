import { Component, OnInit } from '@angular/core';

import { revenueAreaChart, targetsBarChart, salesDonutChart, ordersData } from './data';

import { ChartType, OrdersTable } from './users.model';
import { DataApiService } from '../../../core/services/data-api.service';
import { TixInterface } from '../../../core/models/tix-interface'; 
import { UserInterface } from '../../../core/models/user-interface'; 
import { CardInterface } from '../../../core/models/card-interface'; 
import { QuoteInterface } from '../../../core/models/quote-interface'; 
import { UserWService } from "../../../core/services/user-w.service";
import { ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})


export class UsersComponent implements OnInit {
    public tix:TixInterface;
    public tixs:TixInterface;
    public card:CardInterface;
    public cards:CardInterface;
    public quote:QuoteInterface;
    public users:UserInterface;
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
  getAllCards(){
        this.dataApi.getAllCardsReturn().subscribe((res:any) => {
      if (res[0] === undefined){
        console.log("hey");
       }else{
        this.cards=res;            
        }
     });  
    }

  ngOnInit() {
         this.getAllCards();
    this.breadCrumbItems = [{ label: 'Usuarios', active: true }];

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