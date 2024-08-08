import { Component, inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IceGateFormPageComponent } from '../ice-gate-form-page/ice-gate-form-page.component';
import { IceGateService } from '../ice-gate.service';

export interface IntegrationResponse {
	integrationResponseId: number,
	requestorId: string,
	recordType: string,
	voyageCallNumber: string,
	modeOfTransport: string,
	typeOfTransportMeans: string,
	identityOfTransportMeans: string,
	vesselCode: string,
	voyageNumber: string,
	typeOfVessel: string,
	purposeOfCall: string,
	shippingAgentCode: string,
	lineCode: string,
	terminalOperatorCode: string,
	portCode: string,
	expectedDateTimeOfArrival: Date,
	expectedDateTimeOfDeparture: Date,
	serviceName: string,
	allotmentDate: Date,
	manifestNumberOrRotationNumber: string,
	manifestDateOrRotationDate: Date,
	requestePostedDate: Date
}

@Component({
	selector: 'app-ice-gate-list-page',
	templateUrl: './ice-gate-list-page.component.html',
	styleUrls: ['./ice-gate-list-page.component.css']
})

export class ICeGateListPageComponent implements OnInit {

	displayedColumns: string[] = ['requestorId', 'modeOfTransport', 'vesselCode', 'portCode', 'status', 'actions'];
	dataSource: any;

	constructor(private dialog: MatDialog,
		private service: IceGateService
	) { }

	ngOnInit(): void {
		this.load();
	}

	load() {
		this.service.list().subscribe(data => {
			this.dataSource = data;
		});
	}

	addData() {
		var dialogRef = this.dialog.open(IceGateFormPageComponent, {
			width: '800px',
			height: '500px'
		});
		dialogRef.afterClosed().subscribe(result => {
			this.load();
		});
	}

	edit(element: any): void {
		var id = element.integrationRequestId;
		const dialogRef = this.dialog.open(IceGateFormPageComponent, {
			data: id,
			width: '800px',
			height: '500px',
		});
		dialogRef.afterClosed().subscribe((result) => {
			this.load();
		});
	}

	delete(element: any) {
		this.service.delete(element.integrationRequestId).subscribe(data => {
			this.load();
		});
	}

	getStatusClass(stateId: string): string {
		switch (stateId) {
			case 'Created':
				return 'status-created';
			case 'Submitted':
				return 'status-submitted';
			case 'Acknowledged':
				return 'status-acknowledged';
			default:
				return 'status-default';
		}
	}
}
