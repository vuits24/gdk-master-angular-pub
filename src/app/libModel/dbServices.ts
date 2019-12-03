interface QuyenTruyCap {
  id: string; // mã tự sinh
  ten: string;   // bắt buộc
  url: string;
  icon: string;
  phan_loai: 'menu' | 'toolbar';
  hien_thi: boolean;
  cap_tren: string; // id mặc định là root
}

interface NguoiTruyCap {
  id: string; //
  stt: number; // mặc đinh là 1 cho ma_cong_ty.
  ten: string;
  dien_thoai: string;
  email: string;
  url_hinh_anh: string;
  ten_dang_nhap: string;  // * trong thi hien len là chưa tạo
  mat_khau: string;
  tinh_trang: 1 | 0 | -1; // 1:được truy cấp,0: cấm truy cập (khóa) ,-1: nghỉ việc.
  quyen_truy_cap: object;
  cap_tren: string; // root
  liet_ke: boolean; // Mặc định là false
}

interface DoanhNghiep {
  id: string;
  id_stt: number; // mặc định là 1
  ten_doanh_nghiep: string;
  url_hinh_anh: string;
  ten_viet_tat: string;
  so_dien_thoai: string;
  email: string;
  dia_chi: string;
  ghi_chu: string;
  ten_giao_dich: string;
  ma_so_thue: string;
  website: string;
  fax: string;
  loi_chao: string;
  kieu_menu: string;
  mau_chu_dao: string;
}

interface UngDung {
  id: string;
  ten: string;
  kich_hoat: boolean; // false
  quan_ly: string[];  // id của người quan lý,
  db_cf: {
    id: string;
    ten: string;
    loai: 'mysql' | 'mssql' | 'mongodb' | 'oracel' | string;
    host: {
      url: string;
      khoa_bi_mat: string;
    }[];
    su_dung: boolean; // false.
  }[];

}
interface ChucNang {
  id: string;
  ten: string;
  ma_ung_dung: string;
}
interface ChiTietCN {
  id: string;
  ten: string;
  sqltext: string;
  cf_id: string; // id của config đã cấu hình ở trên theo ứng dụng
  xac_thuc: boolean; // false là mặc định
  test: {
    doi_tuong_an: object;
    tham_so_mang: object[];
    tham_so_doi_tuong: object;
    ket_qua: any;
    mo_ta: string;
  };

  thuoc_chuc_nang: string; // id của chức năng
  ma_ung_dung: string; // id ưng dụng
}
