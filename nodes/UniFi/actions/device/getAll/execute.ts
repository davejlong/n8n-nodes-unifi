import { IDataObject, IExecuteFunctions, INodeExecutionData } from "n8n-workflow";
import { apiRequestAllItems } from "../../../transport";

export async function getDevices(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const requestMethod = 'GET';
	const endpoint = '/devices';
	const body: IDataObject = {}
	let qs: IDataObject = {};

	const hostId = this.getNodeParameter('hostId', index) as string;
	qs['hostIds[]'] = hostId;

	let responseData;

	responseData = await apiRequestAllItems.call(this, requestMethod, endpoint, body, qs, 'devices');

	return this.helpers.returnJsonArray(responseData);
}
