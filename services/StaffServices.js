import axios from "axios";

export class StaffServices {
  static serverURL = "http://localhost:9000";

  static getAllStaffs() {
    let dataURL = `${this.serverURL}/staffs`;
    return axios.get(dataURL);
  }

  static getStaff(staffId) {
    let dataURL = `${this.serverURL}/staffs/${staffId}`;
    return axios.get(dataURL);
  }

  static createStaff(staff) {
    let dataURL = `${this.serverURL}/staffs/`;
    return axios.post(dataURL, staff);
  }
  static updateStaff(staff, staffId) {
    let dataURL = `${this.serverURL}/staffs/${staffId}`;
    return axios.put(dataURL, staff);
  }
  static deleteStaff(staffId) {
    let dataURL = `${this.serverURL}/staffs/${staffId}`;
    return axios.delete(dataURL);
  }
}
