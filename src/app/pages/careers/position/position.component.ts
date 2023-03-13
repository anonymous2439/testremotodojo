import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { positionsData } from 'src/app/core/data/position/position.data';
import { PositionModel } from 'src/app/core/data/position/position.model';
import { BlogCategories } from 'src/app/core/enums/blog-categories';
import { positionCategory } from 'src/app/core/utils/position-category';
import { ApplyCareerFragment, CareersFragment } from 'src/app/core/enums/fragments';
import { NavbarService } from 'src/app/core/services/navbar/navbar.service';
import { Pages } from 'src/app/core/enums/pages';
import { Routers } from 'src/app/core/enums/routers';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.scss']
})
export class PositionComponent implements OnInit {
  routers = Routers
  careersFragment = CareersFragment;
  applyCareerFragment = ApplyCareerFragment;
  data: PositionModel

  responsibilities = Object.values(BlogCategories)
  relatedPositions: PositionModel[]
  noRelatedPositions: boolean
  
  constructor(
    private title: Title,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private navbarService: NavbarService
  ) { }

  ngOnInit(): void {
    this.navbarService.getCurrentPage(Pages.Blank)
    this.activatedRoute.paramMap.subscribe((data: any) => this.getPositionData(data))
  }

  getPositionData(data: any) {
    let { id } = data.params

    this.data = positionsData.find(pos => pos.id == id) as PositionModel
    
    if (!this.data) {
      this.router.navigate([Routers.Careers])
    } else {
      this.setBrowserTabTitle()
      this.relatedPositions = positionsData.filter(
        pos => pos.category === this.data.category
            && pos.id !== this.data.id
      ).slice(0, 3)

      this.noRelatedPositions = !this.relatedPositions.length;

      if (this.noRelatedPositions) {
        this.relatedPositions = positionsData.slice(0, 3)
      }
    }
  }

  getPositionCategory(id: number) {
    return positionCategory(id).toUpperCase() + ' '
  }

  setLocations(loc: string[]) {
    return loc.join(", ")
  }

  setBrowserTabTitle() {
    this.title.setTitle(`RemotoDojo | Careers - ${ this.data.title }`)
  }
}
