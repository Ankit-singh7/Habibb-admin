import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/service/loader/loader.service';
import * as moment from 'moment';
import swal from 'sweetalert2';
import { SalesService } from 'src/app/service/sales/sales.service';
import { UserService } from 'src/app/service/user/user.service';
import { BranchService } from 'src/app/service/branch/branch.service';
import { BillingService } from 'src/app/service/billing/billing.service';

@Component({
  selector: 'app-product-sales-report',
  templateUrl: './product-sales-report.component.html',
  styleUrls: ['./product-sales-report.component.css']
})
export class ProductSalesReportComponent implements OnInit {
  public name: any[] = [];
  public field: string;
  public sortOrder = false;
  public sortFields = {
    quantity: true,
    product_name: true,
  };
  public reportList = [];
  public response = 'No Data to Show';
  public selectedStartDate: any
  public selectedEndDate: any
  public total: any;
  public employeeList = [];
  public branchList = [];
  public yearWiseReportList = [];
  selectedTab = 'custom';
  selectedYear = new Date().getFullYear();
  public lastTenYears = Array.from({ length: 10 }, (_, index) => new Date().getFullYear() - index);
  selectedPerPage = 10000000;
  currentpage: number = 1;
  totalPage: number;
  prodSC = '';
  prodSY = '';

  @ViewChild('closeEditModal') closeEditModal: ElementRef;
  selectedBranchId: any;
  selectedEmployee: string;
  selectedMonth = 1;
  selectedYearWiseBranchId: any;
  selectedYearWiseEmployeeId: any;

  constructor(private router: Router,
    private salesService: SalesService,
    private userService: UserService,
    private branchService: BranchService,
    private billingService: BillingService,
    private ui: LoaderService) { }

  ngOnInit(): void {
    this.getAllReport()
    this.getAllBranch()
    this.getAllEmployee()
    this.getYearWiseSalesReport(this.selectedYear);
  }

  toggleTab(val) {
    this.selectedTab = val;
  }

  toggleMonth(val) {
    this.selectedMonth = val;
  }

  getAllEmployee = () => {
    this.userService.getAllEmployee('', 100000, 1).subscribe((res) => {
      if (res.data) {
        let tempArr = res.data.result.map((item) => ({
          id: item.user_id,
          name: `${item.f_name} ${item.l_name}`
        }))
        let obj = { id: '', name: 'All' }
        this.employeeList = [obj, ...tempArr]
      }
    })
  }

  getAllBranch = () => {
    this.branchService.getBranchList().subscribe((res) => {
      if (res.data) {
        let tempArr = res.data.map((item) => ({
          id: item.branch_id,
          name: item.branch_name
        }))
        let obj = { id: '', name: 'All' }
        this.branchList = [obj, ...tempArr]

      }
    })
  }

  onOptionSelect(option, val) {
    if (option === 'branch') {
      if (val === 'ALL') {
        this.selectedBranchId = ''
      } else {

        this.selectedBranchId = val
      }
    } else if (option === 'employee') {
      if (val === 'ALL') {
        this.selectedEmployee = ''
      } else {
        this.selectedEmployee = val
      }
    } else if (option === 'year') {
      this.selectedYear = val;
      this.getYearWiseSalesReport(this.selectedYear);
    }
    this.getAllReport()
  }

  onYearOptionSelect(option, val) {
    if (option === 'branch') {
      if (val === 'ALL') {
        this.selectedYearWiseBranchId = ''
      } else {

        this.selectedYearWiseBranchId = val
      }
    } else if (option === 'employee') {
      if (val === 'ALL') {
        this.selectedYearWiseEmployeeId = ''
      } else {
        this.selectedYearWiseEmployeeId = val
      }
    }
    this.getYearWiseSalesReport(this.selectedYear);
  }

  getAllReport() {

    let data = {
      startDate: moment(this.selectedStartDate).format('DD-MM-YYYY'),
      endDate: moment(this.selectedEndDate).format('DD-MM-YYYY'),
      branch_id: this.selectedBranchId,
      employee_id: this.selectedEmployee
    }
    let filterStr = '';
    for (let item in data) {
      if (data[item]) {
        filterStr = `${filterStr}${item}=${data[item]}&`
      }
    }
    this.ui.loader.show()
    this.billingService.getBillingList(this.selectedPerPage, this.currentpage, filterStr).subscribe((res) => {
      this.reportList = [];
      if (res?.data?.result) {
        let arr1 = JSON.parse(JSON.stringify(res.data.result))
        let reports = [];
        for (let item of arr1) {
          if (item.products.length > 0) {
            for (let product of item.products) {
              reports.push(product)
            }
          }
        }
        for (let i = 0; i < arr1.length; i++) {
          let tempArr = reports.filter((item) => item?.product_id === reports[i]?.product_id)
          if (tempArr.length > 1) {
            let newObj = JSON.parse(JSON.stringify(tempArr[0]))
            let quantity = 0;
            for (let j = 0; j < tempArr.length; j++) {
              quantity = quantity + tempArr[j].quantity
            }
            newObj.quantity = quantity;
            if (!this.reportList.some(item => item.product_id === newObj.product_id)) {
              this.reportList.push(Object.assign({}, newObj))
            }
          } else {
            this.reportList.push(tempArr[0])
          }
        }
      }
      this.ui.loader.hide()
      this.reportList = this.reportList.filter(item => item !== undefined && Object.values(item).every(val => val !== undefined));

      console.log(this.reportList);
    }, err => {
      this.ui.loader.hide()
    })
  }

  onDateSelect() {
    if (!this.selectedStartDate) {
      swal.fire({
        icon: 'warning',
        title: 'Please Select Start Date',
        showConfirmButton: false,
        timer: 1500
      })
    } else if (!this.selectedEndDate) {
      swal.fire({
        icon: 'warning',
        title: 'Please Select End Date',
        showConfirmButton: false,
        timer: 1500
      })
    } else {
      this.getAllReport()
    }
  }

  onLimitSelect = (val) => {
    this.selectedPerPage = val
    this.getAllReport()
  }

  public changeOrder(field) {
    this.sortOrder = !this.sortOrder;
    this.field = field;
    this.sortFields[field] = this.sortOrder;
    this.reportList.sort((a, b) => {
      if (field === 'quantity' || field === 'quantity') {
        return !this.sortOrder ? a[field] - b[field] : b[field] - a[field];
      } else {
        return !this.sortOrder ? a[field].localeCompare(b[field]) : b[field].localeCompare(a[field]);
      }
    });
  }


  changedDate(date, val) {
    if (date === 'start') {
      this.selectedStartDate = val

    } else if (date === 'end') {
      this.selectedEndDate = val
    }
  }

  getYearWiseSalesReport(year) {
    let data = {
      branch_id: this.selectedYearWiseBranchId,
      employee_id: this.selectedYearWiseEmployeeId
    }
    let filterStr = '';
    for (let item in data) {
      if (data[item]) {
        filterStr = `${filterStr}${item}=${data[item]}&`
      }
    }
    this.ui.loader.show();
    this.salesService.getProductYearWiseSalesReport(year, filterStr).subscribe((res) => {
      this.yearWiseReportList = [];
      const tempData = res;
      if (res?.data) {
        let month = 1;
        for (let item of res?.data) {
          let productList = JSON.parse(JSON.stringify(item.result))
          const combinedProducts = {};

          productList.forEach(product => {
            const productId = product.product_id;
            const productQuantity = product.quantity || 0;

            if (combinedProducts[productId]) {
              combinedProducts[productId].quantity += productQuantity;
            } else {
              combinedProducts[productId] = {
                product_id: productId,
                product_name: product.product_name,
                quantity: productQuantity
              };
            }
          });

          const resultArray = Object.values(combinedProducts);
          this.yearWiseReportList.push({ month: month, result: resultArray })
          month++;
        }
      }
      this.ui.loader.hide()
    })
  }


  logout = () => {
    localStorage.setItem('isLoggedIn', String(false));
    this.router.navigate(['/login']);
  }


}
