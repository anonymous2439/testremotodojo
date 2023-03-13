import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() text: string = 'SUBMIT'
  @Input() type: string = 'primary'
  @Input() size: string = 'xs'
  @Input() position: string
  @Input() customStyle: string
  @Input() isFullWidth: boolean = false
  @Input() isSubmit: boolean = false
  @Input() isOutlined: boolean = false
  @Input() isDisabled: boolean = false
  @Input() isLoading: boolean = false
  @Input() isResponsive: boolean = true

  @Output() btnClick = new EventEmitter() 

  constructor() { }

  ngOnInit(): void {
  }

  emitClick() {
    this.btnClick.emit()
  }
}
