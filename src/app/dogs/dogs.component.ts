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
  }

  getDogs(): void {
  }

  updateDog(dog: Dog): void {
  }

  deleteDog(dog: Dog): void {
  }
}
