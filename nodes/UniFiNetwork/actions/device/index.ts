import { INodeProperties } from 'n8n-workflow';

import * as get from './get';
import * as getAll from './getAll';

export { get, getAll };

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
				name: 'Get',
				value: 'get',
				description: 'Retrieve a device',
				action: 'Get a device',
			},
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Retrieve many devices',
				action: 'Get many devices',
			},
		],
		default: 'getAll',
	},
	...get.description,
	...getAll.description,
] as INodeProperties[];
