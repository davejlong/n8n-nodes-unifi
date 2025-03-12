import type { IAuthenticateGeneric, ICredentialTestRequest, ICredentialType, INodeProperties } from 'n8n-workflow';

export class UniFiNetworkApi implements ICredentialType {
	name = 'unifiNetworkApi';
	displayName = 'UniFi Network API';
	documentationUrl = 'https://github.com/davejlong/n8n-nodes-unifi';

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
		},
		{
			displayName: 'Network Controller Address',
			description: 'Address of the UniFi Controller',
			name: 'host',
			type: 'string',
			default: '',
		}
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				'X-API-KEY': "={{$credentials.apiKey}}",
				'Content-Type': 'application/json',
				'Accept': 'application/json',
			}
		}
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: "=https://{{$credentials.host}}/proxy/network/integration/v1",
			url: '/sites',
			method: 'GET',
		}
	};
}
