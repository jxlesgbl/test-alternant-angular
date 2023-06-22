import { Component } from '@angular/core';
import { DogService } from '../dog.service';
import { Dog } from '../types';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent {
  dogs: Dog[] = []

  constructor(private dogService: DogService) {
  }

  ngOnInit(): void {
    this.getDogs();
  }

  getDogs(): void {
    this.dogService.getDogs().subscribe(dogs => {
      this.dogs = dogs;
    })
  }

  startUpdate(dog: Dog): void {
    dog.editing = true;
  }

  updateDog(dog: Dog): void {
    this.dogService.updateDog(dog).subscribe(updatedDog => {
      const index = this.dogs.findIndex(d => d.id === updatedDog.id);
      if (index !== -1) {
        this.dogs[index] = updatedDog;
      }
      dog.editing = false;
    }, error => {
      console.error(error);
    });
  }

  cancelUpdate(dog :Dog): void{
    this.getDogs();
  }

  deleteDog(dog: Dog): void {
    this.dogService.deleteDog(dog.id).subscribe(() => {
      this.dogs = this.dogs.filter(d => d !== dog);
    });
  }
}
