import { INodeProperties } from 'n8n-workflow';

import * as getAll from './getAll';

export { getAll };

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['device'],
			},
		},
		options: [
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Retrieve many devices',
				action: 'Get many devices',
			},
		],
		default: 'getAll',
	},
	...getAll.description,
] as INodeProperties[];
