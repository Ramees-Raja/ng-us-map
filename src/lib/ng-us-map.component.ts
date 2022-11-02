import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgUsMapService } from './ng-us-map.service';

@Component({
  selector: 'ng-us-map',
  templateUrl: './ng-us-map.component.html',
  styles: [
  ]
})
export class NgUsMapComponent implements OnInit {

  @Input() backgroundColor: string = "c9c9c9";
  @Input() strokeColor: string = "white";
  @Input() textColor: string = "858585";
  @Input() statesData: string[] = [];

  @Output() onClickUsMap = new EventEmitter<string>();

  coordinates: any[] = [];

  constructor(private mapService: NgUsMapService) { }

  ngOnInit(): void {
    console.log("statesData", this.statesData);

    let newCordinates: any[] = [];
    this.coordinates = this.mapService.getUsMapCoordinates();
    this.coordinates.forEach((cordinate: any) => {

      this.statesData.forEach((state: any) => {
        if (state.id == cordinate.id) {
          cordinate.backgroundColor = state.backgroundColor;
          newCordinates.push(cordinate);
        }
      });
    });
    console.log("getUsMapCoordinates", this.coordinates, newCordinates);

  }

  onUsMapClick(id: any) {
    this.onClickUsMap.emit(id);
  }

}
