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
				resource: ['host'],
			},
		},
		options: [
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Retrieve many hosts',
				action: 'Get many hosts',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Retrieve a host',
				action: 'Get a host',
			},
		],
		default: 'getAll',
	},
	...get.description,
	...getAll.description,
] as INodeProperties[];
