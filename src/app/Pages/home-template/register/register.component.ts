import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { DataService } from 'src/app/_core/services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  @ViewChild('registerForm') registerForm: any;

  constructor(private data: DataService) {}

  ngOnInit(): void {}

  register(user: any) {
    user.maNhom = 'GP01';

    this.data.post('QuanLyNguoiDung/DangKy', user).subscribe((result: any) => {
      console.log(result);
    });
  }

  @HostListener('window:beforeunload', ['$event'])
  canDeactivateRegister() {
    return !this.registerForm.dirty;
  }
}
