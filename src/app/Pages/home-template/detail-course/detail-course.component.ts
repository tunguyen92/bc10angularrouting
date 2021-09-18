import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/_core/services/data.service';

@Component({
  selector: 'app-detail-course',
  templateUrl: './detail-course.component.html',
  styleUrls: ['./detail-course.component.scss'],
})
export class DetailCourseComponent implements OnInit {
  id: any;
  course: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private data: DataService
  ) {}

  ngOnInit(): void {
    this.getParamsFromUrl();
    this._getDetailCourse();
  }

  getParamsFromUrl() {
    //lay 1 param tu URL
    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    //lay nhieu param tu URL
    this.activatedRoute.queryParams.subscribe((params: any) => {
      console.log(params);
    });
  }

  _getDetailCourse() {
    this.data.getDetailCourse(this.id).subscribe((result: any) => {
      this.course = result;
      console.log(result);
    });
  }
}
