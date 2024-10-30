import { Component, OnInit } from '@angular/core';
import { DoctorResponse } from '../../../responses/doctor.response';
import { DoctorService } from '../../../services/doctor.service';
import { ResponseObject } from '../../../responses/api.response';
import { SpecialtyResponse } from '../../../responses/specialty.response';
import { SpecialtyService } from '../../../services/specialty.service';
import { DoctorsComponent } from "../../doctors/doctors.component";

@Component({
  selector: 'app-make-doctors-appointment',
  standalone: true,
  imports: [DoctorsComponent],
  templateUrl: './make-doctors-appointment.component.html',
  styleUrl: './make-doctors-appointment.component.scss'
})
export class MakeDoctorsAppointmentComponent implements OnInit {
  specialties!: SpecialtyResponse[];

  constructor(
    private doctorService : DoctorService,
    private specialtyService : SpecialtyService
  ) {}


  ngOnInit(): void {
    this.getSpecialties();
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
      case "Lao - bệnh phổi":
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



  getSpecialties() : void {
    this.specialtyService.specialties$.subscribe({
      next: (response : ResponseObject<SpecialtyResponse[]>) => {
        this.specialties = response.data;
      },
      error: (error : any) => {
        console.log(error);
      }
    })
  }

}
