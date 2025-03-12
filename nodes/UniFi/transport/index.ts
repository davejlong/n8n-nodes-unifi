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
	const { apiKey } = await this.getCredentials('unifiApi') as { apiKey: string };
	const options: IHttpRequestOptions = {
		method,
		body,
		qs: query,
		url: `https://api.ui.com/ea${endpoint}`,
		headers: {
			'X-API-KEY': apiKey,
			'Content-Type': 'application/json',
			'Accept': 'application/json',
		},
	}

	this.logger.info(`Executing request for ${options.url}`);

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
		query.nextToken = responseData.nextToken;

		if (property) {
			returnData = returnData.concat(responseData.data[0][property] as IDataObject[]);
		} else {
			returnData = returnData.concat(responseData.data as IDataObject[]);
		}
	} while(responseData.nextToken)

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
		url: '/hosts'
	};

	return await this.helpers.request(options);
}
