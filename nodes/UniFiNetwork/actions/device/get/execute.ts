import { IDataObject, IExecuteFunctions, INodeExecutionData } from "n8n-workflow";
import { apiRequest } from "../../../transport";

export async function getDevice(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const siteId = this.getNodeParameter('siteId', index) as string;
	const deviceId = this.getNodeParameter('deviceId', index) as string;

	const requestMethod = 'GET';
	const endpoint = `/sites/${siteId}/devices/${deviceId}`;

	const responseData = await apiRequest.call(this, requestMethod, endpoint);
	return this.helpers.returnJsonArray(responseData as IDataObject);
}
