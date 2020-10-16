import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { parse } from 'echarts/extension/dataTool/gexf';

@Component({
  selector: 'app-force-layout',
  templateUrl: './force-layout.component.html',
  styleUrls: ['./force-layout.component.scss']
})
export class ForceLayoutComponent implements OnInit {

  options: Observable<any>;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.options = this.http.get('assets/data/les-miserables.gexf', { responseType: 'text' }).pipe(
      map((xml) => {
        const graph = parse(xml);
        const categories = [];
        for (let i = 0; i < 9; i++) {
          categories[i] = {
            name: 'service' + ' ' + i,
          };
        }
        graph.nodes.forEach((node) => {
          node.itemStyle = null;
          node.symbolSize = 20;
          node.value = node.symbolSize;
          node.category = node.attributes.modularity_class;
          // Use random x, y
          node.x = node.y = null;
          node.draggable = true;
        });
        return {
          title: {
            text: 'Process Monitoring',
            subtext: 'Default layout',
            top: 'bottom',
            left: 'right',
          },
          tooltip: {},
          legend: [
            {
              data: categories.map((a) => a.name),
            },
          ],
          animation: true,
          series: [
            {
              name: 'Information Reference Material',
              type: 'graph',
              layout: 'force',
              data: graph.nodes,
              links: graph.links,
              categories,
              roam: true,
              label: {
                normal: {
                  position: 'right',
                  show: true,
                },
              },
              force: {
                repulsion: 150,
              },
            },
          ],
        };
      }),
    );
  }

}
