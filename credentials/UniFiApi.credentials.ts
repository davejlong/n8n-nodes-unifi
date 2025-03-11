import type { IAuthenticateGeneric, ICredentialTestRequest, ICredentialType, INodeProperties } from 'n8n-workflow';

export class UniFiApi implements ICredentialType {
	name = 'unifiApi';
	displayName = 'UniFi API';
	documentationUrl = 'https://github.com/davejlong/n8n-nodes-unifi';

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				'X-API-KEY': "={{$credentials.apiKey}}"
			}
		}
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.ui.com/ea',
			url: '/hosts',
			method: 'GET',
		}
	};
}
