import { IDataObject, IExecuteFunctions, INodeExecutionData } from "n8n-workflow";
import { apiRequest } from "../../../transport";

export async function getHost(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const id = this.getNodeParameter('id', index) as string;
	const requestMethod = 'GET';
	const endpoint = `/hosts/${id}`;

	const responseData = await apiRequest.call(this, requestMethod, endpoint);
	return this.helpers.returnJsonArray(responseData.data as IDataObject);
}
