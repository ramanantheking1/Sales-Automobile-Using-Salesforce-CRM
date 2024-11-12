import { LightningElement, api, track, wire } from 'lwc';

import getInvoices from '@salesforce/apex/OpportunityInvoiceswithLWC.getInvoices';

export default class InvoiceOpportunity extends LightningElement {

  @api recordId;

    @track invoiceCollection

    cols = [

        {label:"ID" , fieldName:'Name'},

        {label:"Opportunity Id" , fieldName:'Opportunity__c'},

        {label:"Quantity" , fieldName:'Quantity__c'},

        {label:"Unit Price" , fieldName:'Unit_Price__c'},

        {label:"Total Price" , fieldName:'Total_Price__c'},

        {label:"Purchase Date" , fieldName:'Purchase_Date__c'}

    ]

    @wire(getInvoices,{OpportunityId:'$recordId'})

    invoicefunction({data,error}){

      console.log(this.recordId +'this is record Id');

          if(data){

             console.log(data);

             this.invoiceCollection = data

          }if(error){

            console.log('this is error')

            console.log('error');

          }

    }

}