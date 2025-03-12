import { INodeProperties } from 'n8n-workflow';
import * as getAll from './getAll';

export { getAll };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['site'],
			},
		},
		options: [
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Retrieve many sites',
				action: 'Get many sites',
			},
		],
		default: 'getAll',
	},
	...getAll.description,
] as INodeProperties[];
