import { Component, OnInit } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { DoctorService } from '../../services/doctor.service';
import { DoctorResponse } from '../../responses/doctor.response';
import { ResponseObject } from '../../responses/api.response';
import { SpecialtyService } from '../../services/specialty.service';
import { SpecialtyResponse } from '../../responses/specialty.response';
import { LocationResponse } from '../../responses/location.response';
import { LocationService } from '../../services/location.service';
import { MedicalFacilityType } from '../../enums/facility-type';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    FontAwesomeModule
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements OnInit{
  // Icons
  faMagnifyingGlass = faMagnifyingGlass;

  showMore = false;

  doctors!: DoctorResponse[];
  specialties!: SpecialtyResponse[];
  specialtiesHead!: SpecialtyResponse[];
  hospitals: LocationResponse[] = [];
  clinics: LocationResponse[] = [];

  constructor(
    private doctorService : DoctorService,
    private specialtyService : SpecialtyService,
    private locationService : LocationService
  ) {

  }

  ngOnInit(): void {
    this.getDoctors();
    this.getSpecialties();
    this.getLocations();
  }

  getDoctors() : void {
    this.doctorService.doctors$.subscribe({
      next: (response : ResponseObject) => {
        this.doctors = response.data;
      },
      error: (error : any) => {
        console.log(error);
      }
    })
  }

  getSpecialties() : void {
    this.specialtyService.specialties$.subscribe({
      next: (response : ResponseObject) => {
        this.specialties = response.data;
        // this.specialtiesHead = this.specialties.splice(0, 6);
      },
      error: (error : any) => {
        console.log(error);
      }
    })
  }

  getLocations() : void {
    this.locationService.locations$.subscribe({
      next: (response : ResponseObject) => {
        response.data.forEach((location : LocationResponse) => {
          const type = location.medical_facility.type;
          if(type == MedicalFacilityType.HOSPITAL){
            this.hospitals.push(location);
            return;
          }
          this.clinics.push(location);
        });
      },
      error: (error : any) => {
        console.log(error);
      }
    })
  }

  getIcon(name : string) : string {
    switch(name){
      case "Y học cổ truyền":
        return "yhoccotruyen.png";
      case "Truyền nhiễm":
        return "truyennhiem.png";
      case "Tim mạch":
        return "timmach.png";
      case "Lão khoa":
        return "laokhoa.png";
      case "Chấn thương chỉnh hình":
        return "chanthuongchinhhinh.png";  
      case "Gây mê hồi sức":
        return "gaymehoisuc.png";
      case "Y học dự phòng":
          return "yhocduphong.png";
      case "Nội thận":
          return "noithan.png";
      case "Tai - Mũi - Họng":
          return "taimuihong.png";
      case "Nội tiết":
          return "noitiet.png";  
      case "Tâm thần":
        return "tamthan.png";
      case "Hô hấp":
        return "hohap.png";
      case "Xét nghiệm":
        return "xetnghiem.png";
      case "Huyết học":
        return "huyethoc.png";
      case "Ung bướu":
        return "ungbuou.png";  
      case "Nội thần kinh":
        return "noithankinh.png";
      case "Lao - Bệnh phổi":
        return "laobenhphoi.png";
      case "Ngoại thần kinh":
          return "ngoaithankinh.png";
      case "Y học thể thao":
        return "yhocthethao.png";
      case "Cơ xương khớp":
        return "coxuongkhop.png";  
      case "Sản phụ khoa":
        return "sanphukhoa.png";
      case "Nhãn khoa":
        return "nhankhoa.png";
      case "Nam khoa":
        return "namkhoa.png";
      case "Vô sinh hiếm muộn":
        return "vosinhhiemmuon.png";
      case "Ngoại tiết niệu":
        return "ngoaitietnieu.png";  
      case "Nội tổng quát":
        return "noitongquat.png";
      case "Răng - Hàm - Mặt":
        return "ranghammat.png";
      case "Ngoại niệu":
        return "ngoainieu.png";
      case "Dinh dưỡng":
        return "dinhduong.png";
      case "Tiêu hoá":
        return "tieuhoa.png";  
      case "Nhi khoa":
        return "nhikhoa.png";
      case "Da liễu":
        return "dalieu.png";
      case "Ngoại lồng ngực - mạch máu":
        return "ngoailongngucmachmau.png";
      case "Chẩn đoán hình ảnh":
        return "chandoanhinhanh.png";
      case "Ngôn ngữ trị liệu":
        return "ngonngutrilieu.png";  
      case "Phục hồi chức năng - Vật lý trị liệu":
        return "vatlitrilieu.png";
      case "Phẫu thuật tạo hình (Thẩm mỹ)":
        return "phauthuattaohinhthammy.png";
      case "Tâm lý":
        return "tamly.png";
      case "Hồi sức cấp cứu":
        return "hoisuccapcuu.png";
      case "Ngoại tổng quát":
        return "ngoaitongquat.png";
    }

    return "Unknown";
  }

  changeShowMore() {
    this.showMore = !this.showMore;
  }

}
