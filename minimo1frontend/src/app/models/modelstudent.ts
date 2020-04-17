
export class Modelstudent {
    name: string;
    address: string;
    phones: [
      {
        home: string;
        work: string;
      }
    ]
    studies : [string];
    
    constructor(name = '', address='', home='', work='', studies = '') {
      this.name = name;
      this.address = address;
      this.phones = [{home, work}];
      //this.phones[0].work= work;
      this.studies = [studies];
      
  }
}
