export class Modelmodify {
    studentId: string;  //debe ser igual a lo que esta en backend el body.studenId
    subjectId: string;   // es el json entonces si no es igual el json no se envia bien
    constructor(studentId = '', subjectId= ''){
        this.studentId= studentId;
        this.subjectId = subjectId;
      }
}
