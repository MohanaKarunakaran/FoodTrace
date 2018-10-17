import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Cattle } from 'src/app/cattle';
import { FarmerComponent } from './farmer/farmer.component';
import { ProcessinghouseComponent } from './processinghouse/processinghouse.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
//import { Http } from '../../node_modules/@angular/http';
//import { Cattles } from './cattle';


const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  public getassetid(AssetId): Observable<any> {
   return this.http.get( API_URL + '/farmer?assetid='+AssetId );
          
   }

   public getphdetails(AssetId,userid): Observable<any> {
    return this.http.get( API_URL + '/farmer?assetid='+AssetId+'&&userid='+userid );
           
    }

    public getwhdetails(AssetId,userid): Observable<any> {
      return this.http.get( API_URL + '/processingHouse?assetid='+AssetId+'&&userid='+userid );
             
      }

    public getphdetailsoutbound(AssetId): Observable<any> {
      return this.http.get( API_URL + '/processingHouse?assetid='+AssetId);
             
      }
     debugger;
      public getwhdetailsoutbound(AssetId): Observable<any> {
        return this.http.get( API_URL + '/wareHouse?assetid='+AssetId);
               
        }  
  
    public mdetails(AssetId): Observable<any> {
        return this.http.get( API_URL + '/processingHouse?assetid='+AssetId);
               
        }
     public mdetailswh(AssetId): Observable<any> {
          return this.http.get( API_URL + '/wareHouse?assetid='+AssetId);
                 
          }
     public transfer(Sensor): Observable<any> {
          //   var response = response();
          //  response.getRequest("Cache-Control","no-cache,no-store,must-revalidate");
          // response.getRequest("Pragma","no-cache");
          //   response.getRequest("Expires","0");
        return this.http.get( API_URL + '/iotdata?senser='+Sensor
      //  {
      //    headers:{"Cache-Control":"no-cache,no-store,must-revalidate",
      //    "Pragma":"no-cache","Expires":"0"} }
      ); 
          }
    
    // will use this.http.get()
    public addfarmer(farmerInfo) {
      var headers=new Headers();
      headers.append("Content-Type","application/json");
      var options={
        headers:headers
      };
      return this.http.post(API_URL + '/farmer',farmerInfo);
    }

    public createOutbound(processinghouse) {
      var headers=new Headers();
      headers.append("Content-Type","application/json");
      var options={
        headers:headers
      };
      return this.http.post(API_URL + '/processingHouse',processinghouse);
    }

    public getcattledetails(AssetId): Observable<any> {
      return this.http.get( API_URL + '/farmer?assetid='+AssetId );
             
      }
}