/**
 * Make an API request to UniFi
 */

import { ICredentialDataDecryptedObject, ICredentialTestFunctions, IHttpRequestOptions } from "n8n-workflow";

/**
 * Validate credentials provided
 */
export async function validateCredentials(
	this: ICredentialTestFunctions,
	decryptedCredentials: ICredentialDataDecryptedObject,
): Promise<any> {
	// const credentials = decryptedCredentials;

	const options: IHttpRequestOptions = {
		method: 'GET',
		url: '/hosts'
	};

	return await this.helpers.request(options);
}
