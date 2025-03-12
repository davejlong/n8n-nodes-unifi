import { IDataObject, IExecuteFunctions, INodeExecutionData } from "n8n-workflow";
import { apiRequestAllItems } from "../../../transport";

export async function getDevices(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const siteId = this.getNodeParameter('siteId', index) as string;

	const requestMethod = 'GET';
	const endpoint = `/sites/${siteId}/devices`;
	const body: IDataObject = {}
	let qs: IDataObject = {};

	let responseData;

	responseData = await apiRequestAllItems.call(this, requestMethod, endpoint, body, qs);

	return this.helpers.returnJsonArray(responseData);
}
