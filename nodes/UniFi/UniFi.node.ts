import { ICredentialDataDecryptedObject, ICredentialsDecrypted, ICredentialTestFunctions, INodeCredentialTestResult, INodeType, INodeTypeDescription } from "n8n-workflow";
import { validateCredentials } from "./transport";

export class UniFi implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'UniFi',
		name: 'unifi',
		icon: 'file:unifi.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Work with the UniFi API',
		defaults: {
			name: 'UniFi',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'unifiApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: "https://api.ui.com/ea",
			headers: {
				'X-API-KEY': '={{$credentials.apiKey}}',
				'Content-Type': 'application/json',
				'Accept': 'application/json',
			},
		},
		properties: [

		],
	};

	methods = {
		loadOptions: {},
		credentialTest: {
			async unifiApiCredentialTest(
				this: ICredentialTestFunctions,
				credential: ICredentialsDecrypted,
			): Promise<INodeCredentialTestResult> {
				try {
					await validateCredentials.call(this, credential.data as ICredentialDataDecryptedObject);
				} catch(error) {
					if (error.statusCode === 401) {
						return {
							status: 'Error',
							message: 'The API key included in the request is invalid',
						};
					}
				};

				return {
					status: 'OK',
					message: 'Connection successful!',
				};
			}
		},
	};
}
