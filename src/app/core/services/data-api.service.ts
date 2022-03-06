import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }  from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

 import { TixInterface } from '../models/tix-interface';
// import { SaleInterface } from '../models/sale-interface';
import { CardInterface } from '../models/card-interface';
import { OrderInterface } from '../models/order-interface';
import { UserInterface } from '../models/user-interface';
import { QuoteInterface } from '../models/quote-interface';
// import { InfoInterface } from '../models/info-interface';
import { UserWService } from "./user-w.service";

@Injectable({
  providedIn: 'root'
})
export class DataApiService {
	// info: Observable<any>;
	 orders: Observable<any>;
	 tix: Observable<any>; 
	 tixs: Observable<any>;
	 card: Observable<any>; 
	 cards: Observable<any>;
	 quote: Observable<any>; 
	 quotes: Observable<any>;
	 users: Observable<any>;
	// sale: Observable<any>;
	order: Observable<any>;
  constructor(
  	public _uw:UserWService,
  	private http: HttpClient
  	) {}
  	headers : HttpHeaders = new HttpHeaders({
  		"Content-Type":"application/json"
  	
  		});
 //  	updateTix(tix :TixInterface, id: string){
	// 	// let token = this.authService.getToken();
	// 	const url_api=`https://db.buckapi.com:3025/api/tixes/${id}`;
	// 	return this.http
	// 	.put<TixInterface>(url_api, tix)
	// 	.pipe(map(data => data));
//}
	getAllTixs(){
		const url_api = 'https://db.buckapi.com:3070/api/tixes?filter[where][status]=activated';
		return this.http.get(url_api);
	}
 		getTamano(){
	 	const url_api = 'https://db.buckapi.com:3070/api/quote?filter[where][flag]=svv';
	 	return (this.quotes = this.http.get(url_api));
	 }
	getAllQuotes(){
		const url_api = 'https://db.buckapi.com:3070/api/order?filter[where][orderType]=appointment';
		return this.http.get(url_api);
	}
		saveTixFree(tix :TixInterface){
	//	let token = this.authService.getToken();
		const url_api='https://db.buckapi.com:3070//api/tixes';
		return this.http
		.post<TixInterface>(url_api, tix)
		.pipe(map(data => data));
	}
	// getTamanoIni(){
	// 	const url_api = 'https://db.buckapi.com:3025/api/tixes?filter[where][initload]=activated';
	// 	return (this.tixs = this.http.get(url_api));
	// }
 		getAllTixsReturn(){
		const url_api = 'https://db.buckapi.com:3070/api/tixes?filter[where][status]=activated';
		return (this.tixs = this.http.get(url_api));
	}
	getAllQuotesReturn(){
		const url_api = 'https://db.buckapi.com:3070/api/quotes?filter[where][flag]=svv';
		return (this.quotes = this.http.get(url_api));
	}
	getAllCardsReturn(){
		const url_api = 'https://db.buckapi.com:3070/api/card?filter[where][status]=new';
		return (this.cards = this.http.get(url_api));
	}
	// getAllTixsInitload(){
	// 	const url_api = 'https://db.buckapi.com:3025/api/tixes?filter[where][initload]=activated';
	// 	return this.http.get(url_api);
	// }
	// getInfo(){
	// 	const url_api=`https://db.buckapi.com:3025/api/infos/`;
	// 	this.info = this.http.get(url_api);
	// 	return (this.info);
	// }
	// saveSale(sale :SaleInterface){
	// 	const url_api='https://db.buckapi.com:3025/api/sale';
	// 	return this.http
	// 	.post<SaleInterface>(url_api, sale)
	// 	.pipe(map(data => data));
	// }
	saveOrder(order :OrderInterface){
		const url_api='https://db.buckapi.com:3025/api/order';
		return this.http
		.post<OrderInterface>(url_api, order)
		.pipe(map(data => data));
	}
// sendMailNewBookAppToAdmin(book){
// 		const url_api='https://email.penguinscleaning.ca:3005/newBookAppToAdmin';
// 		return this.http
// 		.post(url_api, book)
// 		.pipe(map(data => data));
// 	}
	updateOrder(order :OrderInterface, id: string){
		// let token = this.authService.getToken();
		const url_api=`https://db.buckapi.com:3025/api/order/${id}`;
		return this.http
		.put<OrderInterface>(url_api, order)
		.pipe(map(data => data));
	}
	getOrderByNpedido(npedido: string){
		const url_api = `https://db.buckapi.com:3025/api/order?filter[where][npedido]=${npedido}`;
		this.order = this.http.get(url_api);
		return (this.order);

		// return this.http.get(url_api);

		// return this.http.get(url_api);
	}

		// let indice = id;
		// const url_api=`https://db.andesproadventures.com:3018/api/book/${indice}`;
		// this.book = this.http.get(url_api);
		// return (this.book);


		// this.info = this.http.get(url_api);
		// return (this.info);
}