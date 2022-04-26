import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  inputForm: FormGroup;
  statusses = ['Stable', 'Critical', 'Finished'];

  ngOnInit(): void {
    this.inputForm = new FormGroup({
      // 'projectName': new FormControl(null, [Validators.required, this.testNotAllowed]),
      'projectName': new FormControl(null, Validators.required, this.testNotAllowedAsync),
      'mail': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl(null)
    });
  }

  onSubmit() {
    console.log(this.inputForm);
  }

  testNotAllowed(formControl: FormControl): { [s: string]: boolean } {
    if (formControl.value === 'Test') {
      return {projectNameNotAllowed: true};
    }
    return null;
  }

  testNotAllowedAsync(formControl: FormControl): Promise<any> | Observable<any> {
    return new Promise<any>((resolve, reject) => {
        setTimeout(() => {
          if (formControl.value === 'Test') {
            resolve({projectNameNotAllowed: true});
          }
          resolve(null);
        }, 1500);
      }
    );
  }


}
