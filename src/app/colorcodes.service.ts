import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorcodesService {

  constructor() { }
  title = 'wedding';
  bgCodes = {
    brown: "bg-[#F8EDE3]",
    skyBlue: "bg-[#5BC0F8]",
    pBlue: "bg-[#82AAE3]",
    navyBlue: "bg-[#0A2647]",
    purple: "bg-[#251749]"
  };
  textCodes = {
    brown: "text-[#F8EDE3]",
    skyBlue: "text-[#5BC0F8]",
    pBlue: "text-[#82AAE3]",
    navyBlue: "text-[#0A2647]",
    purple: "text-[#251749]",
  };
  miscProps = {
    brown: "border-[#F8EDE3]",
    skyBlue: "border-[#5BC0F8]",
    pBlue: "border-[#82AAE3]",
    navyBlue: "border-[#0A2647]",
    purple: "border-[#251749]",
  }
  getTextCodes(): Object{
    return this.textCodes;
  }
}
