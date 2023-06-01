import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./modules/card/card.module").then((m) => m.CardModule),
  },
{
  path: "compare",
  loadChildren: () =>
    import("./modules/compare/compare.module").then((m) => m.CompareModule),
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
