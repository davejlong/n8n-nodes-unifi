import { GenericValue, ICredentialDataDecryptedObject, ICredentialTestFunctions, IDataObject, IExecuteFunctions, IHookFunctions, IHttpRequestMethods, IHttpRequestOptions, ILoadOptionsFunctions, JsonObject, NodeApiError } from "n8n-workflow";

/**
 * Make an API request to UniFi
 */
export async function apiRequest(
	this: IHookFunctions | IExecuteFunctions | ILoadOptionsFunctions,
	method: IHttpRequestMethods,
	endpoint: string,
	body: IDataObject | GenericValue | GenericValue[] = {},
	query: IDataObject = {},
) {
	const { host, apiKey } = await this.getCredentials('unifiNetworkApi') as { host: string, apiKey: string };
	const options: IHttpRequestOptions = {
		method,
		body,
		qs: query,
		url: `https://${host}/proxy/network/integration/v1${endpoint}`,
		headers: {
			'X-API-KEY': apiKey,
			'Content-Type': 'application/json',
			'Accept': 'application/json',
		},
	}

	try {
		return await this.helpers.httpRequest(options);
	} catch (error) {
		throw new NodeApiError(this.getNode(), error as JsonObject);
	}
}

/**
 * Make a paginated API request for UniFi
 */
export async function apiRequestAllItems(
	this: IExecuteFunctions | ILoadOptionsFunctions,
	method: IHttpRequestMethods,
	endpoint: string,
	body: IDataObject = {},
	query: IDataObject = {},
	property?: string,
) {
	let returnData: IDataObject[] = [];
	let responseData;

	do {
		responseData = await apiRequest.call(this, method, endpoint, body, query);
		query.offset = responseData.offset + responseData.count;

		if (property) {
			returnData = returnData.concat(responseData.data[0][property] as IDataObject[]);
		} else {
			returnData = returnData.concat(responseData.data as IDataObject[]);
		}
	} while(responseData.offset + responseData.count < responseData.totalCount)

	return returnData;
}

/**
 * Validate credentials provided
 */
export async function validateCredentials(
	this: ICredentialTestFunctions,
	decryptedCredentials: ICredentialDataDecryptedObject,
): Promise<any> {
	const options: IHttpRequestOptions = {
		method: 'GET',
		url: '/sites'
	};

	return await this.helpers.request(options);
}
