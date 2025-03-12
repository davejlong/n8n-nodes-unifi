import { IExecuteFunctions, INodeExecutionData } from "n8n-workflow";
import { apiRequestAllItems } from "../../../transport";

export async function getSites(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const requestMethod = 'GET';
	const endpoint = '/sites';

	let responseData;

	responseData = await apiRequestAllItems.call(this, requestMethod, endpoint);

	return this.helpers.returnJsonArray(responseData);
}
