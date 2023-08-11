import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { FormComponent } from '../form/form.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditformComponent } from '../editform/editform.component';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
})
export class UserlistComponent implements OnInit {
  students!: Student[];
  constructor(private studentService: StudentService, private obj: NgbModal) {}

  ngOnInit(): void {
    this.getStudents();
  }

  private getStudents() {
    this.studentService.getStudentList().subscribe((data) => {
      this.students = data;
    });
  }
  openModal(){
    const modalRef=this.obj.open(EditformComponent,{ centered: true});
  }
}
