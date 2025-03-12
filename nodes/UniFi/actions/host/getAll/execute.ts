import { IExecuteFunctions, INodeExecutionData } from "n8n-workflow";
import { apiRequestAllItems } from "../../../transport";

export async function getHosts(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const requestMethod = 'GET';
	const endpoint = '/hosts';

	let responseData;

	responseData = await apiRequestAllItems.call(this, requestMethod, endpoint);

	return this.helpers.returnJsonArray(responseData);
}
