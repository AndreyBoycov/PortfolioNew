import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {map, takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import * as _ from 'lodash';
import {
  ChangeLogApproveInfoModel,
  ChangeLogTableModel,
  IChangeLogApproveInfoModel,
  IChangeLogTableModel
} from '../models/change-log.model';

interface DataForSave {
  status: number;
  id: number;
  columnName: string;
  newValue: string;
  weldId: string;
}


@Component({
  selector: 'app-change-log-form',
  templateUrl: './change-log-form.component.html',
  styleUrls: ['./change-log-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeLogFormComponent implements OnInit, OnDestroy {

  tableData: IChangeLogTableModel[] = [];
  tableApproveData: IChangeLogApproveInfoModel[] = [];
  toggleIdent = new Set<string>();
  ubsubscriber$ = new Subject();
  indexHovered: string;
  activeRowIndexSet: Set<number> = new Set();

  constructor(private cdRef: ChangeDetectorRef) {

  }

  ngOnInit() {
    const data = [{weldId: '65399',
                  area: 'SR09702',
                  lineNumber: '0-97-OFSP760040',
                  dateTime: '2019-12-17 08:27:04',
                  labIds: ['3'],
                  weldNumber: 'F7',
                  applicationNumber: '0202TT',
                  conclusionNumber: 'ACS-TT-VT-0066',
                  applications: [{id: '2329', number: '0202TT', template: 'general_application', objectId: '7', organizationId: '14'}],
                  conclusions: [{id: '40352', number: 'ACS-TT-VT-0066', template: 'vt', objectId: '7', organizationId: '14'}]}];
    this.tableData = data.map(item => {
          const modelItem = new ChangeLogTableModel(item);
          modelItem.access = true;
          return modelItem;
        });
    console.log(this.tableData);
    this.cdRef.markForCheck();
  }

  ngOnDestroy() {
    this.unsubscribeAll();
  }


  getSubData(weldId: number) {
    return this.tableApproveData = [{
        id: '10359',
        weldId: '65399',
        columnName: 'member_1_id',
        oldValue: null,
        newValue: 'Труба, торцы с фаской, бесш., Ø10xS-30, ASTM A333 Gr. 6, ASME B36.10',
        comment: '',
        changeClass: 'member',
        login: 'islamov_r',
        dateTime: '2019-12-17 08:27:04',
        subIdent: [{
          weldId: '65399',
          columnName: 'diameterOuterInchesOne',
          displayText: 'Диаметр наружный, дюйм',
          oldValue: '',
          newValue: '10'},
          {
            weldId: '65399',
            columnName: 'thicknessMillimetersOne',
            displayText: 'Толщина, мм',
            oldValue: '',
            newValue: '7.8'},
          {
            weldId: '65399',
            columnName: 'thicknessInchesOne',
            displayText: 'Толщина, дюйм',
            oldValue: '',
            newValue: 'S-30'},
          {
            weldId: '65399',
            columnName: 'diameterOuterMillimetersOne',
            displayText: 'Диаметр наружный, мм',
            oldValue: '',
            newValue: '273'},
          {
            weldId: '65399',
            columnName: 'nameRu',
            displayText: 'Наименование RU',
            oldValue: '',
            newValue: 'Труба'}],
        displayText: 'Материал 1'},

        {id: '10360',
          weldId: '65399',
          columnName: 'member_1_material',
          oldValue: 'A333-6',
          newValue: 'ASTM A333 GR.6',
          comment: '',
          changeClass: null,
          login: 'islamov_r',
          dateTime: '2019-12-17 08:27:04',
          displayText: 'Группа материала 1'},

        {
          id: '10361',
          weldId: '65399',
          columnName: 'member_2_id',
          oldValue: null,
          newValue: 'Труба, торцы с фаской, бесш., Ø10xS-30, ASTM A333 Gr. 6, ASME B36.10',
          comment: '',
          changeClass: 'member',
          login: 'islamov_r',
          dateTime: '2019-12-17 08:27:04',
          subIdent: [{weldId: '65399',
            columnName: 'diameterOuterInchesOne',
            displayText: 'Диаметр наружный, дюйм',
            oldValue: '',
            newValue: '10'},
            {
              weldId: '65399',
              columnName: 'thicknessMillimetersOne',
              displayText: 'Толщина, мм',
              oldValue: '',
              newValue: '7.8'},
            {
              weldId: '65399',
              columnName: 'thicknessInchesOne',
              displayText: 'Толщина, дюйм',
              oldValue: '',
              newValue: 'S-30'},
            {
              weldId: '65399',
              columnName: 'diameterOuterMillimetersOne',
              displayText: 'Диаметр наружный, мм',
              oldValue: '',
              newValue: '273'},
            {
              weldId: '65399',
              columnName: 'nameRu',
              displayText: 'Наименование RU',
              oldValue: '',
              newValue: 'Труба'}],
          displayText: 'Материал 2'},

        {
          id: '10362',
          weldId: '65399',
          columnName: 'member_2_material',
          oldValue: 'A333-6',
          newValue: 'ASTM A333 GR.6',
          comment: '',
          changeClass: null,
          login: 'islamov_r',
          dateTime: '2019-12-17 08:27:04',
          displayText: 'Группа материала 2'}]
        .map(item => new ChangeLogApproveInfoModel(item));

  }

  /**
   * переписывает все "subData"
   * в новой таблице не будет "subData" статус которых !== null
   */
  private removeSavedRows(): void {
    this.tableData = this.tableData
      .map(mainRow => ({
        ...mainRow,
        subData: mainRow.subData.filter(row => row.status === null)
      }));
  }

  /**
   * присваивает статус в зависимости от того
   * какое действие было нажато
   * @param row: это subData
   * @param status 0 или 1
   */
  setStatus(row, status) {
    row.status = status;
    this.unsubscribeAll();
    return row;
  }

  /**
   * функция отменяет принятое "действие"
   * переписывает все статусы subData.status
   * @param row: это subData
   */
  undoStatus(row) {
    row.status = null;
  }

  /**
   * передает статус сразу всем "subData"
   * @param index: индекс tableData
   * @param status: статус "решения"
   */
  setMultiStatus(index, status) {
    this.tableData[index].subData
      .forEach(item => {
        item.status = status;
        this.setStatus(item, status);
      });
    this.tableData[index].toggleHeadIcon = !this.tableData[index].toggleHeadIcon;
  }

  /**
   * Получение данных для сохранения.
   * формируется модель для отправки данных на сервер
   * через функцию submit
   */
  public getDataForSave(): DataForSave[] {
    return this.tableData.reduce((acc, curr) => {
      const rowChanges = curr.subData
        .filter(subDat => subDat.status !== null)
        .map(el => ({
            status: el.status,
            id: el.id,
            columnName: el.columnName,
            newValue: el.newValue,
            weldId: el.weldId
          })
        );

      acc.push(...rowChanges);
      return acc;
    }, []);
  }

  /**
   * Это "Анимация" иконок tableData, показать, спрятать, повернуть.
   * Так же прячет HTML элемент #subRow c помощью hidden.
   * @param subRow: ссылка на html объект
   * @param rowIndex: индекс tableData, чтоб параметры не применялись ко всем tableData
   */
  toggleRow(subRow: HTMLElement, rowIndex: number) {
    if (!this.activeRowIndexSet.has(rowIndex)) {
      this.activeRowIndexSet.add(rowIndex);

    } else {
      this.activeRowIndexSet.delete(rowIndex);
    }

    if (this.isClosedSubContent(subRow)) {

      if (this.isLoadedSubData(rowIndex)) {
        subRow.classList.remove('hidden');

      } else {
        subRow.classList.remove('hidden');
        this.tableData[rowIndex].loading = true;
        setTimeout(
          () => {
            this.tableData[rowIndex].subData = this.getSubData(this.tableData[rowIndex].weldId);
            this.tableData[rowIndex].loading = false;
            this.cdRef.markForCheck();
        },
          1000);
        // // для показа это не нужно)
        // this.getSubData(this.tableData[rowIndex].weldId).subscribe(res => {
        //   this.tableData[rowIndex].subData = res;
        //   this.tableData[rowIndex].loading = false;
        //   this.cdRef.markForCheck();
        // });
      }

    } else {
      subRow.classList.add('hidden');
    }
  }

  /**
   * показывает/скрывает информацию об "ident"
   * @param id: id элемента "нажатой строки"
   */
  toggleSubRow(id: string): void {
    if (this.toggleIdent.has(id)) {
      this.toggleIdent.delete(id);

    } else {
      this.toggleIdent.add(id);
    }
  }

  /**
   * проверка. загружена ли информация
   * @param rowIndex: индекс tableData
   */
  private isLoadedSubData(rowIndex: number) {
    return this.tableData[rowIndex].subData.length;
  }

  /**
   * проверка на "статус" tableData, закрыта/открыта
   * @param subRow
   */
  private isClosedSubContent(subRow: HTMLElement): boolean {
    return subRow.classList.contains('hidden');
  }

  unsubscribeAll() {
    this.ubsubscriber$.next();
    this.ubsubscriber$.complete();
  }

}
