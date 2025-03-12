import { ICredentialDataDecryptedObject, ICredentialsDecrypted, ICredentialTestFunctions, IExecuteFunctions, INodeCredentialTestResult, INodeExecutionData, INodeType, INodeTypeDescription, NodeExecutionWithMetadata } from "n8n-workflow";
import { validateCredentials } from "./transport";

import * as device from './actions/device';
import * as host from './actions/host';
import * as site from './actions/site';

import { router } from "./actions/router";

export class UniFiSiteManager implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'UniFi Site Manager',
		name: 'uniFiSiteManager',
		icon: 'file:../unifi.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Work with the UniFi Site Manager API',
		defaults: {
			name: 'UniFi',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'unifiSiteManagerApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'https://api.ui.com/ea',
			headers: {
				'X-API-KEY': "={{$credentials.apiKey}}",
				'Content-Type': 'application/json',
				'Accept': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Device',
						value: 'device',
					},
					{
						name: 'Host',
						value: 'host',
					},
					{
						name: 'Site',
						value: 'site',
					},
				],
				default: 'host',
			},
			...device.descriptions,
			...host.descriptions,
			...site.description,
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

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][] | NodeExecutionWithMetadata[][] | null> {
		return await router.call(this);
	}
}
