import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(orders: any[], searchValue: any): any {
    if (!searchValue) {
      return orders;
    } else {
      searchValue = searchValue.toLocaleLowerCase();
      return orders.filter((item: any) => {
        return item.name.toLocaleLowerCase().indexOf(searchValue) !== -1 ||
        item.email.toLocaleLowerCase().indexOf(searchValue) !== -1 ||
        item.contactNumber.toLocaleLowerCase().indexOf(searchValue) !== -1 ||
        item.orderId.toString().indexOf(searchValue) !== -1 ||
        item.price.toString().indexOf(searchValue) !== -1
      });
    }
  }

}
