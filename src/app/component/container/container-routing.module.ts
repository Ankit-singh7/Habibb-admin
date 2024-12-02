import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './container.component';


const routes: Routes = [
  {path:'', 
  component: ContainerComponent, children: [
    {
      path: 'employee',
      loadChildren: () => import('../../../app/component/employee/employee.module').then( m => m.EmployeeModule)
    },
    {
      path: 'operator',
      loadChildren: () => import('../../../app/component/operator/operator.module').then( m => m.OperatorModule)
    },
    {
      path: 'branch',
      loadChildren: () => import('../../../app/component/branch/branch.module').then( m => m.BranchModule)
    },
    {
      path: 'product-list',
      loadChildren: () => import('../../../app/component/product-list/product-list.module').then( m => m.ProductListModule)
    },
    {
      path: 'service-based-product-list',
      loadChildren: () => import('../../../app/component/service-based-product-list/service-based-product-list.module').then( m => m.ServiceBasedProductListModule)
    },
    {
      path: 'service-type',
      loadChildren: () => import('../../../app/component/service-type/service-type.module').then( m => m.ServiceTypeModule)
    },
    {
      path: 'service',
      loadChildren: () => import('../../../app/component/service/service.module').then( m => m.ServiceModule)
    },
    {
      path: 'brand',
      loadChildren: () => import('../../../app/component/brand/brand.module').then( m => m.BrandModule)
    },
    {
      path: 'appointment-list',
      loadChildren: () => import('../../../app/component/appointment-list/appointment-list.module').then( m => m.AppointmentListModule)
    },
    {
      path: 'billing',
      loadChildren: () => import('../../../app/component/billing/billing.module').then( m => m.BillingModule)
    },
    {
      path: 'product-usage-detail',
      loadChildren: () => import('../../../app/component/product-usage-detail/product-usage-detail.module').then( m => m.ProductUsageDetailModule)
    },
    {
      path: 'employee-sales',
      loadChildren: () => import('../../../app/component/employee-sales-report/employee-sales.module').then( m => m.EmployeeSalesModule)
    },
    {
      path: 'customer',
      loadChildren: () => import('../../../app/component/customer/customer.module').then( m => m.CustomerModule)
    },
    {
      path: 'session',
      loadChildren: () => import('../../../app/component/session/session.module').then( m => m.SessionModule)
    },
    {
      path: 'unit',
      loadChildren: () => import('../../../app/component/unit/unit.module').then( m => m.UnitModule)
    },
    {
      path:'report',
      loadChildren: () => import('../../../app/component/ingredient-report/ingredient-report.module').then( m => m.IngredientReportModule)
    },
    {
      path:'product-sales',
      loadChildren: () => import('../../../app/component/product-sales-report/product-sales-report.module').then( m => m.ProductSalesReportModule)
    },
    {
      path:'service-sales',
      loadChildren: () => import('../../../app/component/service-sales-report/service-sales-report.module').then( m => m.ServiceSalesReportModule)
    },
    {
      path:'payment',
      loadChildren: () => import('../../../app/component/payment-mode/payment-mode.module').then( m => m.PaymentModeModule)
    },
    {
      path: 'sm',
      loadChildren: () => import('../../../app/component/stock-manager/stock-manager.module').then( m => m.StockManagerModule)
    },
    {
      path: 'change-pass',
      loadChildren: () => import('../../../app/component/change-password/change-password.module').then( m => m.ChangePasswordModule)
    },

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContainerRoutingModule { }
