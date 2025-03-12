import type { IAuthenticateGeneric, ICredentialTestRequest, ICredentialType, INodeProperties } from 'n8n-workflow';

export class UniFiSiteManagerApi implements ICredentialType {
	name = 'unifiSiteManagerApi';
	displayName = 'UniFi Site Manager API';
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
				'X-API-KEY': "={{$credentials.apiKey}}",
				'Content-Type': 'application/json',
				'Accept': 'application/json',
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
